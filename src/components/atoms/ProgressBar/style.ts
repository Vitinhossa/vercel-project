import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IProgress {
  width: string;
}

interface IBar {
  widthBar?: string;
  marginTop?: string;
  marginBottom?: string;
}

const Bar = styled.div<IBar>`
  height: 5px;
  background-color: ${colors.fundoProgressBar};
  border-radius: 15px;
  margin-top: ${(props) => props.marginTop || `24px`};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;
  width: ${(props) => props.widthBar};
`;

const Progress = styled.span<IProgress>`
  display: block;
  position: relative;

  width: ${(props) => props.width};
  height: 100%;
  background-color: ${colors.verdeMedium};
  border-radius: 15px;
  overflow: hidden;
  padding: 3px;

  color: white;
  text-align: right;
`;

export { Bar, Progress };
