import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  clickable?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = false,
  clickable = false,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-4' : '';
  const clickableStyles = clickable ? 'cursor-pointer' : '';
  
  const combinedClassName = `${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
