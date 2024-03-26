/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';

const ContainerItem = styled.div`
  margin-top: 12px;
  text-align: left;
  cursor: pointer;
`;

const TwoCol = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleItem = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #34403b;
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #6e747a;
  font-weight: 500;
`;

const ContainerBar = styled.div<{ rgbBar: string }>`
  width: 100%;
  height: 18px;
  border-radius: 30px;
  background-color: ${(props) => `rgba(${props.rgbBar}, 0.3)`};
  margin: 4px 0%;
`;

const Bar = styled.div<{ barPorc: number; rgbBar: string }>`
  width: ${(props) => `${props.barPorc}%`};
  height: 18px;
  border-radius: 30px;
  background-color: ${(props) => `rgba(${props.rgbBar}, 1)`};
`;

const ContainerTotal = styled.div<{ rgbBar: string }>`
  font-size: 14px;
  color: ${(props) => `rgb(${props.rgbBar})`};
  font-weight: 600;
  margin-bottom: 4px;
  p {
    text-align: right;
  }
`;

export const OrcamentoCategoryItem = ({
  metaName = ``,
  rgbBar = `241,33,108`,
  barPorc = 0,
  onClickItem,
}: {
  metaName?: string;
  rgbBar?: string;
  barPorc?: number;
  // eslint-disable-next-line no-shadow
  onClickItem?: (metaName: string) => void;
}) => (
  <ContainerItem onClick={() => onClickItem && onClickItem(metaName)}>
    <TwoCol>
      <TitleItem>{metaName}</TitleItem>
      <SubTitle>R$ 260,00 de R$ 500,00</SubTitle>
    </TwoCol>
    <ContainerBar rgbBar={rgbBar}>
      <Bar barPorc={barPorc} rgbBar={rgbBar} />
    </ContainerBar>
    <ContainerTotal rgbBar={rgbBar}>
      <p>{barPorc}%</p>
    </ContainerTotal>
  </ContainerItem>
);
