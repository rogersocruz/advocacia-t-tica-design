import logo from '@/assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a href="#hero">
              <img 
                src={logo} 
                alt="Letícia Tomich Advocacia" 
                className="h-10"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#hero"
              className="font-body text-sm text-background/60 hover:text-accent transition-colors"
            >
              Início
            </a>
            <a
              href="#areas"
              className="font-body text-sm text-background/60 hover:text-accent transition-colors"
            >
              Áreas
            </a>
            <a
              href="#about"
              className="font-body text-sm text-background/60 hover:text-accent transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="font-body text-sm text-background/60 hover:text-accent transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm text-background/40">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-8 pt-6 border-t border-background/10">
          <p className="font-body text-xs text-background/30 text-center max-w-3xl mx-auto">
            Este site não constitui propaganda de serviços advocatícios nos
            termos do art. 1º do Código de Ética e Disciplina da OAB. As
            informações contidas neste site são de caráter meramente
            informativo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
