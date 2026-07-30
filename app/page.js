import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import WhyUs from "./components/WhyUs";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyUs />
      <Solutions />
      <HowItWorks />
      <Results />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
