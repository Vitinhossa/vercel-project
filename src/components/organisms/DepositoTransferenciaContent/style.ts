import styled from 'styled-components';

interface IFlexContainer {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  marginTop?: string;
}

export const ContainerNullish = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 16px;
  padding: 20px;
`;

export const FlexContainer = styled.div<IFlexContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => props.marginTop};
`;
