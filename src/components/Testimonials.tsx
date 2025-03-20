
import React, { useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import WhatsAppTestimonials from './WhatsAppTestimonials';

const Testimonials = () => {
  // Reference for logos carousel API
  const [logoApi, setLogoApi] = React.useState<CarouselApi>();
  
  // Setup autoplay for logos carousel
  useEffect(() => {
    if (!logoApi) return;
    
    const interval = setInterval(() => {
      logoApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [logoApi]);

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
