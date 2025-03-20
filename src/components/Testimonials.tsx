
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import WhatsAppTestimonials from './WhatsAppTestimonials';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const Testimonials = () => {
  // References for carousel APIs
  const [testimonialApi, setTestimonialApi] = React.useState<CarouselApi>();
  const [logoApi, setLogoApi] = React.useState<CarouselApi>();
  
  // Setup autoplay for testimonials carousel
  useEffect(() => {
    if (!testimonialApi) return;
    
    const interval = setInterval(() => {
      testimonialApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonialApi]);
  
  // Setup autoplay for logos carousel
  useEffect(() => {
    if (!logoApi) return;
    
    const interval = setInterval(() => {
      logoApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [logoApi]);

  const testimonials: Testimonial[] = [
    {
      name: "Ana Oliveira",
      position: "CEO",
      company: "TechSoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "A parceria com a Space Digital Academy transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos em 180% nosso tráfego orgânico e as conversões cresceram 75%.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      position: "Diretor de Marketing",
      company: "Inova Shop",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "Nossa estratégia de marketing estava estagnada até contratarmos a Space Digital Academy. Conseguimos uma redução de 40% no custo por lead e um aumento de 120% nas vendas online.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      position: "Fundadora",
      company: "Bella Cosmetics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "A gestão de redes sociais da Space Digital Academy nos ajudou a criar uma comunidade engajada em torno da nossa marca. Nosso Instagram cresceu 300% em seis meses e as vendas diretas pelas redes aumentaram 85%.",
      rating: 5
    },
    {
      name: "Ricardo Santos",
      position: "CMO",
      company: "GlobalTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "A equipe da Space Digital Academy é extremamente profissional e entregou além das nossas expectativas. Nosso ROI em campanhas digitais aumentou 250% em apenas 4 meses.",
      rating: 5
    },
    {
      name: "Juliana Lima",
      position: "Diretora de Vendas",
      company: "Smart Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "Após implementar as estratégias da Space Digital Academy, conseguimos um aumento de 95% em leads qualificados e uma redução de 30% no custo de aquisição de clientes.",
      rating: 5
    }
  ];

  // Client logos with images
  const clientLogos = [
    {
      name: "TechSoft",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Inova Shop",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Bella Cosmetics",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "GlobalTech",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Smart Solutions",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "WebPrime",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="section-padding relative overflow-visible">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="highlight-chip mb-2">Clientes Satisfeitos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem sobre <span className="text-gradient">nossos serviços</span>
          </h2>
          <p className="text-muted-foreground">
            Centenas de empresas já transformaram sua presença digital e conquistaram resultados surpreendentes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Carousel 
            className="w-full" 
            opts={{ loop: true, align: "start", skipSnaps: true }}
            setApi={setTestimonialApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="glass-card rounded-2xl p-8 h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl font-medium italic mb-4">
                          "{testimonial.testimonial}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="border-brand-blue/30 hover:bg-brand-blue hover:text-white" />
              <CarouselNext className="border-brand-blue/30 hover:bg-brand-blue hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* WhatsApp Testimonials */}
        <WhatsAppTestimonials />

        <div className="py-8 mt-8">
          <p className="text-center text-base font-medium mb-8">
            Empresas que confiam em nosso trabalho
          </p>
          <Carousel 
            className="w-full" 
            opts={{ loop: true, align: "start", skipSnaps: false }}
            setApi={setLogoApi}
          >
            <CarouselContent>
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <div className="glass-card p-4 rounded-lg h-full">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-sm">
                        <img src={logo.image} alt={logo.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-semibold text-brand-purple">{logo.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Background decoration - reduced opacity and size to avoid overlap */}
      <div className="absolute top-1/2 right-0 w-1/4 h-1/3 bg-brand-purple/3 rounded-full filter blur-3xl -translate-y-1/2"></div>
    </section>
  );
};

export default Testimonials;
