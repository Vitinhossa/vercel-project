import styled from 'styled-components';

interface ICollapseContent {
    isOpen: boolean
}

const CollapseContainer = styled.div`
  border-bottom: 1px solid #EEE;
  width: 100%;
  padding: 16px 0 16px 5px;
  cursor: pointer;
  text-decoration: none;
`;

const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

const CollapseContent = styled.div<ICollapseContent>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ItemIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding-right: 16px;
`;

export {CollapseContainer, CollapseHeader, CollapseContent,ItemIconContainer,ParagraphContainer};
