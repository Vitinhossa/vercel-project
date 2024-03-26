import { useState, useEffect } from 'react';
import { colors } from '@/utils/colors';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';
import { ContainerNullish } from './style';
import { DisplayFlex } from '../../atoms/Alignment';
import LoadingScreen from 'react-loading-screen';
import { useAlert } from 'react-alert';
import Cookies from 'js-cookie'
import api from '@/services/api';
import { FlexContainer } from '../RegisterParaVoceContent/style';
import { HeadingOne, Paragraph, Caption } from '../../atoms/Text';
import FilledButton from '../../atoms/FilledButton';
import CustomModal from '@/components/molecules/CustomModal';

export default function PlanosContent() {
  const planoElite = `/plans/cardEliteBtn.jpg`;
  const planoPremier = `/plans/cardPremierBtn.jpg`;
  const planoMiddle = `/plans/cardMiddleBtn.jpg`;
  const planoStart = `/plans/cardStartBtn.jpg`;
  const planoSpecial = `/plans/cardSpecialBtn.jpg`;
  const logo = `/logo_sa.png`;

  const alert = useAlert();
  const router = useRouter();

  const [isLoding, setIsLoding] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(true);
  const [step, setStep] = useState(0);

  const handleClick = event => {
    // 👇️ refers to the image element
    console.log(event);

    console.log('Image clicked');
    setIsLoding(true);

    (async function() {

      const token = Cookies.get('token')
      if (token) {
          console.log("Got a token in the cookies, let's see if it is valid")
          api.defaults.headers.Authorization = `PixLand ${token}`
          const { data: user } = await api.post('Change/Plan', {plano:event})
          console.log(user);
          setIsLoding(false);
          setStep(4);
          //setUser(user);
      }
      setIsLoding(false);
    }());
    //setIsLoding(true);
  };

  return (
    <ContainerNullish>
      
      {step == 4 ? (
        <>
          <div style={{ width: `100%`, height: `93vh` }}>
            <CustomModal
              title=""
              iconClassName="icon-close"
              onClick={() => setShowCustomModal(false)}
            >
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop="63px"
              >
                <Image src={logo} height={132} width={132} alt="sa pay" />
                <HeadingOne
                  margin="24px 0 24px 0"
                  color={colors.verdeDark}
                  fontSize="23px"
                  lineHeight="32px"
                  textAlign="center"
                >
                  Obrigado pelo envio dos seus dados.
                </HeadingOne>
                <Paragraph
                  fontSize="15px"
                  lineHeight="22px"
                  fontColor={colors.cinzaLightDark}
                  margin="0 0 24px 0"
                >
                  Vamos analisar seu perfil, baseado nos dados fornecidos fazer
                  consultas internas junto ao bancos de dados públicos e
                  privados para validar sua conta.
                </Paragraph>
                <FilledButton
                  roundedSize="25px"
                  width="100%"
                  bgColor1={colors.verdeMedium}
                  height="45px"
                  text="Voltar"
                  textColor="white"
                  action={() => router.push(`/`)}
                />
              </FlexContainer>
            </CustomModal>
          </div>
          </>) : (
          <>
      <Paragraph fontSize="14px" lineHeight="20px" fontWeight="700">
        Você no melhor estilo!
      </Paragraph>
      <Paragraph
        fontSize="14px"
        lineHeight="20px"
        fontWeight="400"
        fontColor={colors.cinzaLightDark}
        margin="4px 0 20px 0"
      >
        Selecione um dos nossos programas de associação:
      </Paragraph>
      {isLoding ? (
        <>
        <Paragraph
        fontSize="14px"
        lineHeight="20px"
        fontWeight="400"
        fontColor={colors.cinzaLightDark}
        margin="40px 0 20px 0"
      >
        
      </Paragraph>
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc="/loading.gif"
          text="Enviando dados..."
        />

</>
      ) : (
        <>
        
      <DisplayFlex
        align="center"
        justify="center"
        style={{ width: `100%`, marginTop: `16px` }}
      >
        <img onClick={() => handleClick('5')} 
   src={planoElite} 
   alt="Plano Elite" 
   style={{width: 320, height: 530}}/>

      </DisplayFlex>
      <DisplayFlex
        align="center"
        justify="center"
        style={{ width: `100%`, marginTop: `16px` }}
      >

        <img onClick={() => handleClick('4')} 
   src={planoPremier} 
   alt="Plano Premier" 
   style={{width: 320, height: 530}}/>
      </DisplayFlex>
      <DisplayFlex
        align="center"
        justify="center"
        style={{ width: `100%`, marginTop: `16px` }}
      >
    <img onClick={() => handleClick('3')} 
   src={planoMiddle} 
   alt="Plano Middle" 
   style={{width: 320, height: 530}}/>
      </DisplayFlex>
      <DisplayFlex
        align="center"
        justify="center"
        style={{ width: `100%`, marginTop: `16px` }}
      >
    <img onClick={() => handleClick('2')} 
   src={planoStart} 
   alt="Plano Start" 
   style={{width: 320, height: 530}}/>
      </DisplayFlex>
      <DisplayFlex
        align="center"
        justify="center"
        style={{ width: `100%`, marginTop: `16px` }}
      >
      <img onClick={() => handleClick('1')} 
      src={planoSpecial} 
      alt="Plano Special" 
      style={{width: 320, height: 310}}/>

      </DisplayFlex>
      </>
      )}
      </>
        )}
    </ContainerNullish>
  );
}
