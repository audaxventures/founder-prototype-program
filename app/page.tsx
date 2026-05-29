import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhoItsFor from "@/components/WhoItsFor";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Deliverables from "@/components/Deliverables";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import BookingMid from "@/components/BookingMid";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <WhoItsFor />
      <Portfolio />
      <Process />
      <Deliverables />
      <Industries />
      <Team />
      <Testimonials />
      <BookingMid />
      <FAQ />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}
