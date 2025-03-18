
import React from 'react';
import { Check, Search, LineChart, BarChart, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Análise e Diagnóstico",
      description: "Avaliamos sua presença digital atual, mercado, concorrência e identificamos oportunidades de crescimento."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvemos um plano customizado com metas claras, canais e táticas para atingir seus objetivos."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Execução e Implementação",
      description: "Nossa equipe coloca em prática todas as estratégias definidas, com foco em resultados mensuráveis."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Monitoramento e Otimização",
      description: "Acompanhamos os resultados continuamente e otimizamos as campanhas para maximizar o ROI."
    }
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Nossa Metodologia</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground">
            Um processo estruturado e transparente para garantir resultados consistentes para sua empresa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4 p-3 rounded-lg bg-brand-blue/10 text-brand-blue w-12 h-12 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-xl p-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Relatórios de Desempenho Transparentes</h3>
                <p className="text-muted-foreground">
                  Você receberá relatórios detalhados e fáceis de entender sobre o desempenho das estratégias implementadas, 
                  com métricas claras e recomendações para melhorias contínuas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-brand-purple/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Process;
