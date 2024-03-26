import { ReactNode } from 'react';
import { FlexCon } from './style';

interface IContainerFlex {
  children?: ReactNode;
  margin?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  borderTop?: string;
  borderBottom?: string;
  clicked?: any;
}

export default function ContentContainer({
  children,
  margin,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  width,
  height,
  bgColor,
  borderRadius,
  borderTop,
  borderBottom,
  clicked,
}: IContainerFlex) {
  return (
    <FlexCon
      margin={margin}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      width={width}
      height={height}
      bgColor={bgColor}
      borderRadius={borderRadius}
      borderTop={borderTop}
      borderBottom={borderBottom}
      onClick={clicked}
    >
      {children}
    </FlexCon>
  );
}
