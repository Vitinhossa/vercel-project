import { Button } from './style';

interface IBackButton {
  buttonText?: string;
  position?: string;
  left?: string;
  top?: string;
  textColor?: string;
  icon?: string;
  clicked?: () => any;
  isWhite?: boolean;
  isX?: boolean;
  marginBottom?: string;
  width?: string;
}

export default function BackButton({
  buttonText,
  textColor,
  position,
  left,
  top,
  clicked,
  isWhite = false,
  isX = false,
  marginBottom,
  width,
}: IBackButton) {
  const shouldRenderArrowLeft = () =>
    isWhite ? (
      <i
        className="icon-arrow-left"
        style={{ fontSize: `19px`, lineHeight: `15px`, color: `white` }}
      />
    ) : (
      <i
        className="icon-arrow-left"
        style={{ fontSize: `19px`, lineHeight: `15px`, color: textColor }}
      />
    );

  const shouldRenderIsX = () =>
    isX && (
      <i className="icon-x" style={{ fontSize: `16px`, color: `#212926` }} />
    );

  const shouldRenderIsXOrArrowLeft = () =>
    isX ? shouldRenderIsX() : shouldRenderArrowLeft();

  return (
    <Button
      onClick={clicked}
      textColor={textColor}
      position={position}
      left={left}
      top={top}
      width={width}
      marginBottom={marginBottom}
    >
      {shouldRenderIsXOrArrowLeft()}

      {/* <ButtonIcon /> */}
      {buttonText}
    </Button>
  );
}
