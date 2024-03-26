import styled from 'styled-components';
import { colors } from '@/utils/colors';

const List = styled.ul`
  flex-direction: column;
  list-style: none;
  width: 100%;
  display: flex;
`;

const ListItem = styled.li`
  width: 100%;
  padding: 23px 5px;
  border-bottom: 1px solid ${colors.cinzaLight};

  &:last-of-type {
    border-bottom: none;
  }
`;

const ImageTitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 14px;
`;
const ImageContainer = styled.div`
  width: 53px;
  height: 53px;
  /* background-color: ${colors.cinzaDark}; */
  margin: 0 10px 0 0;
  border-radius: 50px;
`;

export { List, ListItem, ImageContainer, ImageTitleContent };
