import styled from 'styled-components';
import { colors } from '@/utils/colors';

const List = styled.ul`
  width: 100%;
  list-style: none;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 40px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ListHead = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const ListHeadImage = styled.div`
  width: 53px;
  height: 53px;
  margin-right: 12px;
  border-radius: 50px;
  background-color: ${colors.verdeLight};
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyContent = styled.div`
  width: 100%;
`;

const MainContent = styled.div`
  margin: 6px 0 20px;
`;

export {
  List,
  ListItem,
  ListHead,
  ListHeadImage,
  InfoContent,
  BodyContent,
  MainContent,
};
