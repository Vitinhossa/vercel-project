import { CSSProperties, ReactNode } from 'react';
import { Container } from './style';

interface IPaddingContainer {
  children?: ReactNode;
  padding?: string;
  minHeight?: string;
  style?: CSSProperties;
}

export default function PaddingContainer({
  children,
  padding,
  minHeight,
  style,
}: IPaddingContainer) {
  return (
    <Container minHeight={minHeight} padding={padding} style={style}>
      {children}
    </Container>
  );
}
