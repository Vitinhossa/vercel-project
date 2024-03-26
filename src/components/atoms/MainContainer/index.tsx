import { ReactNode } from 'react';
import { Container } from './style';

interface IMainContainer {
  children?: ReactNode;
}

export default function MainContainer({ children }: IMainContainer) {
  return <Container>{children}</Container>;
}
