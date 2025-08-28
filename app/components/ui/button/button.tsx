import './button.css';

interface ButtonProps {
  className?: string;
  variant?: 'rectangular' | 'circular';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  [key: string]: any;
}

export function Button({
  className = '',
  variant = 'rectangular',
  color = 'primary',
  children,
  ...other
}: ButtonProps) {
  const baseClasses =
    'grid place-items-center bg-linear-to-b uppercase cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125 active:scale-100';

  const variantClasses = {
    rectangular: 'px-16 py-3 rounded-5xl',
    circular: 'p-[clamp(0.687rem,2vw,1.625rem)] aspect-square rounded-full',
  };

  const rectangularColorClasses = {
    primary: 'from-blue-ribbon to-blue-ribbon shadow-btn-rect-primary',
    secondary: 'from-blush-pink to-malibu shadow-btn-rect-secondary',
  };

  const circularColorClasses = {
    primary: 'from-blush-pink to-malibu shadow-btn-circle-primary',
    secondary: 'from-blush-pink to-malibu shadow-btn-circle-secondary',
  };

  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${variant === 'rectangular' ? rectangularColorClasses[color] : circularColorClasses[color]} ${className}`
      .replace(/\s+/g, ' ')
      .trim();

  return (
    <button type="button" className={combinedClasses} {...other}>
      {children}
    </button>
  );
}
