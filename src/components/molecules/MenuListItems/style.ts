import styled from 'styled-components';

interface IMenuListContainer {
  height?: string;
}
const MenuListContainer = styled.div<IMenuListContainer>`
  width: 100%;
  height: ${(props) => props.height || `fit-content`};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { MenuListContainer };
