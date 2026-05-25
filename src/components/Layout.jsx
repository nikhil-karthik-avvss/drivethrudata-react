import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
