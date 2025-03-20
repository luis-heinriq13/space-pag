
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { 
  BarChart, 
  Users, 
  TrendingUp, 
  Search, 
  Target, 
  BarChart2,
  Heart,
  Globe,
  Zap,
  MessageCircle,
  Mail,
  LineChart,
  PieChart,
  MousePointer,
  FileText
} from 'lucide-react';

const CaseStudies = () => {
  // Customer journey metrics
  const journeyMetrics = [
    { stage: "Awareness", icon: <Globe className="h-4 w-4" />, metric: "128%", label: "Aumento de visibilidade" },
    { stage: "Interest", icon: <MousePointer className="h-4 w-4" />, metric: "87%", label: "Taxa de engajamento" },
    { stage: "Consideration", icon: <PieChart className="h-4 w-4" />, metric: "75%", label: "Aumento de tempo no site" },
    { stage: "Action", icon: <Zap className="h-4 w-4" />, metric: "215%", label: "Crescimento de conversões" },
    { stage: "Loyalty", icon: <Heart className="h-4 w-4" />, metric: "92%", label: "Taxa de retenção" }
  ];

  // Marketing tools and technologies
  const marketingTools = [
    {
      category: "Analytics & Dados",
      tools: ["Google Analytics 4", "Google Search Console", "Hotjar", "Data Studio", "SEMrush"]
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

        {/* Customer Journey Metrics */}
        <div className="glass-card rounded-xl p-6 mb-16 animate-fade-in-left">
          <h3 className="text-xl font-semibold mb-6">Métricas da Jornada do Cliente</h3>
          
          <div className="flex flex-wrap justify-between gap-4">
            {journeyMetrics.map((item, index) => (
              <div key={index} className="text-center p-4 flex-1 min-w-[150px] border-r last:border-r-0 border-brand-purple/10">
                <div className="mx-auto mb-3 h-10 w-10 flex items-center justify-center rounded-full bg-brand-purple/10">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-brand-purple">{item.metric}</div>
                <div className="text-xs uppercase tracking-wider">{item.stage}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16">
          <div className="space-y-8 animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">Tecnologias & Ferramentas</h3>
            
            <div className="glass-card rounded-xl p-6 h-full space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <BarChart2 className="h-6 w-6 text-brand-purple" />
                <h4 className="text-lg font-medium">Stack de Marketing com as Melhores Ferramentas</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CaseStudies;
