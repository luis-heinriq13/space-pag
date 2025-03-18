
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { 
  BarChart, 
  Users, 
  TrendingUp, 
  Search, 
  Target, 
  BarChart2,
  Heart 
} from 'lucide-react';

const CaseStudies = () => {
  // Marketing metrics data
  const marketingMetrics = [
    {
      id: 1,
      title: "ROI em Publicidade Digital",
      icon: <TrendingUp className="h-7 w-7" />,
      description: "Maximizamos seu retorno sobre investimento em campanhas de Google Ads e Meta Ads para garantir que cada real investido gere resultados mensuráveis.",
      average: 320,
      unit: "%",
      benchmarkAvg: 180
    },
    {
      id: 2,
      title: "Crescimento de Audiência",
      icon: <Users className="h-7 w-7" />,
      description: "Expandimos sua base de seguidores e construímos uma comunidade engajada ao redor da sua marca, gerando defensores e embaixadores.",
      average: 215,
      unit: "%",
      benchmarkAvg: 120
    },
    {
      id: 3,
      title: "Ranqueamento SEO",
      icon: <Search className="h-7 w-7" />,
      description: "Posicionamos seu site nas primeiras posições do Google para palavras-chave estratégicas, aumentando sua visibilidade e tráfego orgânico qualificado.",
      average: 85,
      unit: "%",
      benchmarkAvg: 40
    },
    {
      id: 4,
      title: "Taxa de Conversão",
      icon: <Target className="h-7 w-7" />,
      description: "Otimizamos suas páginas e funis para transformar visitantes em leads e leads em clientes, maximizando cada oportunidade.",
      average: 175,
      unit: "%",
      benchmarkAvg: 95
    }
  ];

  // Marketing tools and technologies
  const marketingTools = [
    {
      category: "Analytics & Dados",
      tools: ["Google Analytics 4", "Google Search Console", "Hotjar", "Data Studio", "SEMrush"]
    },
    {
      category: "Automação & CRM",
      tools: ["HubSpot", "RD Station", "ActiveCampaign", "MailChimp", "Zapier"]
    },
    {
      category: "Criação & Design",
      tools: ["Adobe Creative Suite", "Canva Pro", "Figma", "Loom", "Camtasia"]
    },
    {
      category: "Gestão de Campanhas",
      tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads"]
    }
  ];

  return (
    <section id="cases" className="section-padding bg-secondary/50 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Análise de Resultados</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Estratégias <span className="text-gradient">orientadas por dados</span>
          </h2>
          <p className="text-muted-foreground">
            Utilizamos métricas e KPIs para acompanhar, medir e otimizar cada aspecto das suas campanhas de marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6">Métricas de Desempenho</h3>
            
            <div className="space-y-8">
              {marketingMetrics.map((metric) => (
                <div key={metric.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-red/10 text-brand-purple">
                      {metric.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{metric.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Média do mercado: {metric.benchmarkAvg}{metric.unit}</span>
                      <span className="text-sm font-medium">Nossos resultados: {metric.average}{metric.unit}</span>
                    </div>
                    <Slider
                      defaultValue={[metric.average]}
                      max={metric.average * 1.2}
                      step={1}
                      disabled
                      className="w-full"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-muted-foreground">0{metric.unit}</span>
                      <span className="text-xs text-brand-purple font-medium">+{metric.average}{metric.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">Tecnologias & Ferramentas</h3>
            
            <div className="glass-card rounded-xl p-6 h-full space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <BarChart2 className="h-6 w-6 text-brand-purple" />
                <h4 className="text-lg font-medium">Stack de Marketing com as Melhores Ferramentas</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {marketingTools.map((toolCategory, index) => (
                  <div key={index} className="space-y-3">
                    <h5 className="font-medium flex items-center gap-2">
                      <Heart className="h-4 w-4 text-brand-red" />
                      {toolCategory.category}
                    </h5>
                    <ul className="space-y-2">
                      {toolCategory.tools.map((tool, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <span className="w-2 h-2 rounded-full bg-brand-purple mr-2"></span>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-brand-purple/10 rounded-lg">
                <h5 className="font-medium mb-2">Por que isso importa?</h5>
                <p className="text-sm text-muted-foreground">
                  Utilizamos as ferramentas e tecnologias mais avançadas do mercado para analisar, planejar e executar 
                  estratégias de marketing digital que impulsionam seu negócio com eficiência e escala.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h4 className="text-lg font-medium mb-4">Metodologia de Trabalho</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-brand-purple/20 rounded-lg">
                  <p className="text-sm font-medium">Growth Hacking</p>
                  <p className="text-xs text-muted-foreground">Encontramos oportunidades de crescimento rápido.</p>
                </div>
                <div className="p-3 border border-brand-purple/20 rounded-lg">
                  <p className="text-sm font-medium">Data-Driven</p>
                  <p className="text-xs text-muted-foreground">Todas decisões são baseadas em dados.</p>
                </div>
                <div className="p-3 border border-brand-purple/20 rounded-lg">
                  <p className="text-sm font-medium">Agile Marketing</p>
                  <p className="text-xs text-muted-foreground">Sprints e iterações contínuas.</p>
                </div>
                <div className="p-3 border border-brand-purple/20 rounded-lg">
                  <p className="text-sm font-medium">Omnichannel</p>
                  <p className="text-xs text-muted-foreground">Experiência integrada em todos os canais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CaseStudies;
