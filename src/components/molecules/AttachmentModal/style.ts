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

const WrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  z-index: 9998;
  bottom: -100%;
  animation-name: ${translate};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
`;

const BlackContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
`;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.branco};
  border-radius: 30px 30px 0 0;
  padding: 40px 25px;
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

export {
  ModalContainer,
  FlexContainer,
  TitleContainer,
  BlackContainer,
  WrapperContainer,
};
