import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IList {
  margin?: string;
}
const List = styled.ul<IList>`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};
`;

const ListItem = styled.li`
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${colors.cinzaLightMedium};
`;

const ItemHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 17px 0;
`;

interface IItemAnswer {
  isOpen?: boolean;
}

const ItemAnswer = styled.div<IItemAnswer>`
  padding: ${(props) => (props.isOpen ? `20px 20px` : `0px 20px`)};
  background-color: ${colors.cinzaLight};
  transition: all 0.3s;
  height: ${(props) => (props.isOpen ? `fit-content` : `0`)};

  p {
    transition: visibility 0.1s;
    visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)};
  }
`;

export { List, ListItem, ItemHead, ItemAnswer };
