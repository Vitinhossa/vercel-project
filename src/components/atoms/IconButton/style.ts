import styled from 'styled-components';

interface IButtonContainer {
  bgColor?: string;
  isCircle?: boolean;
  height?: string;
  width?: string;
  margin?: string;
}

const ButtonContainer = styled.button<IButtonContainer>`
  width: ${(props) => props.width || `fit-content`};
  height: ${(props) => props.height || `fit-content`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.isCircle ? `50px` : `0px`)};
  background-color: ${(props) => props.bgColor || `transparent`};
  border: none;
  margin: ${(props) => props.margin};
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export { ButtonContainer };
