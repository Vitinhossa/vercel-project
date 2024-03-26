import styled from 'styled-components';

interface BadgeProps {
  selected?: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.70);
  z-index: 9999;
`;

export const Content = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
  height: 90%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.branco};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 20px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.cinzaLight};

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const Icon = styled.i`
  color: #35A936;
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Badge = styled.p<BadgeProps>`
  margin-top: 16px;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 50px;
  font-weight: 500;
  border: 1px solid ${({ selected, theme: { colors } }) => selected ? colors.verdeDark : colors.cinzaLight};
  background-color: ${({ selected, theme: { colors } }) => selected ? '#DFF8EE' : colors.cinzaLight};
  cursor: pointer;
`;

export const Filters = styled.div`
  margin: 0 20px 40px 20px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
`;


export const Section = styled.div`
  margin: 0 20px;
`;
