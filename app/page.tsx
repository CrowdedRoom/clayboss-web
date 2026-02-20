import Image from "next/image";
import Link from "next/link";

const APP_ICON = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663325853989/NfJBLisxwhqoAveH.png";
// Update this once the App Store link is live
const APP_STORE_URL = "#";

const features = [
  {
    emoji: "📷",
    title: "Turn Photos into Guides",
    desc: "Snap a photo of a pot you love — Clay Boss analyzes it and generates a tailored making, firing, and glaze guide so you can recreate it yourself.",
  },
  {
    emoji: "🏺",
    title: "Any Project, Any Skill Level",
    desc: "Pinch pots to complex sculptural forms — Clay Boss generates guides tailored to exactly what you want to make.",
  },
  {
    emoji: "🔥",
    title: "Full Firing & Glaze Guidance",
    desc: "Get clay body recommendations, drying times, kiln temperatures, and glaze techniques — all in one guide.",
  },
  {
    emoji: "📚",
    title: "Save & Build Your Library",
    desc: "Every guide is saved to your personal library. Come back anytime, track your projects, and build your pottery knowledge.",
  },
];

const steps = [
  { num: "01", title: "Describe or photograph your piece", desc: "Type in plain English — or snap a photo of a pot you want to recreate." },
  { num: "02", title: "AI generates your guide", desc: "Get a complete step-by-step guide: techniques, tools, clay type, drying times, temperatures." },
  { num: "03", title: "Create with confidence", desc: "Follow the guide in your studio. Save it, revisit it, refine your craft." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#fdf6ec]/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={APP_ICON} alt="Clay Boss" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg text-stone-900">Clay Boss</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#features" className="hover:text-clay-500 transition-colors hidden sm:block">Features</a>
            <a href="#pricing" className="hover:text-clay-500 transition-colors hidden sm:block">Pricing</a>
            <Link href="/support" className="hover:text-clay-500 transition-colors hidden sm:block">Support</Link>
            <a
              href={APP_STORE_URL}
              className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-clay-500 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-stone-900 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C75B39 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-clay-500/20 text-clay-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                🏺 AI-Powered Pottery Guides
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                From idea to
                <span className="text-clay-400"> fired piece</span>
                <br />in minutes.
              </h1>
              <p className="text-xl text-stone-400 mb-10 max-w-lg mx-auto lg:mx-0">
                Describe what you want to make — or snap a photo of a piece you love. Clay Boss turns it into a complete step-by-step guide: techniques, tools, clay types, kiln temps, and glaze tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={APP_STORE_URL}
                  className="flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-clay-100 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-stone-900"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download on App Store
                </a>
              </div>
              <p className="text-stone-500 text-sm mt-4">Free to start · 3 guides/month · No credit card</p>
            </div>

            {/* App icon display */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-clay-500/30 ring-1 ring-white/10">
                  <Image src={APP_ICON} alt="Clay Boss App" width={256} height={256} className="w-full h-full object-cover" />
                </div>
                {/* Photo feature callout */}
                <div className="absolute -top-4 -left-4 bg-stone-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  📸 Turn photos into guides
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-clay-500 text-white text-sm font-bold px-4 py-2 rounded-2xl shadow-lg">
                  Free to start
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#fdf6ec]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-stone-900 mb-4">Everything a potter needs</h2>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">No more searching through books and forums. Just ask.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{f.title}</h3>
                <p className="text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">How it works</h2>
            <p className="text-lg text-stone-400">Three steps from idea to studio</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-6xl font-black text-clay-500/30 mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-stone-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-[#fdf6ec]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-stone-900 mb-4">Simple pricing</h2>
            <p className="text-lg text-stone-500">Start free. Go Pro when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200">
              <div className="text-2xl font-black text-stone-900 mb-1">Free</div>
              <div className="text-4xl font-black text-stone-900 mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                {["3 guides per month", "All guide types", "Save your guides"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-600">
                    <span className="text-clay-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={APP_STORE_URL} className="block text-center bg-stone-100 text-stone-700 px-6 py-3 rounded-2xl font-semibold hover:bg-stone-200 transition-colors">
                Get Started Free
              </a>
            </div>

            {/* Pro */}
            <div className="bg-stone-900 rounded-3xl p-8 border border-clay-500/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-clay-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-2xl font-black text-white mb-1">Pro</div>
              <div className="text-4xl font-black text-white mb-1">$4.99<span className="text-lg font-medium text-stone-400">/mo</span></div>
              <p className="text-stone-500 text-sm mb-6">Cancel anytime</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited guide generation",
                  "Priority AI (richer results)",
                  "Full portfolio & gallery",
                  "Early access to new features",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-300">
                    <span className="text-clay-400 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={APP_STORE_URL} className="block text-center bg-clay-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-clay-600 transition-colors">
                Start Pro — $4.99/mo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-clay-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to make something?</h2>
          <p className="text-clay-100 text-lg mb-8">Download Clay Boss and start your first guide for free.</p>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-3 bg-white text-clay-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-clay-50 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-clay-600"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-sm">
          <div className="flex items-center gap-2">
            <Image src={APP_ICON} alt="Clay Boss" width={24} height={24} className="rounded-md" />
            <span className="font-semibold text-stone-400">Clay Boss</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/support" className="hover:text-stone-300 transition-colors">Support</Link>
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
          </div>
          <div>© 2026 Daniel White</div>
        </div>
      </footer>
    </div>
  );
}
