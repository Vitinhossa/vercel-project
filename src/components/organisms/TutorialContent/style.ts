import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  padding: 40px;

  text-align: center;

  @media (max-width: 400px) {
    padding: 40px 10px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  margin-bottom: 60px;
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.a`
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 151.2px;
  height: 120px;
  background: rgba(255, 255, 255, 0.002);
  box-shadow: 0px 0px 4.8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

export const Image = styled.img``;

export const Text = styled.p`
  font-size: 12px;
  margin-top: 8px;
`;
