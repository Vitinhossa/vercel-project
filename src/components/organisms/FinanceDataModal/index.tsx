import router from 'next/router';
import { fontFamily, fontSizes } from '@/utils/fonts';
import styled from 'styled-components';
import { colors } from '@/utils/colors';

import DataModal from '@/components/molecules/DataModal';

import fluxoIcon from '@/assets/svg/gestor/fluxodecaixa';
import receitasIcon from '@/assets/svg/gestor/receitas';
import controleIcon from '@/assets/svg/gestor/controleorcamento';
import metasIcon from '@/assets/svg/gestor/metas';
import insightsIcon from '@/assets/svg/gestor/insights';
import comparacaoIcon from '@/assets/svg/gestor/comparacao';
import feedbacksIcon from '@/assets/svg/gestor/feedbacks';
import { HeadingThree, Paragraph } from '@/components/atoms/Text';
import { DisplayFlex } from '@/components/atoms/Alignment';

export default function FinanceDataModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const plusContent = [
    // {
    //   id: 0,
    //   title: `Fluxo de caixa`,
    //   route: `/gestorfinanceiro/fluxodecaixa`,
    //   iconComp: fluxoIcon,
    // },
    {
      id: 1,
      title: `Receitas e despesas`,
      route: `/gestorfinanceiro/receitas`,
      iconComp: receitasIcon,
    },
    // {
    //   id: 2,
    //   title: `Controle de orçamento`,
    //   route: `/gestorfinanceiro/orcamentos`,
    //   iconComp: controleIcon,
    // },
    // {
    //   id: 3,
    //   title: `Metas`,
    //   route: `/gestorfinanceiro/metas`,
    //   iconComp: metasIcon,
    // },
    {
      id: 4,
      title: `Insights`,
      route: `/gestorfinanceiro/insights`,
      iconComp: insightsIcon,
    },
    // {
    //   id: 5,
    //   title: `Comparação entre pares`,
    //   route: `/gestorfinanceiro/comparacao`,
    //   iconComp: comparacaoIcon,
    // },
    {
      id: 6,
      title: `Enviar Feedback`,
      route: `/feedback`,
      iconComp: feedbacksIcon,
    },
  ];

  const PlusItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 8px;
    border-bottom: 1px solid ${colors.cinzaLight};
    width: 100%;
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
      color: ${colors.verdeLight};
    }
    &:last-of-type {
      border-bottom: none;
    }
  `;
  const PlusIconContainer = styled.div`
    margin-right: 10px;
  `;

  return (
    <DataModal closeAction={onCloseModal}>
      <DisplayFlex direction="column" style={{ width: `100%` }}>
        <HeadingThree style={{ marginBottom: '20px' }}>
          Mais opções
        </HeadingThree>
        {plusContent.map((content) => (
          <PlusItem key={content.id} onClick={() => router.push(content.route)}>
            <PlusIconContainer>{content.iconComp()}</PlusIconContainer>
            <Paragraph
              fontSize={fontSizes.medium16}
              fontFamily={fontFamily.roboto}
              lineHeight="20px"
            >
              {content.title}
            </Paragraph>
          </PlusItem>
        ))}
      </DisplayFlex>
    </DataModal>
  );
}
