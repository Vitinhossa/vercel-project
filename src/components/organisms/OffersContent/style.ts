import { colors } from '@/utils/colors';
import styled from 'styled-components';

interface TypeListItemProps {
  active?: boolean;
}

export const Container = styled.div`
  overflow: auto;

  //hidden scroll
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  margin-left: 16px;
`;

export const TypeList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  border-bottom: 1px solid ${colors.cinzaLight};
`;

export const TypeListItem = styled.div<TypeListItemProps>`
  padding-bottom: 14px;
  cursor: pointer;
  transition: all 0.5s;

  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${({ active }) =>
    active ? colors.verdeDark : 'transparent'};

  p {
    font-size: 14px;
    line-height: 140%;
    font-weight: bold;
    color: ${({ active }) =>
      active ? colors.cinzaDark : colors.cinzaLightDark};
  }

  &:not(:first-of-type) {
    margin-left: 32px;
  }
`;

export const Slide = styled.img`
  width: 100%;
  margin: 40px 0 16px 0;
  padding-right: 16px;
`;

export const OfferList = styled.div`
  margin: 16px 16px 16px 0;
`;

export const OfferListItem = styled.a`
  display: flex;
  padding: 16px;
  justify-content: center;

  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const OfferListTextArea = styled.div`
  margin-left: 16px;
  width: 70%;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
    line-height: 140%;
    margin-top: 8px;
  }

  h2 {
    font-size: 16px;
    line-height: 140%;
    font-weight: bold;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
`;
