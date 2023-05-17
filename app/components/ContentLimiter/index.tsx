interface ContentLimiterProps {
  children: React.ReactNode;
  className?: string;
}

const ContentLimiter = ({
  children,
  className,
  ...rest
}: ContentLimiterProps) => (
  <div
    className={`max-w-7xl mx-auto px-8 w-full sm:px-12 md:px-16 ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export default ContentLimiter;
