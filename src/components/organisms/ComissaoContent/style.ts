import styled from 'styled-components';
// import { colors } from '@/utils/colors';

const List = styled.ul`
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
  min-height: 152px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TitleContainer = styled.div``;

interface ICardContainer {
  color?: string;
}
const CardContainer = styled.div<ICardContainer>`
  width: 60%;
  background-color: ${(props) => props.color};
  height: 50px;
  margin-top: 30px;
  transform: rotate(-8deg);
`;

export { List, ListItem, Content, TitleContainer, CardContainer };
