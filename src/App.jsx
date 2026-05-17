import { Routes, Route } from 'react-router-dom';
import FounderPage from './pages/FounderPage';
import DevBanner from './components/DevBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import BusinessModel from './components/BusinessModel';
import Services from './components/Services';
import Industry from './components/Industry';
import TechFocus from './components/TechFocus';
import Platforms from './components/Platforms';
import HowWeWork from './components/HowWeWork';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <DevBanner />
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <BusinessModel />
        <Services />
        <Industry />
        <TechFocus />
        <Platforms />
        <HowWeWork />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/founder" element={<FounderPage />} />
    </Routes>
  );
}
