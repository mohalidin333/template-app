import {
  Footer,
  Header,
  About,
  Cta,
  Faqs,
  Features,
  Hero,
} from "@/components/root";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}
