import styled from 'styled-components';

interface IContainer {
  width?: string;
  height?: string;
  margin?: string;
}

const Container = styled.div<IContainer>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin};
`;

export { Container };
