import styled from 'styled-components';
import { colors } from '@/utils/colors';

const Content = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.cinzaLight};
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

export { Content, TypesContainer, DateContainer, Date };
