import { H2, P } from "~/components/Typography";

export interface ImageHighlightProps {
  image: string;
  title: string;
  description: string;
  direction?: "left" | "right";
  className?: string;
}

const ImageHighlight = ({
  image,
  title,
  description,
  direction = "left",
  className = "",
  ...rest
}: ImageHighlightProps) => {
  return (
    <div
      className={`border-b border-gray-200 flex flex-col py-24 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:gap-16 lg:gap-32 ${
        direction === "right" ? "md:flex-row-reverse" : ""
      } ${className}`}
      {...rest}
    >
      <img src={image} alt="image" className="m-auto mb-16 h-80 w-80 md:m-0" />
      <div className="flex flex-col justify-center">
        <H2 title={title} />
        <P text={description} />
      </div>
    </div>
  );
};

export default ImageHighlight;
