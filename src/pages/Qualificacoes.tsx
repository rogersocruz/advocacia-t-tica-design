import { GraduationCap, Award, BookOpen, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lawyerPhoto from '@/assets/lawyer-photo.png';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação Acadêmica',
    items: [
      'Bacharelado em Direito',
      'Pós-Graduação em Direito Empresarial',
      'Especialização em Direito de Família e Sucessões',
    ],
  },
  {
    icon: Award,
    title: 'Áreas de Especialização',
    items: [
      'Direito Empresarial',
      'Direito Civil',
      'Direito do Consumidor',
      'Direito de Família',
    ],
  },
  {
    icon: BookOpen,
    title: 'Atuação',
    items: [
      'Assessoria jurídica preventiva',
      'Consultoria empresarial',
      'Mediação e resolução de conflitos',
    ],
  },
  {
    icon: Star,
    title: 'Diferenciais',
    items: [
      'Atendimento personalizado e humanizado',
      'Estratégia jurídica de alta performance',
      'Foco em resultados concretos',
    ],
  },
];

const Qualificacoes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-6">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => window.close()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-accent/20 rounded-[2rem] transform -rotate-3" />
              <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-elevated">
                <img 
                  src={lawyerPhoto} 
                  alt="Letícia Tomich - Advogada"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="font-body text-sm tracking-[0.4em] uppercase text-accent mb-4">
                  Qualificações & Especialidades
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                  Letícia Tomich
                </h1>
              </div>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Advogada especialista em Direito Empresarial, Civil, Consumidor e Família, 
                com atuação estratégica e humanizada no desenvolvimento de soluções jurídicas 
                eficazes e personalizadas.
              </p>
              <div className="pt-4">
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  O escritório pauta-se pela excelência e pela ética, transformando desafios 
                  em resultados positivos e consolidando relações de confiança e parceria com seus clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </main>
    </div>
  );
};

export default Qualificacoes;
