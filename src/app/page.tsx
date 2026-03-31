import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisaTrustBand from "@/components/sections/VisaTrustBand";
import AudiencePaths from "@/components/sections/AudiencePaths";
import JobsPreview from "@/components/sections/JobsPreview";
import DomainPreview from "@/components/sections/DomainPreview";
import ProcessStrip from "@/components/sections/ProcessStrip";
import BottomCTA from "@/components/sections/BottomCTA";
import Footer from "@/components/Footer";

/**
 * Home — The Lobby.
 *
 * Rule: The homepage orients and directs. It does NOT tell the whole story.
 * Every section has ONE job: show enough to make the user take the next step.
 * Full detail lives on inner pages — /services, /our-process, /job-opportunities,
 * /information-technology, /hospitals-and-healthcare.
 *
 * 6 sections. Fast scroll. Both audiences answered in < 2 minutes.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">

        {/* 1. Hero — What we do + who for + two actions */}
        <Hero />

        {/* 2. Visa/compliance — slim trust signal for IT candidates */}
        <VisaTrustBand />

        {/* 3. Two paths — clearly route candidate vs employer */}
        <AudiencePaths />

        {/* 4. Jobs preview — real openings, candidate hook */}
        <JobsPreview />

        {/* 5. Domain preview — IT + Healthcare, just enough to direct */}
        <DomainPreview />

        {/* 6. Process strip — 5 step names, link to full page */}
        <ProcessStrip />

        {/* 7. Final dual CTA */}
        <BottomCTA />

      </main>
      <Footer />
    </div>
  );
}
