import styled, { keyframes } from 'styled-components';

const translate = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 0%;
  }
`;

interface IFlexContainer {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  marginTop?: string;
}

const ModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  left: 0;
  background-color: ${({ theme: { colors } }) => colors.branco};
  border-radius: 10px;
  padding: 40px 25px;
  z-index: 9998;
  @media screen and (max-width: 599px) {
    border-radius: 0px;
    height: 100vh;
  }
  bottom: -100%;
  animation-name: ${translate};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const IconButton = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme: { colors } }) => colors.seletoVerde};
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    transform: scale(0.9);
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
`;

export { ModalContainer, IconButton, TitleContainer, FlexContainer };
