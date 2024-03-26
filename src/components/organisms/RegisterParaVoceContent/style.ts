import styled, { css } from 'styled-components';

interface IFlexContainer {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  marginTop?: string;
}

interface Props {
  showOverflow: boolean;
}

export const ContainerNullish = styled.div<Props>`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;

  ${({ showOverflow }) => !showOverflow && css`
    overflow: hidden;
  `}

  @media (min-width: 600px) {
    height: 100%;
  }
`;

export const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.8);
`;

export const ModalContent = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.branco};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 54px 20px 20px;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 16px;
    line-height: 140%;
    margin-top: 8px;
  }

  button {
    margin-top: 40px;

    &:last-of-type {
      margin-top: 16px;
    }
  }
`;

export const ModalImage = styled.img`
  margin-bottom: 40px;
`;
