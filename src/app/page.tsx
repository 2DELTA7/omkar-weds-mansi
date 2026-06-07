import Footer from "../components/layout/Footer";
import ScrollAnimation from "../components/effects/ScrollAnimation";
import Hero from "../components/sections/Hero";
import Invitation from "../components/sections/Invitation";
import Couple from "../components/sections/Couple";
import Venue from "../components/sections/Venue";
import Events from "../components/sections/Events";
import OpeningScreen from "../components/OpeningScreen";
import MusicPlayer from "../components/MusicPlayer";
import EPatrika from "../components/sections/EPatrika";

export default function Home() {
  return (
   <>
    <OpeningScreen />
    <MusicPlayer />
    <ScrollAnimation />
    <main>
      <Hero />
      <Invitation />
      <Couple />
      <Events />
      <Venue />
      <EPatrika />
      <Footer />
    </main>
</>
  );
}