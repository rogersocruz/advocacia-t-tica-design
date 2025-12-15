import { Scale, Building2, FileText, Users, Heart, ShoppingBag } from 'lucide-react';

const areas = [
  {
    icon: Building2,
    title: 'Direito Empresarial',
    description:
      'Assessoria jurídica completa para empresas, desde a constituição até operações complexas de M&A.',
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    description:
      'Atuação em questões patrimoniais, contratuais, responsabilidade civil e direitos da personalidade.',
  },
  {
    icon: ShoppingBag,
    title: 'Direito do Consumidor',
    description:
      'Defesa e orientação em relações de consumo, proteção de direitos e resolução de conflitos.',
  },
  {
    icon: Heart,
    title: 'Direito de Família',
    description:
      'Assessoria em divórcios, guarda, pensão alimentícia, inventários e planejamento sucessório.',
  },
  {
    icon: FileText,
    title: 'Contratos',
    description:
      'Elaboração, revisão e negociação de contratos com foco em proteção e otimização de riscos.',
  },
  {
    icon: Users,
    title: 'Contencioso Estratégico',
    description:
      'Representação em litígios de alta complexidade com estratégias processuais personalizadas.',
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="relative bg-primary py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-body text-sm tracking-[0.4em] uppercase text-accent mb-4">
            Especialidades
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="group relative bg-background/10 border border-background/20 rounded-lg p-8 hover:bg-background/15 hover:border-accent/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-500">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium text-background mb-3 group-hover:text-accent transition-colors duration-300">
                {area.title}
              </h3>
              <p className="font-body text-background/80 leading-relaxed">
                {area.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transform rotate-180">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 50.7C672 53 768 59 864 58.7C960 59 1056 53 1152 48C1248 43 1344 37 1392 34.7L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default AreasSection;
