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

const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

interface IIconContainer {
  iconContainerColor?: string;
}

const IconContainer = styled.div<IIconContainer>`
  position: absolute;
  right: 10px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.iconContainerColor || colors.verdeFluor};
  border-radius: 50px;
`;

interface IInputMask {
  margin?: string;
  height?: string;
  hasIcon?: boolean;
}

const InputMaskStyle = styled(InputMask)<IInputMask>`
  width: 100%;
  height: ${(props) => props.height || `50px`};
  /* border-radius: 4px; */
  border: none;
  font-size: 16px;
  transition: all 0.3s;
  padding: ${(props) =>
    props.hasIcon ? `15px 25px 15px 0` : `15px 15px 15px 0`};
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

export { MarginBottom, InputMaskStyle, Label, InputContainer, IconContainer };
