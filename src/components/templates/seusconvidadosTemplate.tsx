import Image from 'next/image';
import { fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import BottomMenu from '../organisms/BottomMenu';
import { Paragraph } from '../atoms/Text';
import GuestsList from '../molecules/GuestsList';

export default function SeusConvidadosTemplate() {
  const guests = [
    {
      id: 0,
      name: `Fulano`,
      accountDate: `12/04/2021`,
      accountPlan: `Start 10x (Ativo)`,
      imageSrc: `/logo_sa.png`,
    },
    {
      id: 0,
      name: `Fulano`,
      accountDate: `12/04/2021`,
      accountPlan: `Start 10x (Ativo)`,
      imageSrc: `/logo_sa.png`,
    },
  ];
  return (
    <>
      <Header title="Seus convidados" />
      <PaddingContainer padding="30px 28px" minHeight="calc(100vh - 123px)">
        <div style={{ position: `absolute`, right: `0px` }}>
          <Image
            src="/seusconvidados.svg"
            width={235}
            height={247}
            alt="Seus convidados"
          />
        </div>
        <div style={{ width: `180px`, padding: `0 0 150px 0` }}>
          <Paragraph
            fontSize={fontSizes.medium16}
            fontWeight={fontWeight.bold}
            fontColor={colors.cinzaDark}
            lineHeight="22px"
          >
            Visualize os amigos que aceitaram seu convite e tornaram-se membros!
          </Paragraph>
        </div>

        <GuestsList guests={guests} />
      </PaddingContainer>
      <BottomMenu />
    </>
  );
}
