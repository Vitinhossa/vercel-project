import Image from 'next/image';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';
import {
  CardBtnContainer,
  TextContainer,
  IconContainer,
  LineIconContainer,
} from './style';
import { HeadingTwo, Paragraph } from '../../atoms/Text';

interface ICardButton {
  iconPath?: string;
  iconComp?: any;
  title?: string;
  subtitle?: string;

  bgColor1?: string;
  bgColor2?: string;
  url?: string;

  maxHeight?: string;
  maxWidth?: string;
  height?: string;
  width?: string;
  inLineView?: boolean;
  isLightView?: boolean;
}
export default function CardButton({
  subtitle,
  title,
  bgColor1,
  bgColor2,
  iconPath = ``,
  iconComp,
  url,
  maxWidth,
  maxHeight,
  height,
  width,
  inLineView = false,
  isLightView = false,
}: ICardButton) {
  const router = useRouter();
  return (
    <CardBtnContainer
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      height={height}
      width={width}
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      onClick={() => (url ? router.push(url) : {})}
      inLineView={inLineView}
      isLightView={isLightView}
    >
      <IconContainer inLineView={inLineView} isLightView={isLightView}>
        {iconPath && (
          <Image src={iconPath} width="100%" height="100%" alt={title} />
        )}
        {iconComp && iconComp()}
      </IconContainer>
      <TextContainer inLineView={inLineView}>
        <HeadingTwo
          color={isLightView ? colors.cinzaMediumDark : colors.branco}
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.small14}
          lineHeight="1rem"
          margin="0 0 4px 0"
        >
          {title}
        </HeadingTwo>
        <Paragraph
          fontColor={isLightView ? colors.cinzaMediumDark : colors.branco}
          fontSize={fontSizes.xSmall10}
        >
          {subtitle}
        </Paragraph>
      </TextContainer>

      {inLineView && (
        <LineIconContainer>
          <i
            className="icon-chevron-right"
            style={{
              color: isLightView ? colors.cinzaMediumDark : colors.branco,
            }}
          />
        </LineIconContainer>
      )}
    </CardBtnContainer>
  );
}
