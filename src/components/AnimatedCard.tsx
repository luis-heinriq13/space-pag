
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const AnimatedCard = ({ title, description, icon, className }: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 flex flex-col items-start transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2",
        "animate-fade-in",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default AnimatedCard;
