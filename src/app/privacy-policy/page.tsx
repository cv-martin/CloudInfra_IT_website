import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | CloudInfra IT",
  description: "How CloudInfra IT collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Who we are",
      body: `CloudInfra IT ("we", "our", "us") is a US-based IT and Healthcare staffing firm operating under the legal entity CloudInfra IT, headquartered at 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234. We can be contacted at info@cloudinfrait.com or (+1) 214-663-7826.`,
    },
    {
      title: "2. What information we collect",
      body: `We collect information you provide directly when submitting enquiry forms, applying for roles, or contacting us. This includes: name, email address, telephone number, professional background (CV/resume), work authorisation status, and any other information you voluntarily provide. We also collect usage data through standard web analytics (page visits, browser type, referral source) for website improvement purposes.`,
    },
    {
      title: "3. How we use your information",
      body: `We use your information to: (a) match you with relevant job opportunities or staffing solutions; (b) contact you regarding your enquiry; (c) verify your work authorisation status; (d) comply with legal obligations. We do not use your information for automated decision-making or profiling without human review.`,
    },
    {
      title: "4. How we share your information",
      body: `We share your profile with employer clients only with your explicit consent, and only for the specific role you have expressed interest in. We do not sell your personal data to third parties. We may share data with service providers (payroll processors, background check vendors, immigration counsel) strictly to fulfil our staffing services. All third-party processors are contractually bound to comply with applicable data protection law.`,
    },
    {
      title: "5. Data retention",
      body: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. For candidate profiles, this is typically 3 years from last contact. You may request deletion of your data at any time by contacting info@cloudinfrait.com.`,
    },
    {
      title: "6. Your rights",
      body: `Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, please contact us at info@cloudinfrait.com. We will respond within 30 days.`,
    },
    {
      title: "7. Cookies",
      body: `This website uses essential cookies necessary for operation and optional analytics cookies to understand how visitors use the site. By continuing to use the site, you consent to essential cookies. Analytics cookies are only set with your explicit consent.`,
    },
    {
      title: "8. Security",
      body: `We implement commercially reasonable security measures to protect your personal information from unauthorised access, disclosure, or loss. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: "9. SMS communications",
      body: `If you consent to SMS communications, we may send you text messages regarding your enquiry or application. Message and data rates may apply. You may opt out at any time by replying STOP or contacting us directly.`,
    },
    {
      title: "10. Changes to this policy",
      body: `We may update this Privacy Policy from time to time. The current version will always be available at this URL. Continued use of our services after any update constitutes acceptance of the revised policy.`,
    },
    {
      title: "11. Contact",
      body: `Questions about this policy or your data: info@cloudinfrait.com | (+1) 214-663-7826 | 2727 LBJ Freeway, Suite 220, Farmers Branch, TX 75234, USA.`,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <section className="pt-36 pb-12 bg-white border-b border-gray-100">
        <div className="ci-container">
          <div className="w-10 h-0.5 bg-[#06B6D4] mb-6" />
          <h1 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#0F1B2D] leading-tight">Privacy Policy</h1>
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
          <div className="mt-10 pt-8 border-t border-gray-100 max-w-3xl">
            <Link href="/contact" className="text-sm font-semibold text-[#06B6D4] hover:underline">← Return to Contact</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
