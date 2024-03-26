import styled from 'styled-components';

interface IFlexContainer {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  marginTop?: string;
  bgColor?: string;
  height?: string;
}

const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height};
`;

export { FlexContainer };
