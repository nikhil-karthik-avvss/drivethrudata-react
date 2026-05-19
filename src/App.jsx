import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import BusinessModel from './components/BusinessModel';
import Services from './components/Services';

import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import TechnologyPage from './pages/TechnologyPage';
import PlatformsPage from './pages/PlatformsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FounderPage from './pages/FounderPage';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <MissionVision />
      <BusinessModel />
      <Services />
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/about"       element={<AboutPage />} />
      <Route path="/solutions"   element={<SolutionsPage />} />
      <Route path="/industries"  element={<IndustriesPage />} />
      <Route path="/technology"  element={<TechnologyPage />} />
      <Route path="/platforms"   element={<PlatformsPage />} />
      <Route path="/careers"     element={<CareersPage />} />
      <Route path="/contact"     element={<ContactPage />} />
      <Route path="/founder"     element={<FounderPage />} />
    </Routes>
  );
}
