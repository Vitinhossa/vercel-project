import { ButtonContainer } from './style';

interface IIconButton {
  iconName?: string;
  iconColor?: string;
  bgColor?: string;
  circle?: boolean;
  iconSize?: string;
  width?: string;
  height?: string;
  action?: () => any;
  iconComp?: any;
  margin?: string;
}

export default function IconButton({
  iconName,
  iconColor,
  bgColor,
  circle,
  iconSize,
  width,
  height,
  action,
  margin,
  iconComp,
}: IIconButton) {
  return (
    <ButtonContainer
      bgColor={bgColor}
      isCircle={circle}
      width={width}
      height={height}
      onClick={action}
      margin={margin}
    >
      {iconComp && iconComp()}
      <i
        className={iconName}
        style={{
          color: `${iconColor}`,
          fontSize: `${iconSize || `18px`}`,
          lineHeight: `10px`,
        }}
      />
    </ButtonContainer>
  );
}
