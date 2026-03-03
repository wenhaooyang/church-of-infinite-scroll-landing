import { CommunityExperience } from "./components/CommunityExperience";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { JoinCTA } from "./components/JoinCTA";
import { Tenets } from "./components/Tenets";

export default function Home() {
  return (
    <>
      <main id="content">
        <Hero />
        <Intro />
        <Tenets />
        <CommunityExperience />
        <JoinCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
