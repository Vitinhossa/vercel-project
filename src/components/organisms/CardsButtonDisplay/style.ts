import styled from 'styled-components';

interface ICardsContainer {
  height?: string;
  padding?: string;
  isListView?: boolean;
}
const CardsContainer = styled.ul<ICardsContainer>`
  width: 100%;
  height: ${(props) => props.height};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isListView ? `column` : `row`)};

  li {
    margin-bottom: 10px;
    &:nth-of-type(odd) {
      margin-right: ${(props) => (props.isListView ? `0` : `10px`)};
    }
  }
`;

export { CardsContainer };
