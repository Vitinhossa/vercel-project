import React, { useState } from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

import FinanceDataModal from '@/components/organisms/FinanceDataModal';
import FilledButton from '@/components/atoms/FilledButton';
import { ModalRelease } from '@/components/organisms/ModalRelease';
import { ModalDeposit } from '@/components/organisms/ModalDeposit';

import BottomMenu from '../../components/organisms/BottomMenu';
import Header from '../../components/molecules/Header';

import PaddingContainer from '../../components/atoms/PaddingContainer';

const ContainerHistory = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #edeff0;
  margin-top: 20px;
`;
const Paragraph = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: #34403b;
  font-weight: 400;
`;
const data = {
  datasets: [
    {
      label: `# of Votes`,
      data: [12, 4],
      backgroundColor: [`#F1216C`, `#FCD4E3`],

      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: 70,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

const MetaEspecifica = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRelease, setModalRelease] = useState(false);
  const [modalDeposit, setModalDeposit] = useState(false);

  const history = [0, 1, 2, 3, 4, 5, 6, 7];

  const historyItem = () => (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        marginBottom: `1rem`,
      }}
    >
      <p style={{ fontSize: `14px`, color: `#6E747A` }}>30/07/2020</p>
      <h4 style={{ fontSize: `14px`, color: `#0f3b93` }}>R$ 5.000,00</h4>
    </div>
  );

  return (
    <div
      style={{ display: `grid`, grid: `auto 1fr auto / auto`, height: `100%` }}
    >
      <Header title="Metas" />

      <PaddingContainer padding="24px 20px">
        <Title>
          Sua meta é <strong>Carro novo</strong>
        </Title>
        <Paragraph>Data limite 30/12/2020</Paragraph>
        <div
          style={{
            width: `160px`,
            margin: `24px auto 20px`,
            position: `relative`,
          }}
        >
          <Doughnut data={data} options={options} />
          <Paragraph
            style={{
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              transform: `translateX(-45%) translateY(-40%)`,
              fontSize: `20px`,
            }}
          >
            <strong>60%</strong>
          </Paragraph>
        </div>
        <Paragraph style={{ textAlign: `center` }}>
          R$ 30.000,00 de R$ 50.000,00
        </Paragraph>
        <ContainerHistory>
          <Title>
            <strong>Últimos depósitos</strong>
          </Title>
          <FilledButton
            text="Adicionar depósito"
            bgColor1="#0f3b93"
            textColor="white"
            roundedSize="30px"
            width="160px"
            margin="10px auto"
            action={() => setModalDeposit(true)}
          />
          {history.map(historyItem)}
        </ContainerHistory>
      </PaddingContainer>
      <BottomMenu
        plusBtnAction={() => setModalRelease(true)}
        actionMore={() => setModalOpen(!modalOpen)}
      />

      {modalOpen && (
        <FinanceDataModal onCloseModal={() => setModalOpen(false)} />
      )}

      <ModalRelease
        visible={modalRelease}
        onClose={() => setModalRelease(false)}
        onSave={() => setModalRelease(false)}
      />

      <ModalDeposit
        visible={modalDeposit}
        onClose={() => setModalDeposit(false)}
        onSave={() => setModalDeposit(false)}
      />
    </div>
  );
};
export default MetaEspecifica;
