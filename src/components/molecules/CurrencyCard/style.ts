import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';

const ContainerAmount = styled.div`
  padding: 25px 18px;
  background-color: ${colors.cinzaLight};
  border-radius: 8px;
`;

const ContainerHeaderAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PriceValue = styled.div`
  font-size: ${fontSizes.xLarge28};
  font-weight: ${fontWeight.bold};
  color: ${colors.cinzaMediumDark};
  button {
    margin-left: 5px;
  }
  display: flex;
  align-items: center;
`;

const ValueContent = styled.div`
  width: fit-content;
  position: relative;
  height: 100%;
`;

interface IHideContainer {
  isValueHide?: boolean;
}

const HideContainer = styled.div<IHideContainer>`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.isValueHide ? `100%` : `0%`)};
  background-color: ${colors.cinzaLightMedium};
  filter: blur(1px);
  top: 0;
  right: 0;
  transition: 0.3s all;
`;

const IconButton = styled.button`
  width: 28px;
  height: 28px;
  font-size: 21px;
  line-height: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${colors.cinzaLightDark};
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    transform: scale(0.9);
  }
`;

export {
  ContainerAmount,
  ContainerHeaderAmount,
  ContainerPrice,
  PriceValue,
  ValueContent,
  HideContainer,
  IconButton,
};
