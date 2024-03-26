import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontFamily, fontSizes } from '@/utils/fonts';

interface IContent {
  width?: string;
}

const Content = styled.div<IContent>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || `100%`};
  height: fit-content;
  position: relative;
`;

interface ISelect {
  height?: string;
}
const Select = styled.div<ISelect>`
  width: 100%;
  height: ${(props) => props.height || `32px`};
  text-align: center;
  background-color: ${colors.cinzaLight};
  color: ${colors.cinzaMediumDark};
  font-family: ${fontFamily.roboto};
  font-size: ${fontSizes.medium16};
  border: none;
  padding: 0 10px;
  border-radius: 50px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DisplayValue = styled.div``;

interface IIconContainer {
  isOpen?: boolean;
}
const IconContainer = styled.div<IIconContainer>`
  position: absolute;
  right: 8%;

  transform: ${(props) =>
    props.isOpen ? `rotateZ(270deg)` : `rotateZ(90deg)`};
  transition: all 0.3s;
  font-size: 12px;
`;

const Options = styled.div`
  max-height: 150px;
  height: fit-content;
  overflow-y: auto;
  transition: all 0.3s;
  border: 1px solid ${colors.cinzaLight};
  margin-top: 10px;
  border-radius: 10px;
  z-index: 10;
  position: absolute;
  width: 100%;
  background: ${colors.branco};
  top: 100%;
`;
const Option = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${colors.cinzaLight};
  font-size: ${fontSizes.xSmall12};
  transition: all 0.3s;
  &:hover {
    background-color: ${colors.cinzaLight};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export { Content, Select, DisplayValue, Options, Option, IconContainer };
