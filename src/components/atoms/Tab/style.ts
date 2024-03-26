import { colors } from '@/utils/colors';
import styled from 'styled-components';

interface ICustomTab {
  fontColor?: string;
  bgColor?: string;
  width?: string;
  isActive?: boolean;
}

const CustomTab = styled.div<ICustomTab>`
  color: ${(props) =>
    props.isActive ? `${colors.verdeMedium}` : `${colors.cinzaLightDark}`};
  background-color: white;
  padding: 16px 8px;
  height: 54px;
  width: ${(props) => props.width || `50%`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  font-weight: ${({ theme: { fontWeight }, ...props }) =>
    props.isActive ? fontWeight.bold : fontWeight.regular};
  cursor: pointer;
  transition: all 0.3s;
`;

const CustomTabTwo = styled.div<ICustomTab>`
  color: ${(props) =>
    props.isActive ? `${colors.verdeMedium}` : `${colors.cinzaLightDark}`};
  background-color: white;
  padding: 16px 8px;
  height: 38px;
  width: ${(props) => props.width || `50%`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme: { fontWeight }, ...props }) =>
    props.isActive ? fontWeight.bold : fontWeight.regular};
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive
      ? `5px solid ${colors.verdeMedium}`
      : `1px solid ${colors.cinzaLight}`};
  transition: all 0.3s;
`;

export { CustomTab, CustomTabTwo };
