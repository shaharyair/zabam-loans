import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits data={benefitOne} id={benefitOne.id} />
      {/* <Benefits imgPos="right" data={benefitTwo} id={benefitTwo.id} /> */}

      <SectionTitle preTitle="Testimonials" title="Here's what our customers said">
        Discover how our clients have achieved their financial goals
      </SectionTitle>

      <Testimonials />

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Here are some common questions we receive from our clients, along with their answers. Feel free to reach
        out!
      </SectionTitle>

      <Faq /> */}
    </Container>
  );
}
