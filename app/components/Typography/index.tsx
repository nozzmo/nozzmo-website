interface TitleProps {
  title: string;
  className?: string;
}

interface ParagraphProps {
  text: string;
  className?: string;
}

export const H1 = ({ title, className }: TitleProps) => (
  <h1
    className={`font-light mb-4 text-3xl sm:mb-6 sm:text-5xl md:mb-8 lg:text-7xl ${className}`}
  >
    {title}
  </h1>
);

export const H2 = ({ title, className }: TitleProps) => (
  <h2
    className={`font-thin mb-4 text-2xl sm:mb-5 sm:text-3xl md:mb-7 lg:text-5xl ${className}`}
  >
    {title}
  </h2>
);

export const H3 = ({ title, className }: TitleProps) => (
  <h3
    className={`font-thin mb-4 text-xl sm:mb-5 sm:text-2xl md:mb-7 lg:text-4xl ${className}`}
  >
    {title}
  </h3>
);

export const P = ({ text, className }: ParagraphProps) => (
  <p
    className={`leading-7 text-base sm:text-lg md:leading-8 md:text-lg ${className}`}
  >
    {text}
  </p>
);
