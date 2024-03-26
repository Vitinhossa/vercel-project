import {
  LinkContainer,
  ItemTextBox,
  ItemTitle,
  ItemSubtitle,
  ItemIconContainer,
} from './style';

interface IMenuListItem {
  itemHeight?: string;
  hasBorderBottom?: boolean;

  title: string;
  subtitle?: string;
  action?: () => void;

  titleColor?: string;
  subtitleColor?: string;

  titleSize?: string;

  iconName?: string;
  iconColor?: string;

  titleInCenter?: boolean;
  // iconDirection?: string;
}

export default function MenuListItem({
  itemHeight,
  hasBorderBottom = false,
  title = ``,
  subtitle = ``,
  titleColor,
  subtitleColor,
  iconName,
  iconColor,
  titleSize,
  action,
  titleInCenter = false,
}: // iconDirection
IMenuListItem) {
  return (
    <LinkContainer
      height={itemHeight}
      hasBorderBottom={hasBorderBottom}
      onClick={action}
      titleInCenter={titleInCenter}
    >
      <ItemTextBox>
        <ItemTitle textSize={titleSize} textColor={titleColor}>
          {title}
        </ItemTitle>
        {subtitle && (
          <ItemSubtitle textColor={subtitleColor}> {subtitle} </ItemSubtitle>
        )}
      </ItemTextBox>
      <ItemIconContainer>
        <i style={{ color: iconColor }} className={iconName} />
      </ItemIconContainer>
    </LinkContainer>
  );
}
