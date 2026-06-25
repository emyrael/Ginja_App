function inlineText(text, keyPrefix) {
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={key}>{part.slice(1, -1)}</em>;
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

    return part;
  });
}

export default function MarkdownArticle({ content }) {
  const lines = String(content || '').replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let listItems = [];
  let orderedListItems = [];
  let paragraph = [];
  let codeBlock = [];
  let inCodeBlock = false;

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

  lines.forEach((line) => {
    const trimmed = line.trim();

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

      return;
    }

    if (inCodeBlock) {
      codeBlock.push(line);
      return;
    }

    if (!trimmed) {
      flushParagraph();
      flushLists();
      return;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushLists();
      blocks.push({ type: `h${headingMatch[1].length}`, text: headingMatch[2] });
      return;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (unorderedMatch) {
      flushParagraph();
      orderedListItems = [];
      listItems.push(unorderedMatch[1]);
      return;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      listItems = [];
      orderedListItems.push(orderedMatch[1]);
      return;
    }

    if (trimmed.startsWith('> ')) {
      flushParagraph();
      flushLists();
      blocks.push({ type: 'quote', text: trimmed.slice(2) });
      return;
    }

    paragraph.push(trimmed);
  });

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
