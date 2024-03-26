import styled from 'styled-components';
import { fontWeight, fontSizes } from '../../../utils/fonts';

interface IBodyText {
  fontWeight?: string;
}

interface ICustomCaption {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  margin?: string;
  color?: string;
}

interface IParagraph {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  fontColor?: string;
  margin?: string;
  textTransform?: string;
  textAlign?: string;
  wordBreak?: string;
  marginRight?: string;
  fontFamily?: string;
}

interface IHeadingOne {
  margin?: string;
  lineHeight?: string;
  maxWidth?: string;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  fontFamily?: string;
}

const HeadingOne = styled.h1<IHeadingOne>`
  font-size: ${fontSizes.xLarge28};
  line-height: ${(props) => props.lineHeight || fontSizes.xLarge28};
  font-weight: ${(props) => props.fontWeight || fontWeight.bold};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth || `auto`};
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  text-align: ${(props) => props.textAlign};
`;

const HeadingTwo = styled.h2<IHeadingOne>`
  font-size: ${(props) => props.fontSize || fontSizes.xLarge24};
  line-height: ${(props) => props.lineHeight || fontSizes.xLarge24};
  font-weight: ${(props) => props.fontWeight || fontWeight.regular};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
`;

const HeadingThree = styled.h3<IHeadingOne>`
  font-size: ${(props) => props.fontSize || fontSizes.xLarge20};
  line-height: ${(props) => props.lineHeight || fontSizes.xLarge20};
  font-weight: ${fontWeight.bold};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
`;

const BodyText = styled.p<IBodyText>`
  font-size: ${fontSizes.large18};
  line-height: ${fontSizes.large18};
  font-weight: ${(props) => props.fontWeight || fontWeight.regular};
`;

export const Legend = styled.h4<ICustomCaption>`
  font-size: ${(props) => props.fontSize || fontSizes.small14};
  line-height: ${(props) => props.lineHeight || fontSizes.small14};
  font-weight: ${(props) => props.fontWeight || fontWeight.regular};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

const Caption = styled.p<ICustomCaption>`
  font-size: ${(props) => props.fontSize || fontSizes.xSmall12};
  line-height: ${(props) => props.lineHeight || fontSizes.xSmall12};
  font-weight: ${(props) => props.fontWeight || fontWeight.regular};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

const Paragraph = styled.p<IParagraph>`
  font-size: ${(props) => props.fontSize || fontSizes.medium16};
  line-height: ${(props) => props.lineHeight || fontSizes.medium16};
  font-weight: ${(props) => props.fontWeight || fontWeight.regular};
  color: ${(props) => props.fontColor};
  margin: ${(props) => props.margin};
  text-transform: ${(props) => props.textTransform || `none`};
  text-align: ${(props) => props.textAlign};
  word-break: ${(props) => props.wordBreak};
  margin-right: ${(props) => props.marginRight};
  font-family: ${(props) => props.fontFamily};
`;

export { BodyText, Caption, HeadingOne, HeadingTwo, HeadingThree, Paragraph };
