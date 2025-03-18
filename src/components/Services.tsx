
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ChevronRight, Globe, BarChart, Search, Users, PenTool, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Social Media",
      description: "Gerenciamento de redes sociais com conteúdo estratégico para aumentar o engajamento e conversões.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Gestão de Anúncios",
      description: "Campanhas de Google Ads e Meta Ads otimizadas para maximizar seu ROI e atrair clientes qualificados.",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "SEO",
      description: "Otimização para mecanismos de busca que posiciona sua marca nas primeiras páginas do Google.",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Branding",
      description: "Desenvolvimento e fortalecimento da identidade visual da sua marca para se destacar no mercado.",
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Web Design",
      description: "Criação de sites e landing pages que convertem visitantes em clientes de forma eficiente.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Mobile Marketing",
      description: "Estratégias específicas para dispositivos móveis, onde seu público passa a maior parte do tempo.",
      icon: <Smartphone className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções completas para o seu <span className="text-gradient">sucesso digital</span>
          </h2>
          <p className="text-muted-foreground">
            Combinamos estratégias personalizadas e as melhores práticas do mercado para potencializar
            os resultados da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <a href="#contact" className="inline-flex items-center text-primary font-medium group">
            Ver todos os serviços
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-accent/5 rounded-full filter blur-3xl -translate-y-1/2"></div>
    </section>
  );
};

export default Services;
