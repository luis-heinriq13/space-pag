
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="highlight-chip">
                  Agência de Marketing Digital
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-3 w-3 fill-yellow-500" />
                  <Star className="h-3 w-3 fill-yellow-500" />
                  <Star className="h-3 w-3 fill-yellow-500" />
                  <Star className="h-3 w-3 fill-yellow-500" />
                  <Star className="h-3 w-3 fill-yellow-500" />
                </div>
              </div>
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
            
            <div className="pt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>+250 projetos entregues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>98% de satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-purple" />
                <span>ROI médio de 320%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-red" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] animate-float-slow">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl transform rotate-3 animate-float"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Equipe de marketing digital trabalhando em estratégias" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
                
                {/* Floating stats cards */}
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
                
                <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-lg shadow-lg animate-bounce-subtle" style={{ animationDelay: "1.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-brand-purple to-brand-red text-white p-2 rounded-full">
                      <Star className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Clientes satisfeitos</p>
                      <p className="text-xs text-muted-foreground">Mais de 250 cases</p>
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
      
      {/* Add subtle stars */}
      <div className="star w-1 h-1 top-[10%] left-[15%]"></div>
      <div className="star w-1 h-1 top-[25%] left-[35%]"></div>
      <div className="star w-2 h-2 top-[30%] left-[70%]"></div>
      <div className="star w-1 h-1 top-[50%] left-[85%]"></div>
      <div className="star w-1 h-1 top-[65%] left-[25%]"></div>
      <div className="star w-2 h-2 top-[80%] left-[50%]"></div>
    </section>
  );
};

export default Hero;
