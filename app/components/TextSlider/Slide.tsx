import { H3 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

export interface SlideProps {
  text: string;
  highlights: string[];
  isActive?: boolean;
}

export const Slide = ({
  text,
  isActive = false,
  highlights = [],
}: SlideProps) => (
  <div
    className={`absolute bottom-0 cursor-none duration-300 flex items-center justify-center left-0 ${
      !isActive ? "opacity-0 pointer-events-none" : "opacity-100 z-10"
    } right-0 top-0 transition`}
  >
    <ContentLimiter>
      <div
        className="font-thin mb-4 text-center text-xl sm:mb-5 sm:text-2xl md:mb-7 lg:text-4xl"
        dangerouslySetInnerHTML={{
          __html: text
            .split(" ")
            .map((token) => {
              if (highlights.includes(token)) {
                return `<span class="enhanced-token">${token}</span>`;
              }
              return token;
            })
            .join(" "),
        }}
      />
    </ContentLimiter>
  </div>
);

export default Slide;
