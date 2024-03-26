/* eslint-disable @next/next/no-img-element */
import { Container, IconContainer, TextContainer } from './style';
import { Paragraph } from '../../atoms/Text';

interface IActionIconCard {
  iconName?: string;
  iconColor?: string;
  iconSize?: string;
  iconInEnd?: boolean;
  iconMargin?: string;
  iconBorder?: string;
  iconBorderRadius?: string;
  iconPadding?: string;
  iconHeight?: string;
  iconWidth?: string;
  iconLineHeight?: string;

  svg?: string;

  title?: string;
  titleSize?: string;
  titleColor?: string;
  titleWeight?: string;

  subtitle?: string;
  subtitleSize?: string;
  subtitleColor?: string;
  subtitleWeight?: string;

  containerMargin?: string;
  padding?: string;
  height?: string;
  background?: string;
  hasShadow?: boolean;
  action?: () => any;
}
export default function ActionIconCard({
  iconName,
  iconColor,
  iconInEnd,
  iconSize,
  iconMargin,
  iconBorder,
  iconBorderRadius,
  iconPadding,
  iconHeight,
  iconWidth,
  title,
  titleColor,
  titleSize,
  titleWeight,
  containerMargin,
  padding,
  height,
  background,
  hasShadow,
  svg,
  action,
  subtitle,
  subtitleSize,
  subtitleColor,
  subtitleWeight,
}: IActionIconCard) {
  return (
    <Container
      onClick={action}
      margin={containerMargin}
      padding={padding}
      height={height}
      iconInEnd={iconInEnd}
      background={background}
      hasShadow={hasShadow}
    >
      <IconContainer margin={iconMargin} height={iconHeight} width={iconWidth}>
        {iconName ? (
          <i
            className={iconName}
            style={{
              fontSize: iconSize,
              color: iconColor,
              border: iconBorder,
              borderRadius: iconBorderRadius,
              padding: iconPadding,
              lineHeight: `0px`,
            }}
          />
        ) : (
          <img src={svg} alt={title} />
        )}
      </IconContainer>
      <TextContainer>
        <Paragraph
          color={titleColor}
          fontSize={titleSize}
          fontWeight={titleWeight}
        >
          {title}
        </Paragraph>
        <Paragraph
          color={subtitleColor}
          fontSize={subtitleSize}
          fontWeight={subtitleWeight}
        >
          {subtitle}
        </Paragraph>
      </TextContainer>
    </Container>
  );
}
