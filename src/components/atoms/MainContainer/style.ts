import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 600px) {
    border-radius: 10px;
  }
`;

export { Container };
