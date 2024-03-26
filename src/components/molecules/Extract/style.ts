import styled from 'styled-components';

export const ContainerNullish = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 24px;
`;

export const Tabs = styled.article`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.branco};
  padding: 6px;
  border-radius: 5px;
`;
