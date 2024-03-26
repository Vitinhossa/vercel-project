import styled from 'styled-components';
import { colors } from '@/utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: ${colors.cinzaLight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10px;
`;
