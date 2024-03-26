import { Container } from './style';
import FilledButton from '../../atoms/FilledButton';

interface IFilledButtonContainer {
  height?: string;
  width?: string;
  margin?: string;
  btnText?: string;
  btnBgColor1?: string;
  btnBgColor2?: string;
  btnTextColor?: string;
  btnIsRounded?: boolean;
  btnRoundedSize?: string;
  btnBoxShadow?: string;
  btnAction?: () => void;
  hasBorder?: boolean;
  border?: string;
  padding?: string;
  fontFamily?: string;
  fontWeight?: string;
}

export default function FilledButtonContainer({
  height,
  width,
  margin,
  btnText,
  btnBgColor1,
  btnBgColor2,
  btnTextColor,
  btnIsRounded,
  btnRoundedSize,
  btnBoxShadow,
  hasBorder,
  padding,
  border,
  fontWeight,
  fontFamily,
  btnAction,
}: IFilledButtonContainer) {
  return (
    <Container height={height} width={width} margin={margin}>
      <FilledButton
        bgColor1={btnBgColor1}
        bgColor2={btnBgColor2}
        text={btnText}
        textColor={btnTextColor}
        action={btnAction}
        borderRounded={btnIsRounded}
        roundedSize={btnRoundedSize}
        hasBoxShadow={btnBoxShadow}
        hasBorder={hasBorder}
        border={border}
        padding={padding}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
      />
    </Container>
  );
}
