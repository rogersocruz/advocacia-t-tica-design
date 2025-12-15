import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import lawyerPhoto from '@/assets/lawyer-photo.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background to-muted overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full opacity-40" />
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-secondary/30 rounded-full opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full opacity-60" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p
                className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-accent animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                Advogada Especialista em Direito Empresarial, Civil, Consumidor e Família
              </p>
              <h2
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] text-foreground animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                Advocacia
                <span className="block text-gradient-gold">Tática</span>
              </h2>
            </div>

            <p
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              Soluções jurídicas precisas e estratégicas para empresas e
              executivos que buscam excelência e resultados concretos.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <Button variant="gold" size="lg" className="group">
                Agendar Consultoria
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Lawyer Photo */}
          <div
            className="order-1 lg:order-2 relative animate-slide-in-right"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-accent/20 rounded-[2rem] transform rotate-3" />
              
              {/* Image container */}
              <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-elevated">
                <img 
                  src={lawyerPhoto} 
                  alt="Letícia Tomich - Advogada especialista em Direito Empresarial, Civil, Consumidor e Família"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-primary"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
