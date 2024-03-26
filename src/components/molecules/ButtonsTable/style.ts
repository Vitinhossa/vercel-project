import styled from 'styled-components';

const Table = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const Row = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  margin-bottom: 7px;
`;

interface IColumn {
  width?: string;
}

const Column = styled.div<IColumn>`
  height: 60px;
  width: ${(props) => props.width || `100%`};
  margin-right: 7px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export { Table, Row, Column };
