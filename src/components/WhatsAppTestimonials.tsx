
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { MessageCircle, Check, Clock } from 'lucide-react';

interface WhatsAppMessage {
  id: number;
  sender: string;
  message: string;
  time: string;
  isRead: boolean;
}

const WhatsAppTestimonials: React.FC = () => {
  const [carouselApi, setCarouselApi] = React.useState<any>();
  
  // Setup auto-scroll for infinite scrolling effect
  useEffect(() => {
    if (!carouselApi) return;
    
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [carouselApi]);

  const whatsappMessages: WhatsAppMessage[] = [
    {
      id: 1,
      sender: "Laura Campos",
      message: "Contratei vocês para minha empresa e foi a melhor decisão que tomei! As campanhas estão performando muito além do esperado. 📈",
      time: "14:25",
      isRead: true
    },
    {
      id: 2,
      sender: "Rafael Martins",
      message: "Queria agradecer pelo trabalho incrível! Nosso tráfego orgânico aumentou 87% em apenas dois meses. Vocês são sensacionais!",
      time: "09:18",
      isRead: true
    },
    {
      id: 3,
      sender: "Camila Soares",
      message: "Adorei as estratégias de marketing de conteúdo! Nossa taxa de conversão aumentou muito desde que começamos a trabalhar juntos. 👏",
      time: "16:40",
      isRead: true
    },
    {
      id: 4,
      sender: "Pedro Oliveira",
      message: "As análises que vocês entregam são muito completas! Agora consigo tomar decisões muito mais embasadas para o meu negócio.",
      time: "11:52",
      isRead: true
    },
    {
      id: 5,
      sender: "Amanda Costa",
      message: "Pessoal, os resultados das campanhas de Google Ads superaram todas as expectativas! Muito obrigada por toda dedicação! 🚀",
      time: "15:30",
      isRead: true
    },
    {
      id: 6,
      sender: "Bruno Mendes",
      message: "A implementação da estratégia de SEO que vocês fizeram foi um divisor de águas para minha empresa. Estamos na primeira página para várias palavras-chave!",
      time: "10:15",
      isRead: true
    },
    {
      id: 7,
      sender: "Juliana Freitas",
      message: "Oi! Só pra dizer que o trabalho de vocês está incrível. Nossas redes sociais nunca tiveram tanta interação. Muito feliz com os resultados! 😊",
      time: "13:47",
      isRead: true
    },
    {
      id: 8,
      sender: "Ricardo Nunes",
      message: "O ROI que estamos tendo com as estratégias implementadas é simplesmente impressionante. Melhor investimento que fizemos nos últimos anos!",
      time: "17:20",
      isRead: true
    }
  ];

  return (
    <div className="py-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-center text-xl font-semibold mb-8 flex items-center justify-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-500" />
          Conversas reais com nossos clientes
        </h3>
        
        <Carousel
          className="w-full"
          opts={{ loop: true, align: "start", skipSnaps: false }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="py-4">
            {whatsappMessages.map((msg) => (
              <CarouselItem key={msg.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="whatsapp-message-card p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-800">{msg.sender}</p>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      {msg.time}
                      {msg.isRead && <Check className="h-3 w-3 text-green-500" />}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm flex-grow">{msg.message}</p>
                  <div className="flex justify-end mt-3">
                    <span className="text-xs text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Cliente há 6+ meses
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-10 top-1/2 w-20 h-20 bg-green-500/10 rounded-full filter blur-xl"></div>
      <div className="absolute -right-10 top-1/3 w-20 h-20 bg-green-500/10 rounded-full filter blur-xl"></div>
    </div>
  );
};

export default WhatsAppTestimonials;
