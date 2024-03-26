import styled, { keyframes } from 'styled-components';

const fading = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Fade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  @media screen and (max-width: 600px) {
    border-radius: 10px;
  }

  animation-name: ${fading};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

export { Fade };
