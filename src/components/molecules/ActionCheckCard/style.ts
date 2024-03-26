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
`;

interface IIconContainer {
  margin?: string;
  bgColorIcon?: string;
}

const IconContainer = styled.div<IIconContainer>`
  margin: ${(props) => props.margin || `0px`};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.bgColorIcon || `#b7b7b7`};
`;

export { Container, IconContainer };
