import { TransitionLink as Link } from "@/components/TransitionLink";

/**
 * Terms & Conditions Page.
 * 
 * Design language: Premium Dark Mode
 *   - Pure Black backgrounds
 *   - Neon Green accents (#a4f07a)
 */

export const metadata = {
  title: "Terms & Conditions | CloudInfra IT",
  description: "Terms and conditions governing use of CloudInfra IT's website and staffing services.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      body: `By accessing or using the CloudInfra IT website (cloudinfrait.com) or engaging our staffing services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our website and services.`,
    },
    {
      title: "2. Services",
      body: `CloudInfra IT provides IT and Healthcare staffing services including permanent placement, contract staffing, temporary staffing, and temp-to-hire programmes. Service terms for individual engagements are governed by separate written agreements, which take precedence over these general terms.`,
    },
    {
      title: "3. Candidate Terms",
      body: `Candidates who submit information through our website or engage with our recruiters consent to CloudInfra IT retaining their profile and contacting them about relevant opportunities. CloudInfra IT will not submit a candidate's profile to any employer client without explicit consent.`,
    },
    {
      title: "4. Client Employer Terms",
      body: `Employer clients who engage CloudInfra IT for staffing services agree to: (a) provide accurate role requirements; (b) not engage directly with candidates introduced by CloudInfra IT outside of agreed fee terms for 12 months; (c) pay fees in accordance with the specific placement agreement.`,
    },
    {
      title: "5. Intellectual Property",
      body: `All content on the CloudInfra IT website, including text, design elements, and branding, is owned by CloudInfra IT and may not be reproduced or distributed without prior written consent.`,
    },
    {
      title: "6. Limitation of Liability",
      body: `To the fullest extent permitted by law, CloudInfra IT shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the fees paid to us in connection with the specific engagement giving rise to the claim.`,
    },
    {
      title: "7. Third-Party Links",
      body: `Our website may contain links to third-party services. CloudInfra IT is not responsible for the content, privacy practices, or accuracy of any third-party material.`,
    },
    {
      title: "8. Governing Law",
      body: `These Terms are governed by the laws of the State of Texas, USA. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dallas County, Texas.`,
    },
    {
      title: "9. Changes to Terms",
      body: `We may update these Terms from time to time. Continued use of the website or our services after any update constitutes acceptance of the revised Terms.`,
    },
    {
      title: "10. Contact",
      body: `For legal enquiries: info@cloudinfrait.com | (+1) 214-663-7826 | 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234, USA.`,
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
            Terms <span className="text-white/40">& Conditions.</span>
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
          <div className="mt-16 pt-10 border-t border-white/5 max-w-3xl flex gap-12">
            <Link href="/privacy-policy" className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#a4f07a] hover:opacity-80 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

          </div>
  );
}
