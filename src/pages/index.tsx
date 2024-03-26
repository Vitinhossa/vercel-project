import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
import InicialPage from '../components/templates/inicialPage';
import TelaInicialTemplate from '@/components/templates/telaInicialTemplate';

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  return (
    <div style={{ height: '100%' }}>
      { step === 0 && <TelaInicialTemplate onClick={() => setStep(1)} /> }
      <ContentContainer backgroundColor={colors.verdeLightBg}>
        {
          step === 1 &&
          <InicialPage
            title="Bem-vindo!"
            description="Uma associação exclusiva para a sua jornada de sucesso financeiro."
            buttonText="Já tenho uma conta"
            aboveButtonText="Ainda não tem uma"
            linkText="Cadastre-se!"
            linkAction={() => {
              router.push(`/register`);
            }}
            buttonAction={() => {
              router.push(`/login`);
            }}
          />
        }
      </ContentContainer>
    </div>
  );
}
