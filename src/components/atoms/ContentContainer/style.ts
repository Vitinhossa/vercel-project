import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IContainer {
  backgroundColor?: string;
}
const Container = styled.div<IContainer>`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${(props) => props.backgroundColor || colors.branco};
  position: relative;
`;

export { Container };
