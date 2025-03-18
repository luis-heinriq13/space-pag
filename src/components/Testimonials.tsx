
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Oliveira",
      position: "CEO",
      company: "TechSoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "A parceria com a DigiMark transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos em 180% nosso tráfego orgânico e as conversões cresceram 75%.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      position: "Diretor de Marketing",
      company: "Inova Shop",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "Nossa estratégia de marketing estava estagnada até contratarmos a DigiMark. Conseguimos uma redução de 40% no custo por lead e um aumento de 120% nas vendas online.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      position: "Fundadora",
      company: "Bella Cosmetics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      testimonial: "A gestão de redes sociais da DigiMark nos ajudou a criar uma comunidade engajada em torno da nossa marca. Nosso Instagram cresceu 300% em seis meses e as vendas diretas pelas redes aumentaram 85%.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const testimonial = testimonials[currentIndex];

  // Client logos
  const clientLogos = [
    "TechSoft", "Inova Shop", "Bella Cosmetics",
    "GlobalTech", "Smart Solutions", "WebPrime"
  ];

  return (
    <section className="section-padding relative overflow-hidden">
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

        <div 
          ref={containerRef} 
          className="max-w-4xl mx-auto glass-card rounded-2xl p-8 mb-16 relative"
        >
          <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
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

          <div className="absolute bottom-8 right-8 flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-brand-blue hover:text-white border-brand-blue/30"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-brand-blue hover:text-white border-brand-blue/30"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="py-8">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className="glass-card px-4 py-2 rounded-lg">
                <span className="text-lg font-semibold text-brand-blue">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-brand-purple/5 rounded-full filter blur-3xl -translate-y-1/2"></div>
    </section>
  );
};

export default Testimonials;
