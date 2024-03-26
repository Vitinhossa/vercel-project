import { ReactNode } from 'react';
import { Container } from './style';

interface IContentContainer {
  children?: ReactNode;
  backgroundColor?: string;
}

export default function ContentContainer({
  children,
  backgroundColor,
}: IContentContainer) {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
}
