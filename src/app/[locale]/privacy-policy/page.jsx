import MainFooter from '../components/MainFooter'
import React from 'react'
import MainHeader from '../components/MainHeader'

const page = () => {
  return (
    <>
    <MainHeader />
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white text-primary py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Protecting your information across all GTC platforms and subdomains
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Who We Are */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Who We Are</h2>
          </div>
          <p className="text-gray-700 mb-6">
            This Privacy Policy applies to GTC, including all of its subdomains such as reg.gtcfx.com (and all other GTC-related subdomains), and covers how we handle your personal information.
          </p>
          <p className="text-gray-700 mb-4">
            When we say “GTC,” “GTCFX,” “we,” “our,” or “us,” we’re referring to:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-secondary pl-4 py-2 bg-blue-50 rounded-r">
              <h3 className="font-bold text-blue-900">GTC Global Trade Capital Co. Ltd</h3>
              <p className="text-gray-700">Authorised by the Vanuatu Financial Services Commission (VFSC).</p>
              <p className="text-gray-700">Licence Number: 40354.</p>
              <p className="text-gray-700">Address: 1st Floor, B&P House, Kumul Highway, Port Vila, Vanuatu.</p>
            </div>
            
            <div className="border-l-4 border-secondary pl-4 py-2 bg-blue-50 rounded-r">
              <h3 className="font-bold text-blue-900">GTC Global Ltd</h3>
              <p className="text-gray-700">Authorised by the Financial Services Commission of Mauritius.</p>
              <p className="text-gray-700">Licence Number: GB22200292.</p>
              <p className="text-gray-700">Address: The Cyberati Lounge, Ground Floor, The Catalyst, 40 Cybercity, 72201 Ebene, Mauritius.</p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Our Commitment</h2>
          </div>
          <p className="text-gray-700 mb-6">
            At GTC, your privacy isn’t just a checkbox, it’s a priority. We’re committed to protecting your personal data and being fully transparent about how it’s collected, used, and safeguarded across all our domains.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 font-semibold mb-4">
              This policy explains:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 mr-2">✓</span>
                <span className="text-gray-700">What personal data we collect</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 mr-2">✓</span>
                <span className="text-gray-700">Why we collect it</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 mr-2">✓</span>
                <span className="text-gray-700">How we protect it</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 mr-2">✓</span>
                <span className="text-gray-700">Your rights and how to exercise them</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Personal Data We Collect */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <path d="M20 8v6"/>
                <path d="M17 11h6"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">The Personal Data We Collect</h2>
          </div>
          <p className="text-gray-700 mb-6">
            When you interact with GTC – whether through opening an account, visiting our site, or signing up on any of our landing pages, we may collect:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Personal Information</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Full name, date and place of birth, gender, and nationality.</li>
                <li>Contact details: email, phone number, residential address.</li>
                <li>Employment and income details.</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Financial & Technical Data</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Financial info: bank details, source of funds, trading history.</li>
                <li>Identity documents: passport, driving licence, national ID.</li>
                <li>Trading preferences and performance.</li>
                <li>IP address, device info, cookies, and platform usage.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-100 border-l-4 border-secondary p-4 rounded-r">
            <p className="text-gray-700">
              We may also record phone calls and chat conversations for compliance and training.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">How We Use Your Information</h2>
          </div>
          <p className="text-gray-700 mb-6">
            We only use your data when we have a lawful reason to do so.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "To provide services – So we can set up and manage your trading account.",
              "To meet legal obligations – Including anti-money laundering and regulatory requirements.",
              "To protect our business interests – Like improving our platforms, analysing user behaviour, and managing risk.",
              "With your consent – For email marketing and exclusive webinar invites.",
              "For customer support – To help you with requests or resolve issues.",
              "To improve our website experience – Using cookies, geolocation, and session tracking.",
              "To keep records – For auditing, legal, and tax reasons."
            ].map((item, index) => (
              <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mt-1 mr-3">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-900 text-white p-4 rounded-lg">
            <p className="font-semibold text-center">
              We’ll never sell your data. Period.
            </p>
          </div>
        </section>

        {/* Who We Share Your Data With */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Who We Share Your Data With</h2>
          <p className="text-gray-700 mb-6">
            Your data may be shared with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {icon: "🏢", text: "Other GTC entities (e.g. regulated arms in Vanuatu and Mauritius)."},
              {icon: "💳", text: "Payment providers and identity verification services."},
              {icon: "⚖️", text: "Legal, compliance, and financial service partners."},
              {icon: "📋", text: "Regulatory authorities, when required by law."},
              {icon: "📊", text: "Marketing tools (but never for third-party marketing)."}
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                <span className="text-2xl mb-2">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-700">
              We only share data on a need-to-know basis and make sure any third party meets strict data protection standards.
            </p>
          </div>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="text-primary text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l2 2"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Cookies & Tracking</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We use cookies and tracking tech on all GTCFX domains to:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "Remember your preferences.",
              "Show you relevant content.",
              "Analyse website usage.",
              "Run remarketing campaigns."
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-700">
              You can manage your cookie settings in your browser. For more info, see our <a href="#" className="text-secondary underline">Cookies Policy</a>.
            </p>
          </div>
        </section>

        {/* International Transfers */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">International Transfers</h2>
          <p className="text-gray-700 mb-6">
            Because we operate globally, your data might be processed outside the EEA. Whenever we do this, we make sure your data is just as safe as it would be under EU laws, using safeguards like GDPR-compliant contracts.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Rights</h2>
          <p className="text-gray-700 mb-6">
            Here’s what you’re entitled to under data protection laws:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Access your data.",
              "Update or correct it.",
              "Request deletion if we no longer need it.",
              "Limit how we use it.",
              "Withdraw consent at any time.",
              "Request transfer of your data to another provider.",
              "Object to marketing or data profiling."
            ].map((right, index) => (
              <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">{index + 1}</span>
                <span className="text-gray-700">{right}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-700">
              To exercise any of these rights, email: <a href="mailto:support@gtcfx.com" className="text-secondary font-semibold">support@gtcfx.com</a>.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We’ll keep your data:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-gray-700">For as long as your account is active.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-gray-700">For at least 5 years after closing your account, to meet AML and regulatory obligations.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">⚖️</div>
              <p className="text-gray-700">Longer if required for legal, tax, or dispute purposes.</p>
            </div>
          </div>
        </section>

        {/* Keeping Your Data Safe */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Keeping Your Data Safe</h2>
          <p className="text-gray-700 mb-6">
            We store your data in secure servers, limit staff access, and train our team regularly on data protection. We also use encryption, access controls, and strict monitoring to keep your data protected.
          </p>
        </section>

        {/* Updates to This Policy */}
        <section className="mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. Any updates will be posted on gtcfx.com and across relevant subdomains.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 max-w-md">
              Questions? Need help with your data rights?
            </p>
            <a 
              href="mailto:support@gtcfx.com" 
              className="bg-white text-primary hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center"
            >
              Email us at support@gtcfx.com
            </a>
          </div>
        </section>
      </main>

  
    </div>
    <MainFooter />
    </>
  )
}

export default page