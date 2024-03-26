import { colors } from '@/utils/colors';
import styled from 'styled-components';

interface ButtonProps {
  isDisabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  margin: 20px 40px;
  text-align: center;
`;

export const Image = styled.img`
  max-height: 70%;
`;

export const Text = styled.p`
  margin-top: 30px;
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.a<ButtonProps>`
  cursor: pointer;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDisabled }) => isDisabled ? colors.cinzaLight : colors.verdeFluor};
  border-radius: 50%;
`;

export const Content = styled.div``;

export const Icon = styled.img``;
