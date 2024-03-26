import styled from 'styled-components';
import { colors } from '@/utils/colors';

interface IHeaderContainer {
  margin?: string;
}
const HeadContainer = styled.div<IHeaderContainer>`
  width: 100%;
  height: fit-content;
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const IconContainer = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: absolute;
  right: 0;
`;

interface IIcon {
  isSelected?: boolean;
}

const Icon = styled.li<IIcon>`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
  background-color: ${(props) =>
    props.isSelected ? colors.verdeLightBg : `transparent`};
  padding: ${(props) => (props.isSelected ? `6px` : `0px`)};
  border-radius: 20px;
  transition: all 0.3s;

  @media (min-width: 600px) {
    cursor: pointer;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

export { HeadContainer, IconContainer, Icon };
