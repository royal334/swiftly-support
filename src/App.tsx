import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MeetOurTeam } from "./components/MeetOurTeam";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
//import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />

      <main>
        <Hero />
        <MeetOurTeam />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />

      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/5 rounded-full blur-[120px] animate-float [animation-delay:3s]" />
      </div>
    </div>
  );
}

export default App;
