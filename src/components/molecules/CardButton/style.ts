import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface ICardBtnButton {
  bgColor1?: string;
  bgColor2?: string;

  maxHeight?: string;
  maxWidth?: string;
  height?: string;
  width?: string;
  inLineView?: boolean;
  isLightView?: boolean;
}

const CardBtnContainer = styled.li<ICardBtnButton>`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  border-radius: 5px;
  padding: ${(props) => (props.inLineView ? `20px 16px` : `15px 6px`)};
  display: flex;
  flex-direction: ${(props) => (props.inLineView ? `row` : `column`)};
  justify-content: center;
  position: relative;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;

  border: ${(props) =>
    props.isLightView ? `1px solid ${colors.cinzaLight}` : ``};
  background: ${(props) => {
    if (props.isLightView) {
      return `transparent`;
    }
    if (props.bgColor2) {
      return `linear-gradient(to right, ${props.bgColor1},  ${props.bgColor2})`;
    }

    if (props.bgColor1) {
      return props.bgColor1;
    }

    return `transparent`;
  }};

  @media (min-width: 600px) {
    &:hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  }
`;

interface IIconContainer {
  inLineView?: boolean;
  isLightView?: boolean;
}

const IconContainer = styled.div<IIconContainer>`
  max-width: ${(props) => (props.inLineView ? `40px` : `70px`)};
  max-height: ${(props) => (props.inLineView ? `40px` : `70px`)};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.inLineView ? `0` : `0 0 10px 0`)};

  svg path {
    fill: ${(props) => {
      if (props.isLightView) {
        return colors.verdeMedium;
      }
      return colors.branco;
    }};
  }
`;

interface ITextContainer {
  inLineView?: boolean;
}

const TextContainer = styled.div<ITextContainer>`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: ${(props) => (props.inLineView ? `flex-start` : `center`)};
  justify-content: ${(props) => (props.inLineView ? `flex-start` : `center`)};
  flex-direction: column;
  margin: ${(props) => (props.inLineView ? `0 0 0 10px` : ``)};

  /* h2 {
    white-space: nowrap;
  } */
`;

const LineIconContainer = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 25px;
  display: flex;
  align-items: center;

  i {
    font-size: 15px;
    line-height: 10px;
  }
`;

export { CardBtnContainer, TextContainer, IconContainer, LineIconContainer };
