import { Bar, Progress } from './style';

interface IProgressBar {
  width: string;
  widthBar?: string;
  marginTop?: string;
  marginBottom?: string;
}

export default function ProgressBar({
  width,
  widthBar,
  marginTop,
  marginBottom = '0'
}: IProgressBar) {
  return (
    <Bar widthBar={widthBar} marginTop={marginTop} marginBottom={marginBottom}>
      <Progress width={width} />
    </Bar>
  );
}
