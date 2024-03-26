import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';
import styled, { keyframes } from 'styled-components';

const fading = (finalWidth: string) => keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${finalWidth};
  }
`;

interface IInputContainer {
  width?: string;
  height?: string;
  margin?: string;
  hasAnim?: boolean;
}
const InputContainer = styled.div<IInputContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `40px`};
  margin: ${(props) => props.margin};

  animation-name: ${(props) =>
    props.hasAnim ? fading(props.width || ``) : ``};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

interface IInput {
  bgColor?: string;
  placeholderColor?: string;
  textColor?: string;
  fontSize?: string;
  radius?: string;
  borderBottom?: boolean
}
const Input = styled.input<IInput>`
  color: ${(props) => props.textColor || colors.cinzaMediumDark};
  font-size: ${(props) => props.fontSize || fontSizes.small15};
  background-color: ${(props) => props.bgColor || colors.cinzaLight};
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: ${(props) => props.borderBottom ? '1px solid #CBCBCB' : 'none'}; ;
  outline: none;
  border-radius: ${(props) => props.radius || '80px'};
  padding: 4px 30px 4px 20px;
  display: flex;
  align-items: center;

  ::placeholder {
    color: ${(props) => props.placeholderColor || colors.cinzaLightDark};
    font-size: ${fontSizes.xSmall12};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  width: 17px;
  height: 17px;
`;
export { InputContainer, Input, IconContainer };
