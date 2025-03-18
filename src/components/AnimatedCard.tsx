
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
        "glass-card rounded-2xl p-6 flex flex-col items-start transition-all duration-300",
        "hover:shadow-lg hover:shadow-brand-purple/20 hover:-translate-y-2",
        "animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-red/10 text-brand-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;
