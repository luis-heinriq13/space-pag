
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo para começar a ver resultados?",
      answer: "Os resultados variam conforme a estratégia e o mercado. Geralmente, campanhas de ads mostram resultados em 1-2 semanas, enquanto estratégias de SEO podem levar 2-3 meses para apresentar avanços significativos. Estabelecemos expectativas realistas no início do projeto."
    },
    {
      question: "Como é realizada a precificação dos serviços?",
      answer: "Trabalhamos com pacotes personalizados baseados nas necessidades específicas de cada cliente. Após a análise inicial gratuita, apresentamos uma proposta detalhada com investimentos e estimativas de resultados. Não trabalhamos com contratos longos de fidelização."
    },
    {
      question: "Vocês atendem empresas de qualquer segmento?",
      answer: "Sim, nossa metodologia se adapta a diversos setores. Temos experiência em e-commerce, SaaS, serviços profissionais, educação, saúde, entre outros. Nossa equipe estuda a fundo o mercado do cliente para desenvolver estratégias eficazes."
    },
    {
      question: "Como acompanho os resultados das campanhas?",
      answer: "Fornecemos dashboards personalizados e relatórios mensais detalhados. Além disso, realizamos reuniões periódicas para discutir os resultados, ajustar estratégias e responder a quaisquer dúvidas. Transparência é um dos nossos valores fundamentais."
    },
    {
      question: "Preciso ter redes sociais ou site para contratar os serviços?",
      answer: "Não necessariamente. Podemos começar do zero, criando toda a estrutura digital necessária para o seu negócio. Desenvolvemos sites, criamos perfis em redes sociais e implementamos as estratégias adequadas para seus objetivos."
    },
    {
      question: "O que diferencia a DigiMark de outras agências?",
      answer: "Nossa abordagem baseada em dados, transparência total, atendimento consultivo e foco em resultados mensuráveis. Não vendemos pacotes genéricos – cada estratégia é desenvolvida exclusivamente para cada cliente, com análise constante e otimização."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-secondary/50 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Perguntas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tire suas <span className="text-gradient">dúvidas</span>
          </h2>
          <p className="text-muted-foreground">
            Respondemos às perguntas mais comuns sobre nossos serviços e processos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 md:p-8 animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Não encontrou o que procurava? <a href="#contact" className="text-brand-blue hover:underline">Entre em contato conosco</a>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default FAQ;
