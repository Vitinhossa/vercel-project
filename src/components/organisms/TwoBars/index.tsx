import styled from 'styled-components';

const ContainerTwoBar = styled.div`
  position: relative;
  display: flex;
  padding-top: 10px;
`;

const RedBar = styled.div`
  width: 50%;
  height: 14px;
  background-color: #fccdcd;
  border-radius: 30px 0 0 30px;
  position: relative;
`;
const GreenBar = styled.div`
  width: 50%;
  height: 14px;
  background-color: #d1f6cb;
  border-radius: 0 30px 30px 0;
  position: relative;
`;

const PorcBar = styled.div<{ color: string; width: string }>`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 14px;
  background-color: ${(props) => props.color};
  border-radius: 30px 0 0 30px;
  transition: 0.4s all;
`;

const Legend = styled.p`
  font-size: 11px;
  color: #6e747a;
`;

export const TwoBars = ({
  redWidth,
  greenWidth,
  labelRed,
  labelGreen,
  topLabelGreen,
  topLabelRed,
}: {
  redWidth: string;
  greenWidth: string;
  labelRed: string;
  labelGreen: string;
  topLabelGreen?: string;
  topLabelRed?: string;
}) => (
  <>
    <ContainerTwoBar>
      <RedBar>
        <PorcBar width={redWidth} color="#F7005A" style={{ right: 0 }} />
      </RedBar>
      <GreenBar>
        <PorcBar
          width={greenWidth}
          color="#0f3b93"
          style={{ left: 0, borderRadius: `0 30px 30px 0` }}
        />
      </GreenBar>
      <Legend
        style={{
          position: `absolute`,
          top: `-10px`,
          left: 0,
          fontWeight: 700,
        }}
      >
        {topLabelGreen}
      </Legend>
      <Legend
        style={{
          position: `absolute`,
          top: `-10px`,
          fontWeight: 700,
          left: `50%`,
        }}
      >
        {topLabelRed}
      </Legend>
      <Legend
        style={{
          position: `absolute`,
          bottom: `-20px`,
          left: 0,
        }}
      >
        {labelRed}
      </Legend>
      <Legend
        style={{
          position: `absolute`,
          bottom: `-20px`,
          left: `50%`,
          transform: `translateX(-50%)`,
        }}
      >
        0
      </Legend>
      <Legend
        style={{
          position: `absolute`,
          bottom: `-20px`,
          right: `0`,
        }}
      >
        {labelGreen}
      </Legend>
    </ContainerTwoBar>
  </>
);
