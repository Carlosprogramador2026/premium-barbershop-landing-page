import { MotionConfig } from "framer-motion";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Ritual from "./components/Ritual";
import SocialProof from "./components/SocialProof";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#experiencia"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-pine-950"
      >
        Pular para o conteúdo
      </a>

      <div className="grain" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Products />
        <Ritual />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </MotionConfig>
  );
}
