import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-accent mb-4">
            Sobre a Profissional
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Sobre Letícia Tomich
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Content */}
          <div className="space-y-8 text-center">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-xl leading-relaxed text-foreground/90 mb-6">
                <span className="text-accent font-display text-3xl leading-none">
                  "
                </span>
                Com sólida experiência na advocacia, Letícia Tomich atua de forma estratégica e humanizada, desenvolvendo soluções jurídicas eficazes e personalizadas.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                O escritório pauta-se pela excelência e pela ética, transformando desafios em resultados positivos e consolidando relações de confiança e parceria com seus clientes.
                <span className="text-accent font-display text-3xl leading-none">
                  "
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                variant="gold" 
                size="lg" 
                className="group"
                onClick={() => window.open('/qualificacoes', '_blank')}
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-border inline-block">
              <p className="font-display text-2xl italic text-accent">
                Letícia Tomich
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Advogada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
