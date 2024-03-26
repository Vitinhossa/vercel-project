import styled from 'styled-components';

interface IFlexCon {
  backgroundColor?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  borderTop?: string;
  borderBottom?: string;
}
const FlexCon = styled.div<IFlexCon>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
`;

export { FlexCon };
