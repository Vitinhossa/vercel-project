import styled, { keyframes } from 'styled-components';
import { colors } from '@/utils/colors';
import { fontFamily, fontSizes } from '@/utils/fonts';

interface IMainContainer {
  width?: string;
  bgColor?: string;
}

const MainContainer = styled.div<IMainContainer>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9999;
  display: flex;
  justify-content: center;
`;

interface IModal {
  width?: string;
  height?: string;
  bgColor?: string;
}

const translate = (height: string) => keyframes`
  from {
    bottom: -100%;
  }

  to {
    bottom: calc(50% - ${height} / 2);
  }
`;

const Modal = styled.div<IModal>`
  width: ${(props) => props.width || `232px`};
  height: ${(props) => props.height || `210px`};
  background-color: ${(props) => props.bgColor || colors.branco};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 14px;
  border-radius: 14px;
  z-index: 2;
  bottom: -100%;
  position: absolute;
  text-align: center;
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.medium16};
  line-height: 22px;

  animation-name: ${(props) => translate(props.height || `210px`)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const InputCode = styled.input`
  width: 88%;
  border: 1px solid #ccc;
  height: 39px;
  border-radius: 50px;
  text-align: center;
  font-size: 40px;
  outline: none;
  color: ${colors.cinzaLightMedium};

`;

export { Modal, MainContainer, InputCode };
