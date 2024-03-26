import { HeadingTwo } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { fontWeight, fontSizes } from '@/utils/fonts';
import { HeadContainer, IconContainer, Icon } from './style';

interface IHeadTitleBtn {
  text?: string;
  textColor?: string;

  hasIcon?: boolean;
  iconName?: string;
  iconColor?: string;

  iconAction?: (e: string) => void;
  isList?: boolean;
}
export default function HeadTitleBtn({
  text,
  textColor,
  hasIcon,
  iconAction,
  isList,
}: IHeadTitleBtn) {
  return (
    <HeadContainer>
      <HeadingTwo
        color={textColor || colors.verdeDark}
        fontWeight={fontWeight.bold}
        fontSize={fontSizes.medium17}
        lineHeight="24px"
      >
        {text}
      </HeadingTwo>
      {hasIcon && (
        <IconContainer>
          <Icon
            isSelected={!!isList}
            onClick={() => (iconAction ? iconAction(`list`) : {})}
          >
            <i
              className="icon-hamburger-menu"
              style={{
                color: isList ? colors.verdeDark : colors.cinzaLightMedium,
                lineHeight: `10px`,
                fontSize: `15px`,
              }}
            />
          </Icon>
          <Icon
            isSelected={!isList}
            onClick={() => (iconAction ? iconAction(`grid`) : {})}
          >
            <i
              className="icon-menu"
              style={{
                color: !isList ? colors.verdeDark : colors.cinzaLightMedium,
                lineHeight: `10px`,
                fontSize: `13px`,
              }}
            />
          </Icon>
        </IconContainer>
      )}
    </HeadContainer>
  );
}
