/* eslint-disable no-shadow */
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../utils/colors';

const translate = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 0%;
  }
`;
const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 9990;
  /* bottom: -100%; */
  top: 0;
  animation-name: ${fade};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  /* animation-direction: alternate; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
`;

const BlackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: -1;
`;

interface IModalContainer {
  padding?: string;
}

const ModalContainer = styled.div<IModalContainer>`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.branco};
  border-radius: 30px 30px 0 0;
  padding: ${(props) => props.padding || `40px 25px 70px`};

  position: absolute;
  bottom: -100%;
  left: 0;

  animation-name: ${translate};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;

  box-sizing: border-box;
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
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  transition: 0.4s;
  color: #575656;
  &:hover {
    color: ${colors.verdeLight};
  }
`;

export {
  ModalContainer,
  FlexContainer,
  TitleContainer,
  BlackContainer,
  WrapperContainer,
  CloseBtn,
};
