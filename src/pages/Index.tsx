import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AreasSection from '@/components/AreasSection';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AreasSection />
        <AboutSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
