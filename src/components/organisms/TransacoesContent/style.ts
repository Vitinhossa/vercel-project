import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 20px;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.cinzaLight};
  background: #fff;
  z-index: 999;

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ButtonWithIcon = styled.a`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  cursor: pointer;
`;

export const Icon = styled.img``;
