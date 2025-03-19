
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { ChevronRight, Globe, BarChart, Search, Users, PenTool, Smartphone, TrendingUp, Target, LineChart, FileText, Zap } from 'lucide-react';

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

  // Marketing statistics
  const marketingStats = [
    { value: "320%", label: "ROI médio", icon: <TrendingUp className="h-4 w-4" /> },
    { value: "75%", label: "Aumento de conversões", icon: <Target className="h-4 w-4" /> },
    { value: "200%", label: "Crescimento orgânico", icon: <LineChart className="h-4 w-4" /> },
    { value: "95%", label: "Satisfação de clientes", icon: <Users className="h-4 w-4" /> }
  ];

  // Content strategy examples
  const contentStrategies = [
    "Storytelling para conexão emocional",
    "Marketing de conteúdo segmentado",
    "Análise de dados para otimização",
    "Calendário editorial estratégico",
    "Distribuição multicanal integrada",
    "Conteúdo gerado por usuários"
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

        {/* Marketing Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in">
          {marketingStats.map((stat, index) => (
            <div key={index} className="glass-card p-4 rounded-xl text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-full bg-brand-purple/10 text-brand-purple">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-brand-purple">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="h-full"
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Content Strategy Section */}
        <div className="glass-card rounded-2xl p-8 mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-red/10 text-brand-purple">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Estratégias de Conteúdo</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentStrategies.map((strategy, index) => (
              <div key={index} className="flex items-center gap-2 p-3 border border-brand-purple/10 rounded-lg hover:bg-brand-purple/5 transition-colors">
                <Zap className="h-4 w-4 text-brand-purple" />
                <span>{strategy}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <a href="#contact" className="inline-flex items-center text-brand-purple font-medium group">
            Ver todos os serviços
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Space themed background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-brand-purple/5 rounded-full filter blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-brand-red/5 rounded-full filter blur-3xl"></div>
      
      {/* Add subtle stars */}
      <div className="star w-1 h-1 top-[10%] left-[5%]"></div>
      <div className="star w-1 h-1 top-[15%] left-[25%]"></div>
      <div className="star w-2 h-2 top-[20%] left-[80%]"></div>
      <div className="star w-1 h-1 top-[40%] left-[90%]"></div>
      <div className="star w-1 h-1 top-[75%] left-[15%]"></div>
      <div className="star w-1 h-1 top-[85%] left-[65%]"></div>
      <div className="star w-2 h-2 top-[60%] left-[40%]"></div>
    </section>
  );
};

export default Services;
