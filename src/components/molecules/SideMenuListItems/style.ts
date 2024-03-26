import styled from 'styled-components';

interface IListItemsContainer {
  height?: string;
}
const ListItemsContainer = styled.div<IListItemsContainer>`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: ${(props) => props.height ? props.height : "100%"};
  margin-top: 25px;
  padding-right: 10px;
`;

export { ListItemsContainer };
