import styled from 'styled-components';
import { colors } from '@/utils/colors';

const PinInputContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
`;

interface IInput {
  codeIsVisible?: boolean;
  inputStatus?: string;
  hasContent?: boolean;
}

const Input = styled.input<IInput>`
  position: relative;
  opacity: 1;
  background-color: transparent;
  padding: 16px 10px;
  width: 100%;
  z-index: 2;
  color: ${(props) =>
    props.codeIsVisible ? colors.cinzaLightDark : `transparent`};
  outline: none;

  border: none;
  border-bottom: 1px solid ${colors.cinzaLightMedium};

  border-color: ${(props) =>
    props.hasContent ? colors.verdeLight : colors.cinzaLightMedium};
  &:focus {
    border-color: ${colors.verdeLight};
    transition: all 0.3s;
  }
  &::placeholder {
    color: ${colors.cinzaLightMedium};
    font-size: 16px;
  }
`;

interface IPinContainer {
  codeIsVisible?: boolean;
}

const PinContainer = styled.div<IPinContainer>`
  width: 100%;
  align-items: center;
  padding-left: 15px;
  position: absolute;

  display: ${(props) => (props.codeIsVisible ? `none` : `flex`)};
`;

interface ICustomPinInput {
  isFilled: boolean;
  inputInFocus?: boolean;
  isError?: boolean;
}

const CustomPinInput = styled.div<ICustomPinInput>`
  width: 16px;
  height: 16px;
  border: 1px solid
    ${(props) =>
      props.isFilled || props.inputInFocus
        ? colors.verdeMedium
        : colors.cinzaLightMedium};
  border-radius: 50px;
  margin-right: 6px;
  &:last-of-type {
    margin-right: 0;
  }
  border-color: ${(props) => {
    if (props.isFilled) {
      if (props.isError) {
        return `red`;
      }
      return colors.verdeMedium;
    }
    if (props.inputInFocus) {
      return colors.verdeMedium;
    }
    return colors.cinzaLightMedium;
  }};
  background-color: ${(props) => {
    if (props.isFilled) {
      if (props.isError) {
        return `red`;
      }
      return colors.verdeMedium;
    }
    return `transparent`;
  }};
`;

const IconContainer = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export {
  PinInputContainer,
  Input,
  CustomPinInput,
  PinContainer,
  IconContainer,
};
