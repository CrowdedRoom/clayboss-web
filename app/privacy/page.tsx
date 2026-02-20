import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Clay Boss",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <header className="bg-stone-900 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-stone-400 hover:text-white text-sm mb-4 inline-block transition-colors">← Back to Clay Boss</Link>
          <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-stone-400 mt-2">Last updated: February 19, 2026</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-stone max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Overview</h2>
            <p className="text-stone-600 leading-relaxed">
              Clay Boss ("we", "our", or "us") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What We Collect</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-2">Account Information</h3>
                <p className="text-stone-600 text-sm">Your email address and password, used to create and manage your Clay Boss account. Stored securely via Supabase.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-2">App Usage Data</h3>
                <p className="text-stone-600 text-sm">The pottery guides you generate and save, so we can display them in your personal library within the app.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-2">Subscription Status</h3>
                <p className="text-stone-600 text-sm">Whether you have an active Pro subscription, managed by RevenueCat. We never see or store your payment details — all billing is handled by Apple.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What We Don't Collect</h2>
            <ul className="space-y-2 text-stone-600">
              {[
                "Location data",
                "Contacts or address book",
                "Camera or microphone access",
                "Device identifiers for tracking",
                "Data sold to third parties — ever",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-clay-500 font-bold text-lg">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Third-Party Services</h2>
            <div className="space-y-3">
              {[
                { name: "Supabase", desc: "Authentication and secure data storage. Privacy policy: supabase.com/privacy" },
                { name: "RevenueCat", desc: "Subscription management. Your payment info goes directly to Apple — RevenueCat only tracks subscription status. Privacy policy: revenuecat.com/privacy" },
                { name: "Google Gemini API", desc: "Generates pottery guide content from your prompts. Your prompts are sent to Google's API to produce results. Privacy policy: policies.google.com/privacy" },
              ].map((s) => (
                <div key={s.name} className="bg-white rounded-2xl p-6 border border-stone-100">
                  <h3 className="font-bold text-stone-900 mb-1">{s.name}</h3>
                  <p className="text-stone-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Data Retention</h2>
            <p className="text-stone-600 leading-relaxed">
              We retain your account data and saved guides for as long as your account is active. If you delete your account, all associated data is permanently deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Your Rights</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              You can request access to, correction of, or deletion of your personal data at any time. To delete your account, use the Delete Account option in the app's Settings screen, or contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Children's Privacy</h2>
            <p className="text-stone-600 leading-relaxed">
              Clay Boss is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Contact</h2>
            <p className="text-stone-600 leading-relaxed">
              Questions about this privacy policy? Email us at{" "}
              <a href="mailto:white8767@gmail.com" className="text-clay-500 font-medium hover:underline">
                white8767@gmail.com
              </a>
            </p>
          </section>

        </div>
      </main>

      <footer className="py-8 px-6 border-t border-stone-200 text-center text-stone-400 text-sm">
        <Link href="/" className="hover:text-clay-500 transition-colors">← Back to Clay Boss</Link>
        <span className="mx-4">·</span>
        <Link href="/support" className="hover:text-clay-500 transition-colors">Support</Link>
      </footer>
    </div>
  );
}
