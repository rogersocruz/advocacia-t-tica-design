import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#areas', label: 'Áreas de Atuação' },
    { href: '#about', label: 'Quem Sou' },
    { href: '#instagram', label: 'Publicações' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect border-b border-border py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant="gold" size="sm">
            Consultoria Tática
          </Button>
        </div>

        {/* Logo */}
        <div className="flex-1 lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <a href="#hero" className="block">
            <img 
              src={logo} 
              alt="Letícia Tomich Advocacia" 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
              }`}
              style={{ filter: 'brightness(0) saturate(100%)' }}
            />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground gold-underline transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect border-b border-border transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-lg tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="mt-4 w-fit">
            Consultoria Tática
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
