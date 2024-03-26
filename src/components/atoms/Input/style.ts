import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontSizes, fontFamily } from '@/utils/fonts';

// Input Container
interface IContainer {
  width?: string;
  margin?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

const InputContainer = styled.div<IContainer>`
  width: ${(props) => props.width || `100%`};
  height: fit-content;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || `column`};
  justify-content: ${(props) => props.justifyContent || `center`};
  align-items: ${(props) => props.alignItems};
  position: relative;
  margin: ${(props) => props.margin};
`;

// Input Element
interface ICustomInput {
  fontColor?: string;
  placeholderColor?: string;
  height?: string;
  hasIcon?: boolean;
  padding?: string;
}
const CustomInput = styled.input<ICustomInput>`
  width: 100%;
  height: ${(props) => props.height || `52px`};
  border: none;
  border-bottom: 1px solid ${colors.cinzaLightMedium};
  color: ${colors.cinzaMediumDark};
  font-size: ${fontSizes.medium17};
  font-family: ${fontFamily.roboto};
  transition: all 0.3s;
  padding: ${(props) => {
    if (props.hasIcon) {
      return `14px 40px 14px 16px`;
    }

    if (props.padding) {
      return props.padding;
    }

    return `14px 0`;
  }};
  outline: none;
  background-color: transparent;
  &:focus {
    border-color: ${colors.verdeLight};
    transition: all 0.3s;
  }
  ::placeholder {
    color: ${(props) => props.placeholderColor || colors.cinzaLightMedium};
    font-size: ${fontSizes.medium17};
  }
`;

const CustomSecondInput = styled.input<ICustomInput>`
  width: 100%;
  height: ${(props) => props.height || `52px`};
  border: none;
  color: ${colors.cinzaMediumDark};
  font-size: ${fontSizes.xLarge20};
  font-family: ${fontFamily.roboto};
  padding: ${(props) => (props.hasIcon ? `14px 40px 14px 16px` : `14px 16px`)};
  outline: none;
  background-color: transparent;
  ::placeholder {
    color: ${(props) => props.placeholderColor || colors.cinzaLightMedium};
    font-size: ${fontSizes.medium17};
  }
`;

// Input Label
interface ILabel {
  fontColor?: string;
  labelMargin?: string;
}
const Label = styled.label<ILabel>`
  color: ${colors.cinzaMediumDark};
  font-size: ${fontSizes.medium17};
  font-family: ${fontFamily.roboto};
  margin: ${(props) => (props.labelMargin ? props.labelMargin : `0 0 8px 0`)};
`;

// Input Description
interface IDescription {
  fontColor?: string;
  textPosition?: string;
}
const Description = styled.p<IDescription>`
  color: ${(props) => props.fontColor || colors.cinzaLightDark};
  font-size: ${fontSizes.small14};
  margin-top: 8px;
  display: flex;
  justify-content: ${(props) => props.textPosition};
`;

interface IIcon {
  color?: string;
}

// Input Icon
const Icon = styled.i<IIcon>`
  display: flex;
  position: absolute;
  right: 20px;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  color: ${(props) => props.color || colors.cinzaLightMedium};
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
`;

const IconComp = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
`;

// Input + Icon Container
const InputIcon = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export {
  CustomInput,
  Label,
  InputContainer,
  Description,
  Icon,
  InputIcon,
  IconComp,
  CustomSecondInput,
};
