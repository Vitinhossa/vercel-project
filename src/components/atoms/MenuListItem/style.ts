import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '../../../utils/fonts';

interface ILinkContainer {
  hasBorderBottom?: boolean;
  height?: string;
  titleInCenter?: boolean;
}

const LinkContainer = styled.a<ILinkContainer>`
  width: 100%;
  height: ${(props) => props.height || `100%`};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.titleInCenter ? `center` : `space-between`};

  text-decoration: none;
  border-bottom: ${(props) =>
    props.hasBorderBottom ? `1px solid #EEE` : `none`};
  padding: 16px 0 16px 5px;
  cursor: pointer;

  &:hover {
    p {
      transition: all 0.3s;
      color: ${colors.verdeMedium};
    }
  }
`;

const ItemTextBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

interface IItemTitle {
  textColor?: string;
  textWeight?: string;
  textSize?: string;
}

const ItemTitle = styled.p<IItemTitle>`
  font-size: ${(props) => props.textSize || fontSizes.medium17};
  color: ${(props) => props.textColor || `#383838`};
`;

interface IItemSubtitle {
  textColor?: string;
  textWeight?: string;
  textSize?: string;
}

const ItemSubtitle = styled.p<IItemSubtitle>`
  font-size: ${(props) => props.textSize || fontSizes.small14};
  font-weight: ${(props) => props.textWeight || `500`};
  color: ${(props) => props.textColor || `#303030`};
  /* padding-left: 25px; */
  font-style: italic;
  background-color: #DFF8EE;
  padding: 4px 8px;
  border-radius: 40px;
  border: 1px solid #218460;
  margin-left: 20px;
`;

const ItemIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding-right: 16px;
`;

export {
  LinkContainer,
  ItemTextBox,
  ItemTitle,
  ItemSubtitle,
  ItemIconContainer,
};
