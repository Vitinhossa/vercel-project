import { colors } from '@/utils/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSection = styled.div`
  margin: 20px;

  h2 {
    margin: 40px 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
`;

export const BottomSection = styled.div`
  button {
    margin: 20px 24px;
  }
`;

export const SecurityData = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  p {
    margin-left: 8px;
    font-size: 16px;
    line-height: 140%;

    span {
      font-weight: bold;
    }
  }
`;

export const List = styled.div`
  margin: 24px 0;
  padding: 20px;
  border-top: 1px solid ${colors.cinzaLight};
  border-bottom: 1px solid ${colors.cinzaLight};
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img``;
