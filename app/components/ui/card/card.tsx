interface CardProps {
  children: React.ReactNode;
  heading: React.ReactNode;
}

export function Card({ children, heading }: CardProps) {
  return (
    <div className="relative grid place-items-center min-w-[20.25rem] w-[41vw] min-h-[31.25rem] bg-gradient-to-b from-governor-bay to-resolution-blue/83 rounded-[4.5rem] shadow-[inset_0_-8px_0_4px_var(--color-arapawa),inset_0_6px_0_8px_var(--color-blue-ribbon)]">
      <div className="absolute bottom-[85%] px-[2rem]">{heading}</div>
      {children}
    </div>
  );
}
