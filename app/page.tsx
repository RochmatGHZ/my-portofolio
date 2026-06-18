import Navbar from "@/components/layout/navbar";
import Hero from "@/components/section/hero";
import Projects from "@/components/section/project";
import Achievement from "@/components/section/achievement";
import Connect from "@/components/section/connect";
import Footer from "@/components/layout/footer";
import Experience from "@/components/section/experience";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Experience />

      <Projects />

      <Achievement />

      <Connect />

      <Footer />
    </main>
  );
}