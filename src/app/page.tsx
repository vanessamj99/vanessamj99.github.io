import HeroSection from '@/components/HeroSection';
import NewsletterSection from '@/components/NewsletterSection';
import ExperienceSection from '@/components/ExperienceSection';
import SpeakingSection from '@/components/SpeakingSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Android Device */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Speaking Section */}
      <section id="speaking">
        <SpeakingSection />
      </section>

      {/* Newsletter Section */}
      <section id="newsletter">
        <NewsletterSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
} 