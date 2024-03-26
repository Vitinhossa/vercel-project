/* eslint-disable @next/next/no-img-element */
import { Container, IconContainer } from './style';
import { Paragraph } from '../../atoms/Text';

interface IActionIconCard {
  iconName?: string;
  iconColor?: string;
  iconSize?: string;
  iconInEnd?: boolean;
  iconMargin?: string;
  iconBorder?: string;
  iconBorderRadius?: string;
  bgIconColor?: string;

  svg?: string;

  title?: string;
  titleSize?: string;
  titleColor?: string;
  titleWeight?: string;

  containerMargin?: string;
  padding?: string;
  height?: string;
  background?: string;
  hasShadow?: boolean;
  action?: () => any;
}
export default function ActionCheckCard({
  iconName,
  iconColor,
  iconSize,
  iconMargin,
  iconBorder,
  iconBorderRadius,
  title,
  titleColor,
  titleSize,
  titleWeight,
  containerMargin,
  padding,
  height,
  background,
  hasShadow,
  action,
  bgIconColor,
}: IActionIconCard) {
  return (
    <Container
      onClick={action}
      margin={containerMargin}
      padding={padding}
      height={height}
      iconInEnd
      background={background}
      hasShadow={hasShadow}
    >
      <IconContainer margin={iconMargin} bgColorIcon={bgIconColor}>
        {iconName && (
          <i
            className={iconName}
            style={{
              fontSize: iconSize,
              color: iconColor,
              border: iconBorder,
              borderRadius: iconBorderRadius,
              lineHeight: `10px`,
            }}
          />
        )}
      </IconContainer>
      <Paragraph
        color={titleColor}
        fontSize={titleSize}
        fontWeight={titleWeight}
      >
        {title}
      </Paragraph>
    </Container>
  );
}
