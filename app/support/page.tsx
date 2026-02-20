import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Clay Boss",
};

const faqs = [
  {
    q: "How many free guides do I get?",
    a: "Free users get 3 guides per month. The count resets at the start of each month. Upgrade to Pro for unlimited guides.",
  },
  {
    q: "How do I upgrade to Pro?",
    a: "Tap the upgrade button anywhere in the app, or go to Settings → Upgrade to Pro. Subscriptions are $4.99/month and managed through your Apple ID.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Go to your iPhone's Settings → tap your name → Subscriptions → Clay Boss Pro → Cancel Subscription. You'll keep access until the end of your billing period.",
  },
  {
    q: "How do I restore my purchase on a new device?",
    a: "Open Clay Boss, go to the upgrade screen, and tap 'Restore Purchases'. Sign in with the same Apple ID you used to purchase.",
  },
  {
    q: "How do I delete my account?",
    a: "Go to Settings inside the app and tap 'Delete Account'. This will permanently delete your account and all saved guides within 30 days.",
  },
  {
    q: "The app crashed or something isn't working",
    a: "We're sorry about that! Email us at support@clayboss.app with your device model and a description of what happened. We'll get back to you as fast as we can.",
  },
  {
    q: "How does the AI guide generation work?",
    a: "You describe what you want to make, and Clay Boss uses Google's Gemini AI to generate a complete pottery guide tailored to your project. Guides cover techniques, tools, clay types, firing temperatures, and finishing tips.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <header className="bg-stone-900 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-stone-400 hover:text-white text-sm mb-4 inline-block transition-colors">← Back to Clay Boss</Link>
          <h1 className="text-4xl font-black text-white">Support</h1>
          <p className="text-stone-400 mt-2">We're here to help.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Contact card */}
        <div className="bg-clay-500 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-2xl font-black mb-2">Get in touch</h2>
          <p className="text-clay-100 mb-4">Have a question not answered below? Email us directly — we respond within 24 hours.</p>
          <a
            href="mailto:support@clayboss.app"
            className="inline-block bg-white text-clay-600 font-bold px-6 py-3 rounded-2xl hover:bg-clay-50 transition-colors"
          >
            support@clayboss.app
          </a>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-black text-stone-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-2">{faq.q}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

      </main>

      <footer className="py-8 px-6 border-t border-stone-200 text-center text-stone-400 text-sm">
        <Link href="/" className="hover:text-clay-500 transition-colors">← Back to Clay Boss</Link>
        <span className="mx-4">·</span>
        <Link href="/privacy" className="hover:text-clay-500 transition-colors">Privacy Policy</Link>
      </footer>
    </div>
  );
}
