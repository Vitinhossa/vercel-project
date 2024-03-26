import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import { ContainerNullish } from './style';
import { HeadingOne, Paragraph } from '../../atoms/Text';

import BackButton from '../../atoms/BackButton';
import ProgressBar from '../../atoms/ProgressBar/index';

import ActionIconCard from '../../molecules/ActionIconCard';

interface IRegisterTypes {
  id: number;
  title: string;
  iconClassName: string;
  route: string;
  color: string;
}

export default function RegisterParaSeuNegocioContent() {
  const router = useRouter();
  const CardTypes: IRegisterTypes[] = [
    {
      id: 0,
      title: `Já tenho conta Pessoa Física`,
      iconClassName: `icon-check`,
      route: `/register/paraseunegocio/tenhoconta`,
      color: colors.verdeMedium,
    },
    {
      id: 1,
      title: `Não tenho conta Pessoa Física`,
      iconClassName: `icon-close`,
      route: `/register/paraseunegocio/naotenhoconta`,
      color: colors.vermelho,
    },
  ];

  const buildActionCards = () =>
    CardTypes.map((action) => (
      <ActionIconCard
        key={action.id}
        title={action.title}
        height="76px"
        titleSize="14px"
        hasShadow
        iconName={action.iconClassName}
        iconMargin="0 12px 0 0"
        iconBorder={`1.6px solid ${action.color}`}
        iconColor={action.color}
        iconBorderRadius="50%"
        iconPadding="10px"
        iconLineHeight="0px"
        containerMargin="0 0 20px 0"
        action={() => {
          router.push(action.route);
          // setRegisterStep(2);
        }}
      />
    ));

  return (
    <ContainerNullish>
      <BackButton
        textColor={colors.cinzaMediumDark}
        width="fit-content"
        clicked={() => router.push(`/register`)}
        marginBottom="20px"
      />
      <HeadingOne
        fontSize="23px"
        lineHeight="32px"
        fontWeight="700"
        color={colors.verdeDark}
      >
        Já é membro da PixLand?
      </HeadingOne>
      <Paragraph
        fontSize="15px"
        lineHeight="22px"
        fontColor={colors.cinzaLightDark}
        margin="8px 0 18px 0"
      >
        Antes de continuarmos com o cadastro da sua conta Pessoa Jurídica,
        precisamos saber: você já possui uma conta Pessoa Física?
      </Paragraph>
      <ProgressBar width="10%" widthBar="100%" />
      <div style={{ marginTop: `16px`, width: `100%` }}>
        {buildActionCards()}
      </div>
    </ContainerNullish>
  );
}
