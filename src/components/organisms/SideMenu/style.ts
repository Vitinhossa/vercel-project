import styled, { keyframes } from 'styled-components';
import { colors } from '@/utils/colors';

interface IMenuOpenContainer {
  isVisible?: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;


const MenuOpenContainer = styled.div<IMenuOpenContainer>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isVisible ? '0' : '-300px')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(204, 204, 204, 0.7);
  z-index: 20;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.3s;
  visibility: ${(props) => (props.isVisible ? `visible` : `hidden`)};
  animation: ${(props) => (props.isVisible ? slideIn : slideOut)} 0.3s forwards;
`;

interface IMenuOverlay {
  isVisible?: boolean;
}

const MenuOverlay = styled.div<IMenuOverlay>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-width: 335px;
  border-radius: 12px 0px 0px 12px;
  background-color: ${colors.branco};
  box-shadow: 0 0 6px 0 rgba(188, 188, 188, 0.9);
  visibility: ${(props) => (props.isVisible ? `visible` : `hidden`)};
  @media (max-width: 425px) {
    max-width: calc(100% - 10%);
  }
`;

export { MenuOpenContainer, MenuOverlay};
