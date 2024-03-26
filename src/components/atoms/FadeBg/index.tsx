import { Fade } from './style';

interface IFadeBg {
  fadeClick?: () => any;
}

export default function FadeBg({ fadeClick }: IFadeBg) {
  return <Fade onClick={fadeClick} />;
}
