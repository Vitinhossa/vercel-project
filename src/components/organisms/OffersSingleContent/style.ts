import { fontWeight } from './../../../utils/fonts';
import { colors } from '@/utils/colors';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 16px 30px;

  p {
    margin-top: 10px;
  }
`;

export const Description = styled.div`
margin-bottom: 20px;
  p {
    margin-top: 30px;
    color: #303030;
    font-size: 16px;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
`;

export const Titulo = styled.h2`
  color: #303030;
  font-size: 20px;
  font-weight: 500;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  button {
    width: 45%;
  }
`;

export const TitleInfo = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

export const TextInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const BoxTermos = styled.div`
  padding: 20px;
  background-color: #eeeeee;
  border-radius: 12px;
  margin-top: 20px;
`;

export const TitleTermos = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #0a8336;
`;

export const TextTermos = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #303030;
`;

export const BoxBlack = styled.div`
  background: #141414;
  border-radius: 12px;
  margin-top: 20px;
  color: #ffffff;
  padding: 20px 20px 30px 20px;
`;

export const Circle = styled.div`
  background: #eeeeee;
  border-radius: 50px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const BoxBlackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  p{
    font-size: 14px;
    margin: 0
  }
`;

export const TitleBoxBlack = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Number = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #0A8336;
`;
