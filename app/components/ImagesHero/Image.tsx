export interface ImageProps {
  name: string;
  image: string;
  turn: number;
  isVisible: boolean;
}

const Image = ({ name, image, turn, isVisible }: ImageProps) => (
  <img
    className={`appearing appearing-turn-${turn} align-middle h-12 inline-block mb-4 mx-4`}
    data-is-visible={isVisible}
    src={image}
    alt={name}
  />
);

export default Image;
