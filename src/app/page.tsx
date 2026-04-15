import { CommunityExperience } from "./components/CommunityExperience";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { JoinCTA } from "./components/JoinCTA";
import { Tenets } from "./components/Tenets";
import { RevealSection } from "./components/RevealSection";

export default function Home() {
  return (
    <>
      <main id="content">
        <Hero />
        <RevealSection>
          <Intro />
        </RevealSection>
        <RevealSection>
          <Tenets />
        </RevealSection>
        <RevealSection>
          <CommunityExperience />
        </RevealSection>
        <RevealSection>
          <JoinCTA />
        </RevealSection>
        <RevealSection>
          <FAQ />
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
