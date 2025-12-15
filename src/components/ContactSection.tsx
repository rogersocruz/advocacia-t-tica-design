import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-primary py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="font-body text-sm tracking-[0.4em] uppercase text-accent mb-4">
                Entre em Contato
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6">
                Vamos Conversar
              </h2>
              <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
                Estou à disposição para discutir como posso auxiliar você ou sua
                empresa a alcançar os melhores resultados jurídicos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground mb-1">
                    E-mail
                  </p>
                  <a
                    href="mailto:contato@leticatomich.adv.br"
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    contato@leticatomich.adv.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground mb-1">
                    Telefone
                  </p>
                  <a
                    href="tel:+5531999999999"
                    className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    +55 (31) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground mb-1">
                    Localização
                  </p>
                  <p className="font-body text-primary-foreground/70">
                    Rua Leopoldina, 161, Sala 01
                    <br />
                    Belo Horizonte/MG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground mb-1">
                    Horário de Atendimento
                  </p>
                  <p className="font-body text-primary-foreground/70">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 lg:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-primary-foreground mb-4">
                Consultoria Tática
              </h3>
              <p className="font-body text-lg text-primary-foreground/70 leading-relaxed mb-8">
                Agende uma sessão estratégica para discutir suas necessidades
                jurídicas e descobrir como uma abordagem tática pode transformar
                seus desafios em oportunidades.
              </p>

              <div className="space-y-4">
                <Button variant="gold" size="lg" className="w-full">
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Enviar Mensagem
                </Button>
              </div>

              <p className="font-body text-sm text-primary-foreground/50 mt-6 text-center">
                Primeira consulta com desconto especial
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
