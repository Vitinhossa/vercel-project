import Image from 'next/image';
import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import PaddingContainer from '../atoms/PaddingContainer';
import Header from '../molecules/Header';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import { DisplayFlex } from '../atoms/Alignment';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'

export default function MeuPlanoTemplate() {
  const router = useRouter();
  const plano = `/plans/start.jpg`;
  const planoElite = `/plans/cardEliteBtn.jpg`;
  const planoPremier = `/plans/cardPremierBtn.jpg`;
  const planoMiddle = `/plans/cardMiddleBtn.jpg`;
  const planoStart = `/plans/cardStartBtn.jpg`;
  const planoSpecial = `/plans/cardSpecialBtn.jpg`;

  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  let plan = plano;

  if(user.meus_dados.plano == 0)
  plan = plano;
  if(user.meus_dados.plano == 1)
  plan = planoSpecial;
  if(user.meus_dados.plano == 2)
  plan = planoStart;
  if(user.meus_dados.plano == 3)
  plan = planoMiddle;
  if(user.meus_dados.plano == 4)
  plan = planoPremier;
  if(user.meus_dados.plano == 5)
  plan = planoElite;


  return (
    <>
      <Header title="Meu Plano" />
      <PaddingContainer padding="27px 20px">
        <DisplayFlex align="center" justify="center">
          <Image src={plan} height={430} width={320} alt={plan} />
        </DisplayFlex>

        <FilledButtonContainer
          btnText="Trocar plano"
          btnBgColor1={colors.verdeLight}
          btnTextColor={colors.branco}
          margin="20px 0 12px 0"
          btnRoundedSize="50px"
          height="46px"
          btnAction={() => router.push(`/planos`)}
        />
        <FilledButtonContainer
          btnText="Cartões"
          btnBgColor1={colors.verdeLight}
          btnTextColor={colors.branco}
          btnRoundedSize="50px"
          height="46px"
          btnAction={() => router.push(`/cartoes`)}
        />
      </PaddingContainer>
    </>
  );
}
