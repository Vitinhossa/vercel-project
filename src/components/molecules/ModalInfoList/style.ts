import styled from 'styled-components';

interface IFlexContainer {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  marginTop?: string;
}

const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export { FlexContainer, TitleContainer, InfoContainer };
