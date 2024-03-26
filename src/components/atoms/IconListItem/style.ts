import styled from 'styled-components';
import { colors } from '@/utils/colors';

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 18px 0;
  position: relative;
  border-bottom: 1px solid ${colors.cinzaLight};
  &:last-of-type {
    border-bottom: none;
  }
  @media (min-width: 600px) {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${colors.verdeLightBg};
    }
  }
`;

interface IImageContainer {
  imageSize?: string;
}

const ImageContainer = styled.div<IImageContainer>`
  width: ${(props) => props.imageSize || `40px`};
  height: ${(props) => props.imageSize || `40px`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export { TextContainer, ImageContainer, ItemContainer };
