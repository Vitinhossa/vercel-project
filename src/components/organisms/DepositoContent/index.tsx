import { useRouter } from 'next/router';
import { ContainerNullish } from './style';
import { Paragraph } from '../../atoms/Text';
import ActionIconCard from '../../molecules/ActionIconCard';

export default function DepositoContent() {
  const router = useRouter();

  const types = [
    {
      id: 0,
      title: `Transferência com PIX`,
      subtitle: `Utilize as chaves PIX para transferir`,
      icon: `/xPhone.svg`,
      route: `pix/depositar`,
    },
    {
      id: 1,
      title: `Boleto`,
      subtitle: `Disponível em até 2 úteis`,
      icon: `/xPhone.svg`,
      route: `deposito/boleto`,
    },
    {
      id: 1,
      title: `Transferência `,
      subtitle: `Em até 1 hora dentro do horário comercial`,
      icon: `/xSuitcase.svg`,
      route: `deposito/transferencia`,
    },
  ];

  const buildActionCards = () =>
    types.map((action) => (
      <ActionIconCard
        key={action.id}
        title={action.title}
        height="76px"
        iconMargin="0 12px 0 0"
        titleSize="14px"
        hasShadow
        svg={action.icon}
        containerMargin="0 0 20px 0"
        action={() => {
          router.push(action.route);
          // setRegisterStep(2);
        }}
      />
    ));
  return (
    <ContainerNullish>
      <Paragraph fontSize="15px" fontWeight="400">
        Qual forma você gostaria de adicionar dinheiro na sua conta?
      </Paragraph>
      <div style={{ width: `100%`, marginTop: `24px` }}>
        {buildActionCards()}
      </div>
    </ContainerNullish>
  );
}
