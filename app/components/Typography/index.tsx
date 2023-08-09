interface TitleProps {
  title: string;
  className?: string;
  highlights?: string[];
}

interface ParagraphProps {
  text: string;
  className?: string;
  highlights?: string[];
}

interface DynamicAccentProps {
  text: string;
  highlights?: string[];
}

export const H1 = ({
  title,
  className,
  highlights = [],
  ...rest
}: TitleProps) => (
  <h1
    className={`font-light mb-4 text-3xl sm:mb-6 sm:text-5xl md:mb-8 ${className}`}
    {...rest}
  >
    <DynamicAccent text={title} highlights={highlights} />
  </h1>
);

export const H2 = ({
  title,
  className,
  highlights = [],
  ...rest
}: TitleProps) => (
  <h2
    className={`font-thin mb-4 text-3xl sm:mb-5 sm:text-3xl md:mb-7 lg:text-4xl ${className}`}
    {...rest}
  >
    <DynamicAccent text={title} highlights={highlights} />
  </h2>
);

export const H3 = ({ title, className, highlights = [] }: TitleProps) => (
  <h3
    className={`font-thin mb-4 text-xl sm:mb-5 sm:text-2xl md:mb-7 lg:text-3xl ${className}`}
  >
    <DynamicAccent text={title} highlights={highlights} />
  </h3>
);

export const P = ({
  text,
  className,
  highlights = [],
  ...rest
}: ParagraphProps) => (
  <p
    className={`leading-7 text-base sm:text-lg md:leading-8 md:text-lg ${className}`}
    {...rest}
  >
    <DynamicAccent text={text} highlights={highlights} />
  </p>
);

export const DynamicAccent = ({
  text,
  highlights = [],
}: DynamicAccentProps) => (
  <span
    dangerouslySetInnerHTML={{
      __html: text
        .split(" ")
        .map((token) =>
          highlights.includes(token) ? `<strong>${token}</strong>` : token
        )
        .join(" "),
    }}
  />
);
