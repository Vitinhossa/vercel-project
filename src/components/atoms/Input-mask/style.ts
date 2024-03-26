import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';

interface IMarginBottom {
  margin?: string;
}

const MarginBottom = styled.div<IMarginBottom>`
  margin: ${(props) => props.margin};
  width: 100%;
`;

interface IInputMask {
  margin?: string;
  height?: string;
}

const InputMaskStyle = styled(InputMask)<IInputMask>`
  width: 100%;
  height: ${(props) => props.height || `50px`};
  /* border-radius: 4px; */
  border: none;
  font-size: 16px;
  transition: all 0.3s;
  padding: 15px 20px 15px 0;
  outline: none;
  margin: ${(props) => props.margin};
  border-bottom: 2px solid ${colors.cinzaLightMedium};
  color: ${colors.cinzaMediumDark};
  &:focus {
    border-color: ${colors.verdeLight};
    transition: all 0.3s;
  }
  &::placeholder {
    color: ${colors.cinzaLightMedium};
    font-size: 16px;
  }
`;

interface ILabel {
  fontColor?: string;
  margin?: string;
}

const Label = styled.label<ILabel>`
  color: ${(props) => props.fontColor || colors.cinzaMediumDark};
  font-size: ${fontSizes.medium17};
  margin: ${(props) => props.margin};
  font-family: 'Roboto';
`;

export { MarginBottom, InputMaskStyle, Label };
