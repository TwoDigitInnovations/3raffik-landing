import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - 3raffik</title>
        <meta name="description" content="3raffik Privacy Policy - How we collect, use, and protect your personal information." />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 16, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At 3raffik, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our 
                affiliate marketing platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-bold text-black mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Payment and billing information</li>
                <li>Business information (company name, tax ID)</li>
                <li>Profile information and preferences</li>
              </ul>

              <h3 className="text-xl font-bold text-black mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Platform usage data and analytics</li>
                <li>Commission and transaction history</li>
                <li>QR code generation and sharing data</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and improve our affiliate marketing services</li>
                <li>Process payments and commissions</li>
                <li>Send important updates and notifications</li>
                <li>Analyze platform performance and user behavior</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal requirements</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in these situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>With your consent</li>
                <li>With service providers who help us operate our platform</li>
                <li>For legal compliance or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your information, including 
                encryption, secure servers, and regular security audits. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze usage, 
                and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-yellow-50 rounded-xl p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@3raffik.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Business St, San Francisco, CA 94105
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-4">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by email or through our platform. Your continued use of 3raffik 
                after changes indicates your acceptance of the updated policy.
              </p>
            </section>

          </div>

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