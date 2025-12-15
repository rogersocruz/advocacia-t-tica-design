import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instagramPosts = [
  {
    id: 1,
    placeholder: 'Post sobre Direito Empresarial',
  },
  {
    id: 2,
    placeholder: 'Dicas de Direito do Consumidor',
  },
  {
    id: 3,
    placeholder: 'Orientações sobre Família',
  },
  {
    id: 4,
    placeholder: 'Novidades Jurídicas',
  },
];

const InstagramSection = () => {
  return (
    <section id="instagram" className="relative bg-muted py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-accent mb-4">
            Redes Sociais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Últimas Publicações
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/leticatomichadvocacia"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-500"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/10">
                <div className="text-center p-4">
                  <Instagram className="w-8 h-8 text-accent mx-auto mb-2 opacity-50" />
                  <p className="font-body text-xs text-muted-foreground">
                    {post.placeholder}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-accent" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="group"
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
