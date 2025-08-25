interface ButtonProps {
  children: React.ReactNode;
  variant?: 'rectangular' | 'circular';
  color?: 'primary' | 'secondary';
  className?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant = 'rectangular',
  color = 'primary',
  className = '',
  ...other
}: ButtonProps) {
  const baseClasses =
    'grid place-items-center uppercase cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-100';

  const variantClasses = {
    rectangular: 'px-16 py-3 rounded-[2.5rem]',
    circular: 'self-end max-w-[12.5rem] w-[40%] min-w-[10rem] aspect-square rounded-full',
  };

  const rectangularColorClasses = {
    primary:
      'bg-blue-ribbon shadow-[inset_0_-2px_0_3px_var(--color-arapawa),inset_0_1px_0_6px_var(--color-dodger-blue)]',
    secondary:
      'bg-gradient-to-b from-blush-pink to-malibu shadow-[inset_0_-2px_0_3px_var(--color-arapawa),inset_0_1px_0_6px_var(--color-heliotrope-light)]',
  };

  const circularColorClasses = {
    primary:
      'bg-blue-ribbon shadow-[inset_0_-4px_0_5px_var(--color-ebony-clay),inset_0_-12px_0_11px_var(--color-dodger-blue)]',
    secondary:
      'bg-gradient-to-b from-blush-pink to-malibu shadow-[inset_0_-4px_0_5px_var(--color-ebony-clay),inset_0_-12px_0_11px_var(--color-electric-violet)]',
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
