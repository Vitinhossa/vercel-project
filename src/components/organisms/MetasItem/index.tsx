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
  height: 10px;
  border-radius: 30px;
  background-color: ${(props) => `rgba(${props.rgbBar}, 0.3)`};
  margin: 4px 0%;
`;

const Bar = styled.div<{ barPorc: number; rgbBar: string }>`
  width: ${(props) => `${props.barPorc}%`};
  height: 10px;
  border-radius: 30px;
  background-color: ${(props) => `rgba(${props.rgbBar}, 1)`};
`;

const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #34403b;
  margin-bottom: 4px;
`;

const ContainerTicket = styled.span`
  width: 52px;
  text-align: center;
  background-color: #ff9f1e;
  border-radius: 2px;
  margin-left: 4px;
  color: white;
`;

export const MetasItem = ({
  metaName = ``,
  rgbBar = `241,33,108`,
  barPorc = 0,
  onClickItem,
  onClickTicket,
}: {
  metaName?: string;
  rgbBar?: string;
  barPorc?: number;
  onClickTicket?: () => void;
  // eslint-disable-next-line no-shadow
  onClickItem?: (metaName: string) => void;
}) => (
  <ContainerItem>
    <TwoCol onClick={() => onClickItem && onClickItem(metaName)}>
      <TitleItem>
        Sua meta é <strong>{metaName}</strong>
      </TitleItem>
      <SubTitle>15% já completo</SubTitle>
    </TwoCol>
    <ContainerBar rgbBar={rgbBar}>
      <Bar barPorc={barPorc} rgbBar={rgbBar} />
    </ContainerBar>
    <ContainerTotal>
      <p>Total da meta R$ 50.000,00</p>
      <p>R$ 7.500,00</p>
    </ContainerTotal>
    <p
      style={{
        fontSize: `12px`,
        marginBottom: `4px`,
      }}
    >
      <strong>Restam:</strong>
      {` `}6 meses
    </p>
    <p
      style={{
        fontSize: `12px`,
        display: `flex`,
      }}
    >
      Tickets de conquista:{` `}
      <ContainerTicket onClick={onClickTicket}>10</ContainerTicket>
    </p>
  </ContainerItem>
);
