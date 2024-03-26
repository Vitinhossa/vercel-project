import styled from 'styled-components';
import { fontSizes, fontWeight } from '../../../utils/fonts';

interface IButton {
  textColor?: string;
  position?: string;
  left?: string;
  top?: string;
  marginBottom?: string;
  width?: string;
}

const Button = styled.div<IButton>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.textColor || `#000000`};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.large18};
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  position: ${(props) => props.position};
  left: ${(props) => props.left || `32px`};
  top: ${(props) => props.top};
  margin-bottom: ${(props) => props.marginBottom || `25px`};
  width: ${(props) => props.width || `100%`};
  transition: transform 0.3s;

  @media (min-width: 600px) {
    &:hover {
      transform: scale(1.08);
    }
  }
`;

export { Button };
