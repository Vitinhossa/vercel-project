import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IContainer {
  margin?: string;
}
const Container = styled.div<IContainer>`
  width: 100%;
  height: fit-content;
  margin: ${(props) => props.margin};
`;
const IconButton = styled.button`
  width: 28px;
  height: 28px;
  font-size: 21px;
  line-height: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${colors.cinzaLightDark};
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    transform: scale(0.9);
  }
`;

// const

export { Container, IconButton };
