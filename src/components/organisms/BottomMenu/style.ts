import styled from 'styled-components';
import { colors } from '@/utils/colors';

const MenuContainer = styled.div`
  width: 100%;
  height: 62px;
  background-color: ${colors.branco};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 9991;

  position: sticky;
  bottom: 0;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.11);
`;

interface IMenuItems {
  isMainBtn?: boolean;
}
const MenuItems = styled.div<IMenuItems>`
  max-width: 64px;
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin-bottom: ${(props) => (props.isMainBtn ? `20px` : `0`)};
`;

const ItemIcon = styled.div<IMenuItems>`
  margin-bottom: 6px;
  height: ${(props) => (props.isMainBtn ? `46px` : `24px`)};
  width: ${(props) => (props.isMainBtn ? `46px` : `24px`)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemTitle = styled.div``;

export { MenuContainer, MenuItems, ItemIcon, ItemTitle };
