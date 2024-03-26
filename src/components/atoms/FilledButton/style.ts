import styled from 'styled-components';
import { fontSizes, fontWeight } from '../../../utils/fonts';

interface IFilledButton {
  textColor?: string;
  bgColor1?: string;
  bgColor2?: string;
  borderRounded?: boolean;
  roundedSize?: string;
  width?: string;
  height?: string;
  margin?: string;
  hasBoxShadow?: string;
  border?: string;
  hasBorder?: boolean;
  padding?: string;
  fontWeight?: string;
  fontFamily?: string;
}

const CustomButton = styled.button<IFilledButton>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  padding: ${(props) => props.padding || `10px 0`};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.bgColor2
      ? `linear-gradient(to right, ${props.bgColor1},  ${props.bgColor2})`
      : props.bgColor1 || `transparent`};
  color: ${(props) => props.textColor};
  border-radius: ${(props) =>
    props.borderRounded ? `${props.roundedSize || `5px`}` : `0`};
  border: ${(props) => (props.hasBorder ? props.border : `none`)};
  font-size: ${fontSizes.small14};
  font-weight: ${(props) => props.fontWeight || fontWeight.bold};
  margin: ${(props) => props.margin};
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: ${(props) => props.hasBoxShadow};
  font-family: ${(props) => props.fontFamily};
  &:hover {
    transform: scale(1.02);
  }
`;

export { CustomButton };
