
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const caseData = [
    {
      id: 1,
      client: "TechSoft",
      industry: "SaaS",
      challenge: "Baixa visibilidade online e poucos leads qualificados.",
      solution: "Estratégia de SEO + Campanhas de Google Ads otimizadas",
      results: {
        traffic: "+230%",
        leads: "+180%",
        sales: "+95%",
        cpa: "-40%"
      },
      chartData: [
        { month: 'Jan', antes: 1500, depois: 1500 },
        { month: 'Fev', antes: 1600, depois: 2100 },
        { month: 'Mar', antes: 1700, depois: 3200 },
        { month: 'Abr', antes: 1500, depois: 4100 },
        { month: 'Mai', antes: 1800, depois: 4800 },
        { month: 'Jun', antes: 1700, depois: 5100 },
      ]
    },
    {
      id: 2,
      client: "Bella Cosmetics",
      industry: "E-commerce",
      challenge: "Baixo engajamento nas redes sociais e ROI negativo em ads.",
      solution: "Gestão de redes sociais + Reestruturação das campanhas de Meta Ads",
      results: {
        engagement: "+310%",
        followers: "+200%",
        sales: "+145%",
        roi: "+320%"
      },
      chartData: [
        { month: 'Jan', antes: 5000, depois: 5000 },
        { month: 'Fev', antes: 5200, depois: 7000 },
        { month: 'Mar', antes: 4800, depois: 9500 },
        { month: 'Abr', antes: 5100, depois: 11200 },
        { month: 'Mai', antes: 5300, depois: 13800 },
        { month: 'Jun', antes: 5000, depois: 16200 },
      ]
    }
  ];

  const [activeCase, setActiveCase] = React.useState(0);

  return (
    <section id="cases" className="section-padding bg-secondary/50 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Casos de Sucesso</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados <span className="text-gradient">reais e mensuráveis</span>
          </h2>
          <p className="text-muted-foreground">
            Veja como transformamos os desafios de nossos clientes em oportunidades de crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex space-x-3 mb-6">
              {caseData.map((caseItem, index) => (
                <button
                  key={caseItem.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCase === index 
                      ? 'bg-brand-blue text-white' 
                      : 'text-muted-foreground hover:text-brand-blue'
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  {caseItem.client}
                </button>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Indústria</p>
                  <p className="font-medium">{caseData[activeCase].industry}</p>
                </div>
                <span className="highlight-chip">Case Study</span>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Desafio</h4>
                  <p>{caseData[activeCase].challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Solução</h4>
                  <p>{caseData[activeCase].solution}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Resultados</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(caseData[activeCase].results).map(([key, value]) => (
                    <div key={key} className="bg-brand-blue/10 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-brand-blue">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <a href="#contact" className="inline-flex items-center text-brand-blue font-medium group">
                Ver estudo de caso completo
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 h-[400px] animate-fade-in-right">
            <h4 className="text-center text-lg font-medium mb-4">Crescimento ao longo do tempo</h4>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart
                data={caseData[activeCase].chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="antes" 
                  stroke="#94A3B8" 
                  fill="#94A3B8" 
                  fillOpacity={0.3} 
                  name="Antes"
                />
                <Area 
                  type="monotone" 
                  dataKey="depois" 
                  stroke="#0EA5E9" 
                  fill="#0EA5E9" 
                  fillOpacity={0.5} 
                  name="Depois"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CaseStudies;
