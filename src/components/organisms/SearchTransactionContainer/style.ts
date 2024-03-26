import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.branco};
  z-index: 9999;
`;

export const Content = styled.div`
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #fff;
`;
