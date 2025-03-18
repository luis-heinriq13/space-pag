
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in">
            <div className="space-y-3">
              <span className="highlight-chip">
                Agência de Marketing Digital
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme sua <span className="text-gradient">presença digital</span> e amplie seus resultados
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-5">
                Estratégias personalizadas que geram mais leads, aumentam vendas e fortalecem sua marca no ambiente digital.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact">
                <Button className="btn-primary group">
                  Solicite Análise Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="btn-secondary">
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>
            
            <div className="pt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                +250 projetos entregues
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-accent mr-2"></div>
                98% de satisfação
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] animate-float-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl transform rotate-3 animate-float"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Equipe de marketing digital trabalhando em estratégias" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-lg shadow-lg animate-bounce-subtle">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-accent to-primary text-white p-2 rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Resultados reais</p>
                      <p className="text-xs text-muted-foreground">ROI médio de 320%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
