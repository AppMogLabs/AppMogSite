import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — SpeakSmart',
  description: 'Terms & Conditions for SpeakSmart by AppMog Ltd',
};

export default function SpeakSmartTerms() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            SpeakSmart Terms of Service
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>Effective Date: March 24, 2026</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span>Company: AppMog Ltd</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Acceptance of Terms</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of SpeakSmart, an iOS voice-to-text transcription and AI enhancement application developed by AppMog LTD (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;AppMog&quot;). By downloading, installing, or using SpeakSmart, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Service Description</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Overview</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart is an iOS application that converts voice recordings into text and provides AI-powered enhancement, correction, and rewriting capabilities. The application operates on a freemium model:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li><strong>Free Tier:</strong> 20 text rewrites per calendar day</li>
              <li><strong>Pro Subscription:</strong> $4.99/month for unlimited rewrites and advanced features</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Dual-Mode AI Processing</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart uses two distinct processing modes based on your device capabilities:
            </p>
            
            <p className="text-white/70 leading-relaxed"><strong>Mode 1: On-Device Processing (Apple Intelligence)</strong></p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Available on devices with Apple Intelligence capability</li>
              <li>All voice data and text processing occurs entirely on your device</li>
              <li>No data transmission to external servers</li>
              <li>No internet connection required for processing</li>
              <li>Full privacy maintained</li>
            </ul>

            <p className="text-white/70 leading-relaxed mt-4"><strong>Mode 2: OpenAI API Integration (Fallback)</strong></p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Available on devices without Apple Intelligence</li>
              <li>Requires you to provide your own OpenAI API key</li>
              <li>Voice recordings and transcribed text are sent to OpenAI&apos;s servers for processing</li>
              <li>Processing is performed under your OpenAI account</li>
              <li>Subject to OpenAI&apos;s Terms of Service and Privacy Policy</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Core Features</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice-to-text transcription</li>
              <li>AI-powered text refinement and rewriting</li>
              <li>Grammar and style correction</li>
              <li>Format conversion and summarization</li>
              <li>Voice recording storage (local device storage)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">User Responsibilities</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">OpenAI API Key Management</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              If you choose to use OpenAI API integration on a device without Apple Intelligence:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>You are responsible for obtaining and maintaining a valid OpenAI API key from OpenAI directly</li>
              <li>You must create and maintain an active OpenAI account in good standing</li>
              <li>You are solely responsible for the security of your API key. Do not share your API key with anyone.</li>
              <li>SpeakSmart will never request, store, or transmit your API key to our servers</li>
              <li>You may remove or revoke your API key at any time through the SpeakSmart app settings or directly via OpenAI&apos;s account management</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Compliance with Third-Party Terms</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              When using OpenAI API integration, you agree to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Comply fully with OpenAI&apos;s Terms of Service (<a href="https://openai.com/terms" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/terms</a>)</li>
              <li>Comply fully with OpenAI&apos;s Usage Policies (<a href="https://openai.com/policies" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies</a>)</li>
              <li>Not use the API in ways that violate OpenAI&apos;s terms or any applicable law</li>
              <li>You are responsible for any charges incurred through your OpenAI account related to API usage</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Account Information</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Provide accurate and complete information when creating your SpeakSmart account</li>
              <li>Keep your account credentials confidential</li>
              <li>Promptly notify AppMog of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Legal and Responsible Use</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree to use SpeakSmart only for lawful purposes and in compliance with all applicable laws and regulations. You will not:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Use the service to create content that is defamatory, fraudulent, or violates anyone&apos;s rights</li>
              <li>Use the service for any form of harassment, abuse, or illegal activity</li>
              <li>Attempt to reverse-engineer, decompile, or discover the source code or data structures of SpeakSmart</li>
              <li>Circumvent any security or encryption measures</li>
              <li>Use the service for commercial purposes without prior written permission</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data and Privacy</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Privacy Policy Reference</h3>
            <p className="text-white/70 leading-relaxed">
              Your privacy is important to us. Please review our complete <a href="/privacy/speaksmart" className="text-accent hover:underline">Privacy Policy</a> for comprehensive information about how we collect, use, and protect your data.
            </p>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">User Data Ownership</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              You retain full ownership of all content you create using SpeakSmart, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice recordings</li>
              <li>Transcribed text</li>
              <li>Rewritten content</li>
              <li>User notes and preferences</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              You grant AppMog a limited license to use your data solely to provide and improve the SpeakSmart service, diagnose technical problems, and enforce these Terms.
            </p>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Data Processing by AppMog</h3>
            <p className="text-white/70 leading-relaxed"><strong>On-Device Processing (Apple Intelligence)</strong></p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>No data is transmitted from your device</li>
              <li>No data is collected or retained by AppMog</li>
              <li>All processing remains on your device</li>
            </ul>

            <p className="text-white/70 leading-relaxed mt-4"><strong>OpenAI API Integration</strong></p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Voice data and text are transmitted to OpenAI&apos;s servers using your OpenAI API key</li>
              <li>AppMog does not retain, store, or process copies of data sent to OpenAI</li>
              <li>Data processing is governed by OpenAI&apos;s Privacy Policy (<a href="https://openai.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/privacy</a>)</li>
              <li>You are responsible for reviewing OpenAI&apos;s privacy practices</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Data Retention</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li><strong>Local Device Storage:</strong> Voice recordings and transcriptions remain on your device until you delete them</li>
              <li><strong>SpeakSmart Servers:</strong> We do not retain copies of your voice data, transcriptions, or processed content</li>
              <li><strong>OpenAI Servers:</strong> Data retention is governed by your OpenAI account settings and OpenAI&apos;s privacy policy</li>
              <li><strong>Service Logs:</strong> We may retain limited metadata (timestamps, usage statistics) to improve the service, but not the content itself</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Data Security</h3>
            <p className="text-white/70 leading-relaxed">
              We implement industry-standard security measures to protect your data. However, no security system is impenetrable. You acknowledge that no transmission over the internet is 100% secure, you use SpeakSmart at your own risk, and you are responsible for securing your device and API credentials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Third-Party Services</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">OpenAI Integration</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart integrates with OpenAI&apos;s API to provide AI-powered text enhancement on devices without Apple Intelligence. By using this feature, you acknowledge:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>OpenAI is a third-party service provider independent of AppMog</li>
              <li>OpenAI&apos;s services are provided &quot;as-is&quot; under OpenAI&apos;s terms</li>
              <li>AppMog is not responsible for OpenAI&apos;s service quality, availability, or practices</li>
              <li>You are responsible for complying with OpenAI&apos;s Terms of Service</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Third-Party Service Availability</h3>
            <p className="text-white/70 leading-relaxed">
              We do not guarantee the availability, uptime, or performance of third-party services including OpenAI. Service interruptions, API changes, or discontinuation by third parties are beyond our control.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Subscription and Billing</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Pro Subscription</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>SpeakSmart Pro is available as a monthly subscription at $4.99/month</li>
              <li>Payment is processed through Apple&apos;s App Store and subject to Apple&apos;s terms</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date</li>
              <li>You can manage or cancel your subscription through your Apple ID account settings</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Refunds</h3>
            <p className="text-white/70 leading-relaxed">
              All purchases are final. Refunds are handled by Apple according to their App Store refund policies. Contact Apple Support for refund requests.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Intellectual Property</h2>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">App Ownership</h3>
            <p className="text-white/70 leading-relaxed">
              SpeakSmart, including all content, features, and functionality, is owned by AppMog LTD and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works of the app without our written permission.
            </p>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">User Content License</h3>
            <p className="text-white/70 leading-relaxed">
              You retain ownership of content you create. By using SpeakSmart, you grant us a limited, non-exclusive, royalty-free license to use your content solely to provide and improve the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Termination</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to SpeakSmart at any time, without notice, for:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of the service or other users</li>
              <li>Non-payment of subscription fees</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              Upon termination, your right to use SpeakSmart immediately ceases. All provisions of these Terms that by their nature should survive termination shall survive.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Disclaimers and Limitation of Liability</h2>
            
            <div className="bg-amber-900/10 border border-amber-900/30 rounded-lg p-6 mb-6">
              <p className="text-white/70 leading-relaxed uppercase text-sm font-display font-bold">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">AI-Generated Content</h3>
            <p className="text-white/70 leading-relaxed">
              AI-generated content is provided for convenience. You are responsible for reviewing and ensuring the accuracy and appropriateness of all content before use. We do not guarantee the accuracy, completeness, or usefulness of AI-generated output.
            </p>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Third-Party Services</h3>
            <p className="text-white/70 leading-relaxed">
              We are not responsible for the availability, quality, or practices of third-party services including OpenAI. Your use of third-party services is at your own risk and subject to their terms.
            </p>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Limitation of Liability</h3>
            <p className="text-white/70 leading-relaxed">
              To the maximum extent permitted by law, AppMog LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of SpeakSmart, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Changes to Terms</h2>
            <p className="text-white/70 leading-relaxed">
              We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of SpeakSmart after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Contact</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="font-display font-bold text-white mb-2">AppMog Ltd</p>
              <p className="text-white/70">Email: <a href="mailto:legal@appmog.app" className="text-accent hover:underline">legal@appmog.app</a></p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 mt-12">
          <p className="text-sm text-white/40">Last updated: March 24, 2026</p>
        </footer>
      </article>
    </div>
  );
}
