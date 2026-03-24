import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — SpeakSmart',
  description: 'Privacy Policy for SpeakSmart by AppMog Ltd',
};

export default function SpeakSmartPrivacy() {
  return (
    <div className="min-h-screen grain">
      <div className="h-12 lg:h-[66px]" />

      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <h1 className="font-display text-[2.5rem] lg:text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] mb-6">
            SpeakSmart Privacy Policy
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
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              At SpeakSmart, we take your privacy seriously. This policy explains what data we collect, how we use it, and your rights. SpeakSmart is an AI-powered voice-to-text and writing assistant application developed by AppMog Ltd.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Collection</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart collects the following data to provide transcription and AI-powered text enhancement:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li><strong>Voice recordings:</strong> Audio files you record within the app for transcription</li>
              <li><strong>Transcribed text:</strong> The text generated from your voice recordings</li>
              <li><strong>User preferences and settings:</strong> Your app configuration, including language preferences and feature toggles</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              <strong>Data We Do Not Collect:</strong> We do not collect your personal information, identity, location, or any data beyond what&apos;s listed above. Your OpenAI API key is stored securely in iOS Keychain and never transmitted to our servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Processing Methods</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart uses a dual-mode processing system to protect your privacy:
            </p>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Primary Method: On-Device Processing (Apple Intelligence)</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Devices with Apple Intelligence process all voice data locally on your device</li>
              <li>No data leaves your iPhone or iPad</li>
              <li>No internet connection required for transcription</li>
              <li>Full privacy protection—Apple Intelligence privacy policy applies</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Fallback Method: OpenAI API (Optional, User-Configured)</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Used only on devices without Apple Intelligence capabilities</li>
              <li>Requires you to provide your own OpenAI API key</li>
              <li>Voice recordings and transcribed text are sent to OpenAI&apos;s servers only when you explicitly use this feature</li>
              <li>Processing is subject to OpenAI&apos;s privacy policy and your OpenAI account settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Stored on Your Device</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              All your data is stored locally on your iPhone or iPad:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Recording history</li>
              <li>Transcriptions</li>
              <li>Rewritten text</li>
              <li>Your OpenAI API key (encrypted in iOS Keychain)</li>
              <li>App preferences</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              This data never leaves your device unless you explicitly share it or enable OpenAI processing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              SpeakSmart uses the following external services:
            </p>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">Apple Speech Recognition</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Used to transcribe your voice to text on Apple Intelligence-enabled devices</li>
              <li>Audio processing occurs on-device; no data is sent to Apple&apos;s servers</li>
              <li>Subject to <a href="https://www.apple.com/legal/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a></li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">OpenAI API (Optional, User-Configured)</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li><strong>What data is shared:</strong> Voice recordings and transcribed text</li>
              <li><strong>When it&apos;s shared:</strong> Only when you explicitly provide your own OpenAI API key and use OpenAI-powered features</li>
              <li><strong>Purpose:</strong> AI-powered text enhancement and rewriting</li>
              <li><strong>User control:</strong> You maintain full control by providing your own API key. You can disable OpenAI processing at any time by removing your API key from the app settings</li>
              <li><strong>Data protection:</strong> Processing is subject to <a href="https://openai.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">OpenAI&apos;s Privacy Policy</a> and <a href="https://openai.com/security" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">OpenAI&apos;s Data Protection Standards</a></li>
              <li><strong>SpeakSmart&apos;s role:</strong> SpeakSmart does not store, log, or retain copies of data sent to OpenAI. Your data goes directly from the app to OpenAI&apos;s servers using your API key</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              How long we keep your data depends on where it&apos;s processed:
            </p>
            
            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">On-Device Data</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>All locally stored data (recordings, transcriptions, preferences) remains on your device indefinitely</li>
              <li>You control retention by deleting individual items or clearing your history within the app</li>
              <li>Uninstalling SpeakSmart permanently deletes all local data</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-bold mb-3 text-white/90 mt-6">OpenAI-Processed Data</h3>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Data retention is subject to your OpenAI account settings and <a href="https://openai.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">OpenAI&apos;s Privacy Policy</a></li>
              <li>SpeakSmart does not retain copies of data sent to OpenAI</li>
              <li>For questions about OpenAI&apos;s data retention, contact OpenAI directly</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Optional Analytics</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              If you opt in (entirely optional), we collect anonymous usage data to improve the app:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Which features are used most</li>
              <li>App performance metrics</li>
              <li>Crash reports</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              This data contains no personal information and cannot identify you. You can change this preference anytime in Settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Data Security</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your data is protected by:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>iOS built-in encryption</li>
              <li>Keychain storage for sensitive data (API key)</li>
              <li>No cloud storage or sync (by default)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Your Rights</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have complete control over your data:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li><strong>Access:</strong> All your data is visible in the app</li>
              <li><strong>Deletion:</strong> Delete individual recordings or clear all history</li>
              <li><strong>Export:</strong> Share any recording to another app</li>
              <li><strong>Removal:</strong> Uninstalling the app deletes all local data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Children&apos;s Privacy</h2>
            <p className="text-white/70 leading-relaxed">
              SpeakSmart is not intended for children under 13. We do not knowingly collect data from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-[1.5rem] font-bold mb-4 text-white">Contact Us</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="font-display font-bold text-white mb-2">AppMog Ltd</p>
              <p className="text-white/70">Email: <a href="mailto:privacy@appmog.com" className="text-accent hover:underline">privacy@appmog.com</a></p>
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
