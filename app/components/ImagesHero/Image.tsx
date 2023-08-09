export interface ImageProps {
  name: string;
  image: string;
  turn: number;
  isVisible: boolean;
}

const Image = ({ name, image, turn, isVisible }: ImageProps) => (
  <img
    className={`appearing appearing-turn-${turn} align-middle block h-12 mb-4 mx-auto sm:inline-block sm:mx-4`}
    data-is-visible={isVisible}
    src={image}
    alt={name}
  />
);

export default Image;
