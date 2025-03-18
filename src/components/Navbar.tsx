
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">
          DigiMark
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Serviços
            </a>
            <a href="#cases" className="text-sm font-medium hover:text-accent transition-colors">
              Casos de Sucesso
            </a>
            <a href="#process" className="text-sm font-medium hover:text-accent transition-colors">
              Como Funciona
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
          </nav>
          <a href="#contact">
            <Button className="btn-primary">
              Fale Conosco
            </Button>
          </a>
        </div>

        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4 py-4">
            <a 
              href="#services" 
              className="text-sm font-medium hover:text-accent transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#cases" 
              className="text-sm font-medium hover:text-accent transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Casos de Sucesso
            </a>
            <a 
              href="#process" 
              className="text-sm font-medium hover:text-accent transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium hover:text-accent transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="btn-primary w-full">
                Fale Conosco
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
