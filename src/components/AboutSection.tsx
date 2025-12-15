import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação Acadêmica',
    items: [
      'Bacharelado em Direito - Universidade Federal',
      'Pós-Graduação em Direito Empresarial',
      'MBA em Gestão Estratégica de Negócios',
    ],
  },
  {
    icon: Award,
    title: 'Certificações',
    items: [
      'Compliance e Governança Corporativa',
      'Mediação e Arbitragem',
      'Proteção de Dados (LGPD)',
    ],
  },
  {
    icon: BookOpen,
    title: 'Publicações',
    items: [
      '+20 artigos em revistas especializadas',
      'Coautora de livro sobre Direito Digital',
      'Palestrante em congressos nacionais',
    ],
  },
  {
    icon: Star,
    title: 'Reconhecimentos',
    items: [
      'Destaque em Direito Empresarial',
      'Membro de comissões da OAB',
      '+15 anos de experiência comprovada',
    ],
  },
];

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
            Quem Sou
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-xl leading-relaxed text-foreground/90 mb-6">
                <span className="text-accent font-display text-3xl leading-none float-left mr-3">
                  "
                </span>
                Acredito que o Direito, quando aplicado com estratégia e
                inteligência, é uma ferramenta transformadora para empresas e
                indivíduos.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Com mais de 15 anos de atuação no mercado jurídico, construí uma
                carreira pautada pela excelência técnica e pela busca constante
                por soluções inovadoras. Minha abordagem combina rigor analítico
                com visão estratégica de negócios.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Atuo principalmente em questões empresariais complexas, onde a
                precisão e a antecipação de cenários são fundamentais para o
                sucesso. Cada caso é tratado com a dedicação e a profundidade
                que merece.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-border">
              <p className="font-display text-2xl italic text-accent">
                Letícia Tomich
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                OAB/XX 000.000
              </p>
            </div>
          </div>

          {/* Qualifications Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={qual.title}
                className="group bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-subtle transition-all duration-500"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <qual.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {qual.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {qual.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
