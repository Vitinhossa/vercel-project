import styled from 'styled-components';

interface IContainer {
  padding?: string;
  minHeight?: string;
}

const Container = styled.div<IContainer>`
  width: 100%;
  min-height: ${(props) => props.minHeight || `unset`};
  padding: ${(props) => props.padding || `0px 30px`};
  position: relative;
`;

export { Container };
