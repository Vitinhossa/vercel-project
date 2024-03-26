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
  height: ${(props) => {
    if (props.isMainHeader) {
      return `72px`;
    }
    if (props.height) {
      return props.height;
    }

    return `60px`;
  }};
  background-color: white;
  display: flex;
  align-items: ${(props) => props.alignItems || `center`};
  justify-content: ${(props) => props.justifyContent || `center`};
  padding: 0 22px;

  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid #EEE;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 116px;
  height: 24px;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 22px;
  height: 100%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIconContainer = styled.div`
  width: fit-content;
  position: absolute;
  right: 24px;

  @media (min-width: 600px) {
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.09);
    }
  }
`;

export { HeaderContainer, ImageContainer, IconContainer, MenuIconContainer };
