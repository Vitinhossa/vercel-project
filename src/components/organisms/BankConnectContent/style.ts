import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IMainContainer {
  align?: string;
  fitContent?: boolean;
}
const MainContainer = styled.div<IMainContainer>`
  width: 100%;
  height: ${(props) =>
    props.fitContent ? `fit-content` : `calc(100vh - 60px)`};
  display: flex;
  align-items: ${(props) => props.align || `center`};
  justify-content: center;
  position: relative;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 232px;
  margin-bottom: 35px;
`;

const SquareIcon = styled.div`
  height: 74px;
  width: 74px;
  background-color: ${colors.cinzaLight};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ILogoContainer {
  padding?: string;
}
const LogoContainer = styled.div<ILogoContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
`;

interface IButtonContainer {
  direction?: string;
}
const ButtonContainer = styled.div<IButtonContainer>`
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 20px;
`;

const CheckList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const CheckListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const CheckListItemHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export {
  MainContainer,
  IconsContainer,
  SquareIcon,
  LogoContainer,
  IconContainer,
  ButtonContainer,
  CheckList,
  CheckListItem,
  CheckListItemHead,
};
