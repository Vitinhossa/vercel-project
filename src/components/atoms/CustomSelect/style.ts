import styled from 'styled-components';

interface ISelectContainer {
  height?: string;
  background?: string;
  hasBorder?: boolean;
  isSelected?: boolean;
}

const SelectContainer = styled.div<ISelectContainer>`
  width: 100%;
  height: ${(props) => props.height || `52px`};
  background-color: ${({ theme: { colors }, ...props }) =>
    props.background || colors.branco};
  border-bottom: 1px solid #adb5bd;
  margin-top: 23px;
  position: relative;
  z-index: 1;
`;

const ClickToClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const SelectElement = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: transparent;
`;

interface ICustomSelectElement {
  isDefault?: boolean;
  background?: string;
}

const CustomSelectElement = styled.div<ICustomSelectElement>`
  width: 100%;
  height: 100%;
  padding: 16px 0;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  background-color: ${({ theme: { colors }, ...props }) =>
    props.background || colors.branco};
  border-radius: 4px;
  p {
    color: ${({ theme: { colors }, ...props }) =>
      props.isDefault ? colors.cinzaEx : colors.preto};
  }
`;

interface IOptionsContainer {
  isVisible: boolean;
}

const OptionsContainer = styled.div<IOptionsContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 54px;
  width: 100%;
  transition: all 0.1s linear;
  opacity: ${(props) => (props.isVisible ? `1` : `0`)};
  z-index: 0;
  max-height: 155px;
  height: ${(props) => (props.isVisible ? `fit-content` : `5px`)};
  overflow: ${(props) => (props.isVisible ? `auto` : `hidden`)};
  border-radius: 0 0 4px 4px;
  border: ${({ theme: { colors } }) => `1px solid ${colors.cinzaEx}`};
`;

const Value = styled.p``;

interface IOption {
  isSelected?: boolean;
}

const Option = styled.button<IOption>`
  min-height: 76px;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.branco};
  border: none;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.verdeClaro};
  font-size: 16px;
  font-weight: bold;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  outline: none;
  color: ${({ theme: { colors }, ...props }) =>
    props.isSelected ? colors.verdeLink : colors.preto};
  &:last-of-type {
    border-bottom: none;
  }
`;

// Select Label
interface ILabel {
  fontColor?: string;
}
const Label = styled.label<ILabel>`
  color: ${({ theme: { colors }, ...props }) =>
    props.fontColor || colors.label};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small14};
  position: absolute;
  top: -27px;
`;

export {
  SelectContainer,
  SelectElement,
  CustomSelectElement,
  OptionsContainer,
  Value,
  Option,
  ClickToClose,
  Label,
};
