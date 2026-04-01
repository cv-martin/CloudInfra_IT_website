import { TransitionLink as Link } from "@/components/TransitionLink";

/**
 * Privacy Policy Page.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 */

export const metadata = {
  title: "Privacy Policy | CloudInfra IT",
  description: "How CloudInfra IT collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Who we are",
      body: `CloudInfra IT ("we", "our", "us") is a US-based IT and Healthcare staffing firm headquartered at 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234. Contact: info@cloudinfrait.com | (+1) 214-663-7826.`,
    },
    {
      title: "2. What information we collect",
      body: `We collect information you provide directly when submitting enquiry forms, applying for roles, or contacting us. This includes: name, email, phone number, CV/resume, work authorisation status, and any other voluntary info. We also collect usage data via analytics for website optimization.`,
    },
    {
      title: "3. How we use your information",
      body: `We use your information to: (a) match you with relevant opportunities; (b) contact you regarding your enquiry; (c) verify work authorisation; (d) comply with legal mandates. We do not use your information for automated profiling without human review.`,
    },
    {
      title: "4. How we share your information",
      body: `We share candidate profiles with employer clients only with explicit consent for specific roles. We do not sell your personal data. We may share data with authorized service providers (payroll, background checks, immigration counsel) strictly to fulfill staffing services.`,
    },
    {
      title: "5. Data retention",
      body: `We retain personal information as long as necessary to provide services and comply with legal requirements. Candidate profiles are typically kept for 3 years from last contact. Request deletion at info@cloudinfrait.com.`,
    },
    {
      title: "6. Your rights",
      body: `Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at info@cloudinfrait.com to exercise these rights; we respond within 30 days.`,
    },
    {
      title: "7. Cookies",
      body: `We use essential cookies for operation and optional analytics cookies to understand visitor usage. Essential cookies are active; analytics cookies require your explicit consent.`,
    },
    {
      title: "8. Security",
      body: `We implement commercially reasonable security measures to protect your personal information. However, no internet transmission is 100% secure, and we cannot guarantee absolute absolute security.`,
    },
    {
      title: "9. SMS communications",
      body: `If you consent, we may send text messages regarding your application. Message and data rates apply. Opt out anytime by replying STOP.`,
    },
    {
      title: "10. Changes to this policy",
      body: `We update this policy periodically. The current version will always be available at this URL. Continued use constitutes acceptance.`,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
            
      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 ci-grid-bg opacity-[0.03] pointer-events-none" />
        <div className="ci-container relative z-10">
          <div className="w-12 h-1 bg-[#a4f07a] mb-8 ci-glow" />
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-white leading-tight tracking-tighter">
            Privacy <span className="text-white/40">& Compliance.</span>
          </h1>
          <p className="text-lg text-white/40 mt-3 font-light">Last updated: 31 March 2026</p>
        </div>
      </section>

      <main className="flex-1 bg-black">
        <div className="ci-container py-20 lg:py-24">
          <div className="max-w-3xl flex flex-col gap-12">
            {sections.map(s => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-white mb-4 tracking-tight border-l-2 border-[#a4f07a] pl-6 -ml-[2px]">{s.title}</h2>
                <p className="text-white/40 text-lg leading-relaxed font-light">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-white/5 max-w-3xl">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Contact
            </Link>
          </div>
        </div>
      </main>

          </div>
  );
}
