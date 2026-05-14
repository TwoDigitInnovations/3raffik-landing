import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_URL = 'https://3raffik.2digitinnovations.com/';

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${API_URL}policy/privacy`);
    const json = await res.json();
    const raw = json?.data?.content || '';
    const content = decodeHtmlEntities(raw);
    return { props: { content, error: null } };
  } catch (err) {
    return { props: { content: '', error: 'Failed to load privacy policy.' } };
  }
}

export default function PrivacyPolicy({ content, error }) {
  return (
    <>
      <Head>
        <title>Privacy Policy - 3raffik</title>
        <meta
          name="description"
          content="3raffik Privacy Policy - How we collect, use, and protect your personal information."
        />
      </Head>

      <style jsx global>{`
        .policy-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .policy-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .policy-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .policy-content p {
          color: #374151;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .policy-content ul,
        .policy-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: #374151;
        }
        .policy-content ul {
          list-style-type: disc;
        }
        .policy-content ol {
          list-style-type: decimal;
        }
        .policy-content li {
          margin-bottom: 0.4rem;
          line-height: 1.7;
        }
        .policy-content strong {
          font-weight: 600;
          color: #111827;
        }
        .policy-content a {
          color: #d97706;
          text-decoration: underline;
        }
        .policy-content blockquote {
          border-left: 4px solid #fbbf24;
          padding-left: 1rem;
          color: #6b7280;
          font-style: italic;
          margin: 1rem 0;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Privacy Policy
            </h1>
          </div>

          {/* Dynamic Content */}
          {error ? (
            <div className="text-center text-red-500 py-12">{error}</div>
          ) : content ? (
            <div
              className="policy-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="text-center text-gray-400 py-12">
              No privacy policy content available yet.
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-16">
            <a
              href="/"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold transition-colors inline-block"
            >
              Back to Home
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
