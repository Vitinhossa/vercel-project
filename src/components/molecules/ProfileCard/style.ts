import styled from 'styled-components';
import { fontFamily, fontSizes } from '@/utils/fonts';
import { colors } from '@/utils/colors';

interface ICardContainer {
  padding?: string;
}
interface InterfaceIconContainer{
  justifyContent?: string;
  width?:string;
  margin?:string;
}

const CardContainer = styled.div<ICardContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  padding: ${(props) => props.padding || `0`};
`;

const ImageContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 90px !important;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
`;
const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
const Title = styled.span`
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.xSmall12};
  color: ${colors.cinzaLightDark};
  margin-right: 13px;
`;

const IconContainer = styled.div<InterfaceIconContainer>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || `center`};
  height: 24px;
  width: ${(props) => props.width || `24px`};
  margin: ${(props) => props.margin || `0px`};
`;

export {
  CardContainer,
  ImageContainer,
  InfoContainer,
  IconContainer,
  InfoList,
  ListItem,
  Title,
};
