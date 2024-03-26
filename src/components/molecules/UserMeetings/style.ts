import styled from 'styled-components';

interface IContainer {
  width?: string;
  margin?: string;
}
const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.width || `100%`};
  margin-top: -60px;
  margin-bottom: 38px;
`;

interface IImageContainer {
  hasGreetings?: boolean;
}
const ImageContainer = styled.div<IImageContainer>`
  width: ${(props) => (props.hasGreetings ? `48px` : `55px`)};
  height: ${(props) => (props.hasGreetings ? `48px` : `55px`)};
  margin-right: 10px;
  border-radius: 9px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
`;

export { Container, ImageContainer, InfoContainer };
