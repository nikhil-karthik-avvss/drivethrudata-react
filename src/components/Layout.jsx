import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DevBanner from './DevBanner';
import Navbar from './Navbar';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <DevBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
