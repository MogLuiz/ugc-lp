import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MapFeature } from "./components/MapFeature";
import { Discovery } from "./components/Discovery";
import { LocalCreators } from "./components/LocalCreators";
import { Benefits } from "./components/Benefits";
import { Comparison } from "./components/Comparison";
import { Segments } from "./components/Segments";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MapFeature />
        <Discovery />
        <LocalCreators />
        <Benefits />
        <Comparison />
        <Segments />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}