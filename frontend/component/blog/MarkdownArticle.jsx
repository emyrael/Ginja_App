function normalizeMarkdownEscapes(text) {
  return String(text || '').replace(/\\([.()[\]#*_`>+-])/g, '$1');
}

function linkText(text, keyPrefix) {
  const parts = String(text).split(/(https?:\/\/[^\s<>()]+[^\s<>().,;:!?])/g);

  return parts.map((part, index) => {
    if (!/^https?:\/\//i.test(part)) {
      return part;
    }

    return (
      <a
        key={`${keyPrefix}-url-${index}`}
        href={part}
        className="font-semibold text-[#C94B16] hover:text-[#A63D13]"
        rel="noopener noreferrer"
        target="_blank"
      >
        {part}
      </a>
    );
  });
}

function inlineText(text, keyPrefix) {
  const parts = normalizeMarkdownEscapes(text).split(
    /(!\[[^\]]*]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,
  );

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    const imageMatch = part.match(/^!\[([^\]]*)]\((https?:\/\/[^)]+)\)$/i);
    if (imageMatch) {
      return (
        <img
          key={key}
          src={imageMatch[2]}
          alt={imageMatch[1] || ''}
          className="my-7 block max-h-[30rem] w-full rounded-2xl border border-[var(--border-color)] object-cover"
          loading="lazy"
        />
      );
    }

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{linkText(part.slice(2, -2), key)}</strong>;
    }

    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={key}>{linkText(part.slice(1, -1), key)}</em>;
    }

    if (/^`[^`]+`$/.test(part)) {
      return (
        <code key={key} className="rounded bg-[var(--surface-muted)] px-1.5 py-0.5 text-sm">
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch && /^https?:\/\//i.test(linkMatch[2])) {
      return (
        <a
          key={key}
          href={linkMatch[2]}
          className="font-semibold text-[#C94B16] hover:text-[#A63D13]"
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return linkText(part, key);
  });
}

function isImageUrl(value) {
  return /^https?:\/\/\S+?(?:\.(?:png|jpe?g|webp|gif|avif)(?:[?#]\S*)?|images\.unsplash\.com\/|\/storage\/v1\/object\/public\/)/i.test(
    value,
  );
}

function isMarkdownTableSeparator(value) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(value.trim());
}

function isMarkdownTableRow(value) {
  return value.trim().includes('|');
}

function parseMarkdownTableRow(value) {
  const trimmed = value.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
}

function hasHtmlMarkup(content) {
  return /<\/?(h1|h2|h3|p|ul|ol|li|blockquote|table|thead|tbody|tr|th|td|img|strong|em|a)\b/i.test(String(content || ''));
}

function sanitizeHtml(content) {
  return String(content || '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[\s\S]*?>[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[\s\S]*?>[\s\S]*?<\/embed>/gi, '')
    .replace(/<form[\s\S]*?>[\s\S]*?<\/form>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+on[a-z]+\s*=\s*(['"])[\s\S]*?\1/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*[^\s>]+/gi, '')
    .replace(/\s+style\s*=\s*(['"])[\s\S]*?\1/gi, '')
    .replace(/\s+style\s*=\s*[^\s>]+/gi, '')
    .replace(/\s+(href|src)\s*=\s*(['"])\s*(javascript:|data:|vbscript:)[\s\S]*?\2/gi, '')
    .replace(/\s+(href|src)\s*=\s*(javascript:|data:|vbscript:)[^\s>]+/gi, '')
    .replace(/<\/?(?:html|head|body|meta|link|base|input|button|select|textarea|svg|canvas)[^>]*>/gi, '');
}

export default function MarkdownArticle({ content, skipFirstImageSrc }) {
  if (hasHtmlMarkup(content)) {
    return (
      <div
        className="article-content mt-8"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
      />
    );
  }

  const lines = String(content || '').replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let listItems = [];
  let orderedListItems = [];
  let paragraph = [];
  let codeBlock = [];
  let inCodeBlock = false;
  let skippedFirstImage = false;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };

  const flushLists = () => {
    if (listItems.length) {
      blocks.push({ type: 'ul', items: listItems });
      listItems = [];
    }

    if (orderedListItems.length) {
      blocks.push({ type: 'ol', items: orderedListItems });
      orderedListItems = [];
    }
  };

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const trimmed = line.trim();
    const normalizedTrimmed = normalizeMarkdownEscapes(trimmed);

    if (trimmed.startsWith('```')) {
      flushParagraph();
      flushLists();

      if (inCodeBlock) {
        blocks.push({ type: 'code', text: codeBlock.join('\n') });
        codeBlock = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }

      continue;
    }

    if (inCodeBlock) {
      codeBlock.push(line);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushLists();
      continue;
    }

    if (isMarkdownTableRow(trimmed) && isMarkdownTableSeparator(lines[lineIndex + 1] || '')) {
      const header = parseMarkdownTableRow(trimmed);
      const rows = [];

      lineIndex += 2;

      while (lineIndex < lines.length && isMarkdownTableRow(lines[lineIndex]) && lines[lineIndex].trim()) {
        rows.push(parseMarkdownTableRow(lines[lineIndex]));
        lineIndex += 1;
      }

      lineIndex -= 1;
      flushParagraph();
      flushLists();
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    const headingMatch = normalizedTrimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushLists();
      blocks.push({ type: `h${headingMatch[1].length}`, text: headingMatch[2] });
      continue;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)]\((https?:\/\/[^)]+)\)$/i);
    if (imageMatch) {
      flushParagraph();
      flushLists();

      if (!skippedFirstImage && skipFirstImageSrc && imageMatch[2] === skipFirstImageSrc) {
        skippedFirstImage = true;
        continue;
      }

      blocks.push({ type: 'image', alt: imageMatch[1] || '', src: imageMatch[2] });
      continue;
    }

    if (isImageUrl(trimmed)) {
      flushParagraph();
      flushLists();

      if (!skippedFirstImage && skipFirstImageSrc && trimmed === skipFirstImageSrc) {
        skippedFirstImage = true;
        continue;
      }

      blocks.push({ type: 'image', alt: '', src: trimmed });
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      orderedListItems = [];
      listItems.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = normalizedTrimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      listItems = [];
      orderedListItems.push(orderedMatch[1]);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushParagraph();
      flushLists();
      blocks.push({ type: 'quote', text: trimmed.slice(2) });
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushLists();

  if (codeBlock.length) {
    blocks.push({ type: 'code', text: codeBlock.join('\n') });
  }

  return (
    <div className="mt-8">
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        if (block.type === 'h1') {
          return (
            <h2 key={key} className="mt-8 text-2xl font-semibold sm:text-3xl">
              {inlineText(block.text, key)}
            </h2>
          );
        }

        if (block.type === 'h2') {
          return (
            <h2 key={key} className="mt-8 text-2xl font-semibold sm:text-3xl">
              {inlineText(block.text, key)}
            </h2>
          );
        }

        if (block.type === 'h3') {
          return (
            <h3 key={key} className="mt-7 text-xl font-semibold sm:text-2xl">
              {inlineText(block.text, key)}
            </h3>
          );
        }

        if (block.type === 'ul') {
          return (
            <ul key={key} className="mt-4 list-disc space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>{inlineText(item, `${key}-${itemIndex}`)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={key} className="mt-4 list-decimal space-y-2 pl-6 text-base text-[var(--text-secondary)] sm:text-lg">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>{inlineText(item, `${key}-${itemIndex}`)}</li>
              ))}
            </ol>
          );
        }

        if (block.type === 'image') {
          return (
            <img
              key={key}
              src={block.src}
              alt={block.alt}
              className="my-7 block max-h-[30rem] w-full rounded-2xl border border-[var(--border-color)] object-cover"
              loading="lazy"
            />
          );
        }

        if (block.type === 'table') {
          return (
            <div key={key} className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--surface-primary)]">
              <table className="w-full min-w-[42rem] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[var(--surface-muted)] text-[var(--text-primary)]">
                  <tr>
                    {block.header.map((cell, cellIndex) => (
                      <th
                        key={`${key}-head-${cellIndex}`}
                        className="border-b border-[var(--border-color)] px-4 py-3 align-top font-bold"
                      >
                        {inlineText(cell, `${key}-head-${cellIndex}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={`${key}-row-${rowIndex}`}>
                      {block.header.map((_, cellIndex) => (
                        <td
                          key={`${key}-cell-${rowIndex}-${cellIndex}`}
                          className="border-b border-[var(--border-color)] px-4 py-3 align-top last:border-b-0"
                        >
                          {inlineText(row[cellIndex] || '', `${key}-cell-${rowIndex}-${cellIndex}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={key}
              className="mt-6 border-l-4 border-[#ED8522] bg-[var(--surface-soft)] px-5 py-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
            >
              {inlineText(block.text, key)}
            </blockquote>
          );
        }

        if (block.type === 'code') {
          return (
            <pre
              key={key}
              className="mt-5 overflow-x-auto rounded-2xl bg-[var(--surface-muted)] p-4 text-sm text-[var(--text-secondary)]"
            >
              <code>{block.text}</code>
            </pre>
          );
        }

        return (
          <p key={key} className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {inlineText(block.text, key)}
          </p>
        );
      })}
    </div>
  );
}
