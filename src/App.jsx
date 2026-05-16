import DevBanner from './components/DevBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import BusinessModel from './components/BusinessModel';
import Services from './components/Services';
import TechFocus from './components/TechFocus';
import HowWeWork from './components/HowWeWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <BusinessModel />
        <Services />
        <TechFocus />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
