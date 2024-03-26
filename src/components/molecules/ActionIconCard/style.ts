import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IContainer {
  height?: string;
  iconInEnd?: boolean;
  padding?: string;
  margin?: string;
  background?: string;
  hasShadow?: boolean;
  borderRadius?: string;
}
const Container = styled.div<IContainer>`
  width: 100%;
  height: ${(props) => props.height || `100%`};
  display: flex;
  flex-direction: ${(props) => (props.iconInEnd ? `row-reverse` : `row`)};
  justify-content: ${(props) => (props.iconInEnd ? `space-between` : ``)};
  align-items: center;
  padding: ${(props) => props.padding || `22px 20px`};
  margin: ${(props) => props.margin || `0px`};
  background-color: ${(props) => props.background || colors.branco};
  box-shadow: ${(props) =>
    props.hasShadow ? `0 2px 6px rgba(0,0,0,0.2)` : ``};
  border-radius: ${(props) => props.borderRadius || `10px`};
  transition: transform 0.3s;

  @media (min-width: 600px) {
    &:hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  }
`;

interface IIconContainer {
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
}

const IconContainer = styled.div<IIconContainer>`
  margin: ${(props) => props.margin || `0px`};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export { Container, IconContainer, TextContainer };
