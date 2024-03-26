import { colors } from '@/utils/colors';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20px 0 70px;
`;

export const Heading = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  color: ${colors.black};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 16px;
  color: ${colors.cinzaMedium};
`;

export const List = styled.ul`
  margin-left: 40px;
  margin-bottom: 16px;
`;

export const Item = styled.li`
  margin-bottom: 8px;
`;
