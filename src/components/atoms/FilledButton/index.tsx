import { CustomButton } from './style';

interface IFilledButton {
  text?: string;
  textColor?: string;
  bgColor1?: string;
  bgColor2?: string;
  borderRounded?: boolean;
  roundedSize?: string;
  action?: () => any;
  width?: string;
  height?: string;
  margin?: string;
  iconClassName?: string;
  iconSize?: string;
  iconColor?: string;
  iconLineHeight?: string;
  hasBoxShadow?: string;
  disabled?: boolean;
  hasBorder?: boolean;
  border?: string;
  padding?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export default function FilledButton({
  text = ``,
  textColor,
  bgColor1,
  bgColor2,
  roundedSize,
  borderRounded = true,
  width,
  height,
  margin,
  action,
  iconClassName,
  iconSize,
  iconColor,
  iconLineHeight,
  hasBoxShadow,
  hasBorder,
  border,
  padding,
  fontWeight,
  fontFamily,
  disabled,
}: IFilledButton) {
  return (
    <CustomButton
      onClick={action}
      textColor={textColor}
      bgColor1={bgColor1}
      bgColor2={bgColor2}
      borderRounded={borderRounded}
      roundedSize={roundedSize}
      width={width}
      height={height}
      margin={margin}
      hasBoxShadow={hasBoxShadow}
      hasBorder={hasBorder}
      border={border}
      padding={padding}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      disabled={disabled}
    >
      {text}
      {iconClassName && (
        <i
          className={iconClassName}
          style={{
            fontSize: iconSize || `15px`,
            color: iconColor || `#fff`,
            lineHeight: iconLineHeight || `13px`,
          }}
        />
      )}
    </CustomButton>
  );
}
