
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-8 md:p-12 relative z-10 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="highlight-chip mb-2">Pronto para começar?</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforme sua presença digital <span className="text-gradient">hoje mesmo</span>
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário para receber uma análise gratuita do seu negócio e um plano personalizado para aumentar seus resultados.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Resposta em até 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-purple" />
                  <span className="text-sm">Estratégia personalizada</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 shadow-xl">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Serviço de interesse
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="social-media">Social Media</option>
                    <option value="ads">Gestão de Anúncios</option>
                    <option value="seo">SEO</option>
                    <option value="branding">Branding</option>
                    <option value="web-design">Web Design</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Conte-nos sobre seu projeto ou desafio..."
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  ></textarea>
                </div>
                <Button className="w-full btn-primary mt-2 group">
                  Solicitar Análise Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Add subtle stars */}
      <div className="star w-1 h-1 top-[20%] left-[20%]"></div>
      <div className="star w-2 h-2 top-[30%] left-[80%]"></div>
      <div className="star w-1 h-1 top-[70%] left-[30%]"></div>
      <div className="star w-1 h-1 top-[85%] left-[70%]"></div>
    </section>
  );
};

export default CTA;
