import { H3 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

export interface SlideProps {
  text: string;
  isActive?: boolean;
}

export const Slide = ({ text, isActive = false }: SlideProps) => (
  <div
    className={`absolute bottom-0 duration-300 flex items-center justify-center left-0 ${
      !isActive ? "opacity-0" : "opacity-100"
    } right-0 top-0 transition`}
  >
    <ContentLimiter>
      <H3 title={text} className="text-center" />
    </ContentLimiter>
  </div>
);

export default Slide;
