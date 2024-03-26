import { colors } from '@/utils/colors';
import styled from 'styled-components';

interface Props {
  isActive: boolean;
}

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.p<Props>`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ isActive }) => isActive ? colors.verdeFluor : colors.cinzaLightDark};
`;
