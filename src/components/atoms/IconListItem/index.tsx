import Image from 'next/image';
import { colors } from '@/utils/colors';
import { fontWeight, fontSizes } from '@/utils/fonts';
import { Paragraph, HeadingTwo } from '../Text';
import { ItemContainer, TextContainer, ImageContainer } from './style';

interface IIconListItem {
  imageUrl?: string;
  iconName?: string;
  title?: string;
  subtitle?: string;
  action?: () => void;
  hasArrow?: boolean;
  imageSize?: string;
  isImageComponent?: any;
}

export default function IconListItem({
  imageUrl = ``,
  iconName,
  title,
  subtitle,
  action,
  imageSize,
  isImageComponent,
  hasArrow = false,
}: IIconListItem) {
  return (
    <ItemContainer onClick={action}>
      {!isImageComponent && imageUrl && (
        <ImageContainer imageSize={imageSize}>
          <Image
            width={imageSize || 40}
            height={imageSize || 40}
            src={imageUrl}
            alt={title}
          />
        </ImageContainer>
      )}
      {isImageComponent && (
        <ImageContainer imageSize={imageSize} style={{ marginLeft: `-4px` }}>
          {isImageComponent()}
        </ImageContainer>
      )}

      {iconName && (
        <i
          className={iconName}
          style={{
            fontSize: `27.5px`,
            color: colors.cinzaMedium,
            marginRight: `13px`,
            lineHeight: `20px`,
          }}
        />
      )}
      <TextContainer>
        <HeadingTwo
          color={colors.black}
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.small14}
        >
          {title}
        </HeadingTwo>
        <Paragraph color={colors.cinzaLightDark} fontSize={fontSizes.xSmall12}>
          {subtitle}
        </Paragraph>
      </TextContainer>
      {hasArrow && (
        <i
          className="icon-chevron-right"
          style={{
            position: `absolute`,
            right: `2px`,
            fontSize: `12px`,
            lineHeight: `9px`,
            color: colors.cinzaMedium,
          }}
        />
      )}
    </ItemContainer>
  );
}
