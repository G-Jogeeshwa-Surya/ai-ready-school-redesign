import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#CBD5E1] font-sans selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductCards />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
