import './stroked-text.css';

interface StrokedTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  strokeWidth?: number;
  children: React.ReactNode;
}

export function StrokedText({
  as: Component = 'h1',
  className = '',
  strokeWidth = 0.12,
  children,
}: StrokedTextProps) {
  const baseClasses = ['stroked-text', className].filter(Boolean).join(' ');

  const textContent = typeof children === 'string' ? children : '';

  return (
    <Component
      className={baseClasses}
      data-text={textContent}
      style={
        {
          '--stroke-width': `${strokeWidth}em`,
        } as React.CSSProperties & { '--stroke-width': string }
      }
    >
      {children}
    </Component>
  );
}
