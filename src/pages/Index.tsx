import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { USPBar } from "@/components/home/USPBar";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Werkwijze } from "@/components/home/Werkwijze";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <USPBar />
      <IntroSection />
      <ServicesGrid />
      <Werkwijze />
      <ProjectsGrid />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
