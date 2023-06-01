import content from "~/content/footer";
import Copyright from "~/components/Footer/Copyright";

export default function HiringFooter() {
  return (
    <Copyright year={content.copyrightYear} text={content.copyright} inverted />
  );
}
