import { colors } from '@/utils/colors';
import { fontSizes, fontFamily } from '@/utils/fonts';
import InputCode from '../../atoms/InputCode';
import { Paragraph } from '../../atoms/Text';
import { Container } from './style';

interface ICodeInputContainer {
  labelText?: string;
  hasEyeIcon?: boolean;
  getInputValue: (e: any) => any;
  inputLength?: number;
  margin?: string;
}

export default function CodeInputContainer({
  hasEyeIcon,
  labelText,
  getInputValue,
  inputLength,
  margin,
}: ICodeInputContainer) {
  return (
    <Container margin={margin}>
      {labelText && (
        <Paragraph
          fontColor={colors.cinzaMediumDark}
          fontSize={fontSizes.medium17}
          fontFamily={fontFamily.roboto}
        >
          {labelText}
        </Paragraph>
      )}
      <InputCode
        hasEyeButton={hasEyeIcon}
        getValue={(e) => getInputValue(e)}
        length={inputLength}
      />
    </Container>
  );
}
