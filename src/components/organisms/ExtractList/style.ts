import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontSizes } from '../../../utils/fonts';

interface IItemContent {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  marginLeft?: string;
}

interface IIcon {
  isUp?: boolean;
  fontSize?: string;
  width?: string;
  height?: string;
}

export const ContainerListExtract = styled.div`
  overflow-y: auto;
  height: fit-content;
  max-height: calc(100% - 54px);
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContent = styled.div<IItemContent>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || `row`};
  justify-content: ${(props) => props.justifyContent || `center`};
  align-items: ${(props) => props.alignItems || `center`};
  margin-left: ${(props) => props.marginLeft};
`;

export const Icon = styled.i<IIcon>`
  color: ${(props) => (props.isUp ? colors.verdeLight : colors.vermelho)};
  font-size: ${(props) => props.fontSize || fontSizes.medium16};
  line-height: 15px;
  border: ${(props) =>
    props.isUp
      ? `1px solid ${colors.verdeLight}`
      : `1px solid ${colors.vermelho}`};
  border-radius: 50%;
  padding: 5px;
  transform: ${(props) => (props.isUp ? `rotate(90deg)` : `rotate(-90deg)`)};
  width: ${(props) => props.width || `28px`};
  height: ${(props) => props.height || `28px`};
`;

export const IconGrey = styled.i<IIcon>`
  color: ${colors.cinzaLightMedium};
  font-size: ${fontSizes.medium16};
  line-height: 15px;
  border: 1px solid ${colors.cinzaLightMedium};
  border-radius: 50%;
  padding: 5px;
  width: 28px;
  height: 28px;
`;
