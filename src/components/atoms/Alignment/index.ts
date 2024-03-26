import styled from 'styled-components';

interface IAlignment {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string
}

const TextAlign = styled.div<IAlignment>`
  text-align: ${(props) => props.align};
  width: 100%;
`;

const DisplayFlex = styled.div<IAlignment>`
  display: flex;
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
`;

export { TextAlign, DisplayFlex };
