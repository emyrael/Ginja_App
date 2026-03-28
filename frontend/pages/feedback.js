import Head from 'next/head';
import { useEffect } from 'react';

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/1jTV1wg9RGzJ08H9UE0e_fSkbmdwC573FHgjST0WHiR4/edit';

export default function FeedbackRedirectPage() {
  useEffect(() => {
    window.location.replace(FEEDBACK_FORM_URL);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting to Feedback</title>
        <meta httpEquiv="refresh" content={`0;url=${FEEDBACK_FORM_URL}`} />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <p>
          Redirecting to feedback form...
          {' '}
          <a href={FEEDBACK_FORM_URL}>Click here if you are not redirected.</a>
        </p>
      </main>
    </>
  );
}
