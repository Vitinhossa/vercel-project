import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IHeaderContainer {
  bgColor?: string;
  height?: string;
  isMainHeader?: boolean;
  borderRadius?: string;
  justifyContent?: string;
  alignItems?: string;
}

const HeaderContainer = styled.div<IHeaderContainer>`
  width: 100%;
  background-color: ${(props) => props.bgColor || colors.cinzaMediumDark};
  display: flex;
  align-items: ${(props) => props.alignItems || `center`};
  justify-content: ${(props) => props.justifyContent || `center`};
  padding: 6px 22px 20px 22px;
  border-radius: 0 0 24px 24px;
  flex-direction: column;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { HeaderContainer, CenterContainer };
