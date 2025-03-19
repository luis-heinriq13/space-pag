
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ title, description, icon, className, delay = 0 }: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 flex flex-col items-start transition-all duration-500",
        "hover:shadow-lg hover:shadow-brand-purple/20 hover:-translate-y-2",
        "animate-fade-in relative overflow-hidden group",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-red/10 text-brand-purple relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
      
      {/* Background subtle animations */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-purple/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default AnimatedCard;
