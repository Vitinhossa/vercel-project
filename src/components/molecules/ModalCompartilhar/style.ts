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

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 9990;
  top: 0;
  animation-name: ${fade};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
`;

export const BlackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: -1;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  background-color: #e9e9e9;
  border-radius: 30px 30px 0 0;

  position: absolute;
  bottom: -100%;
  left: 0;

  animation-name: ${translate};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;

  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
  position: relative;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  transition: 0.4s;
  color: #7c8083;
  background-color: rgba(124, 128, 131, 0.1);
  width: 25px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  &:hover {
    color: ${colors.verdeLight};
  }
`;

export const BoxItem = styled.div`
  margin-top: 20px;
  background-color: #ffff;
  border-radius: 10px;
  padding: 13px 9px 13px 18px;
  display: flex;
  justify-content: space-between;
`;

export const BoxLogo = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 10px;

  img {
    width: 70%;
  }
`;

export const Header = styled.div`
  padding: 20px 0 15px 20px;
  display: flex;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 25px 70px;
`;
