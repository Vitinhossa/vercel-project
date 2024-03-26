import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';

interface ILink {
  fontColor?: string;
  fontWeight?: string;
  textAlign?: string;
  fontSize?: string;
  marginTop?: string;
  margin?: string;
  transform?: string;
}

export const CustomLink = styled.a<ILink>`
  text-decoration: none;
  text-align: ${(props) => props.textAlign || `center`};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => props.fontColor || colors.verdeMedium};
  font-weight: ${(props) => props.fontWeight || fontWeight.bold};
  font-size: ${(props) => props.fontSize || fontSizes.xSmall12};
  margin: ${(props) => props.margin};
  cursor: pointer;
`;
