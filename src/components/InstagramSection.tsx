import { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramSection = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup on unmount if needed
    };
  }, []);

  return (
    <section id="instagram" className="relative bg-muted py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-sm tracking-[0.4em] uppercase text-accent mb-4">
            Redes Sociais
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Últimas Publicações
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Elfsight Instagram Widget */}
        <div className="w-full overflow-hidden mb-12">
          <div 
            className="elfsight-app-e3b6e47d-bec7-4ac9-8726-4872db1b91e7" 
            data-elfsight-app-lazy
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group font-sans"
            onClick={() => window.open('https://instagram.com/leticatomichadvocacia', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Seguir no Instagram
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
