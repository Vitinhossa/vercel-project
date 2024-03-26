import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import { ContainerNullish } from './style';
import ActionIconCard from '../ActionIconCard';

const transferenciaType = [
  {
    id: 0,
    title: `Transferência com PIX`,
    subtitle: `Utilize as chaves PIX para transferir`,
    icon: `/xPhone.svg`,
    route: `pix`,
  },
  {
    id: 1,
    title: `Conta PixLand`,
    subtitle: `Entre contas PixLand`,
    icon: `/xPhone.svg`,
    route: `/transferencia/10x`,
  },
  {
    id: 1,
    title: `Transferência bancária`,
    subtitle: `Para outros bancos`,
    icon: `/xSuitcase.svg`,
    route: `/transferencia/banco`,
  },
];

export default function TransferenciaContent() {
  const router = useRouter();

  const buildActionCards = () =>
    transferenciaType.map((action) => (
      <ActionIconCard
        key={action.id}
        title={action.title}
        height="76px"
        iconMargin="0 12px 0 0"
        titleSize="14px"
        hasShadow
        // iconName={action.icon}
        // iconSize="24px"
        // iconColor={colors.verdeLight}
        svg={action.icon}
        containerMargin="0 0 20px 0"
        action={() => {
          router.push(action.route);
        }}
        subtitle={action.subtitle}
        subtitleSize="12px"
        subtitleColor={colors.cinzaLightDark}
      />
    ));
  return (
    <ContainerNullish>
      <Paragraph
        fontWeight="400"
        fontSize="15px"
        lineHeight="20px"
        fontColor={colors.cinzaLightDark}
        margin="0 20px 20px 20px"
      >
        Escolha a forma que você quer enviar o dinheiro.
      </Paragraph>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          padding: `20px`,
          width: `100%`,
        }}
      >
        {buildActionCards()}
      </div>
    </ContainerNullish>
  );
}
