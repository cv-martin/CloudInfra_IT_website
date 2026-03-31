import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      body: `CloudInfra IT provides IT and Healthcare staffing services including permanent placement, contract staffing, temporary staffing, and temp-to-hire programmes. Service terms for individual engagements are governed by separate written agreements between CloudInfra IT and the client employer or candidate, which take precedence over these general terms.`,
    },
    {
      title: "3. Candidate Terms",
      body: `Candidates who submit information through our website or who engage with our recruiters consent to CloudInfra IT retaining their profile and contacting them about relevant opportunities. CloudInfra IT will not submit a candidate's profile to any employer client without explicit consent. Candidates represent that all information provided is accurate and complete.`,
    },
    {
      title: "4. Client Employer Terms",
      body: `Employer clients who engage CloudInfra IT for staffing services agree to: (a) provide accurate role requirements; (b) not engage directly with candidates introduced by CloudInfra IT outside of agreed fee terms for a period of 12 months; (c) pay fees in accordance with the agreed placement agreement. Specific fee schedules and guarantee terms are set out in client-specific agreements.`,
    },
    {
      title: "5. Intellectual Property",
      body: `All content on the CloudInfra IT website, including text, design elements, and branding, is owned by CloudInfra IT and may not be reproduced, distributed, or used without prior written consent.`,
    },
    {
      title: "6. Limitation of Liability",
      body: `To the fullest extent permitted by law, CloudInfra IT shall not be liable for any indirect, incidental, or consequential damages arising from use of our website or services. Our total liability for any claim shall not exceed the fees paid to us in connection with the specific engagement giving rise to the claim.`,
    },
    {
      title: "7. Third-Party Links",
      body: `Our website may contain links to third-party websites. CloudInfra IT is not responsible for the content, privacy practices, or accuracy of any third-party site.`,
    },
    {
      title: "8. Governing Law",
      body: `These Terms are governed by the laws of the State of Texas, USA. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Dallas County, Texas.`,
    },
    {
      title: "9. Changes to Terms",
      body: `We may update these Terms from time to time. Continued use of the website or our services after any update constitutes acceptance of the revised Terms.`,
    },
    {
      title: "10. Contact",
      body: `Questions regarding these Terms: info@cloudinfrait.com | (+1) 214-663-7826 | 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234, USA.`,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <section className="pt-36 pb-12 bg-white border-b border-gray-100">
        <div className="ci-container">
          <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
          <h1 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#0F1B2D] leading-tight">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-400 mt-3">Last updated: 31 March 2026</p>
        </div>
      </section>
      <main className="flex-1">
        <div className="ci-container py-12 lg:py-14">
          <div className="max-w-3xl flex flex-col gap-8">
            {sections.map(s => (
              <div key={s.title}>
                <h2 className="text-sm font-bold text-[#0F1B2D] mb-2">{s.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-100 max-w-3xl flex gap-6">
            <Link href="/privacy-policy" className="text-sm font-semibold text-[#06B6D4] hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="text-sm font-semibold text-[#06B6D4] hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
