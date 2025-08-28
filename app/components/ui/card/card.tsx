import './card.css';

interface CardProps {
  className?: string;
  heading: React.ReactNode;
  children: React.ReactNode;
}

export function Card({ className = '', heading, children }: CardProps) {
  const baseClasses = [
    'relative grid w-full max-w-148 min-h-111 py-12.5 px-6 bg-linear-to-b from-governor-bay to-resolution-blue/83 rounded-[clamp(3rem,5vw,4.5rem)] shadow-card',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={baseClasses}>
      <div className="absolute -top-34 max-[28.5rem]:-top-18.75 w-full p-6.5">{heading}</div>
      {children}
    </div>
  );
}
