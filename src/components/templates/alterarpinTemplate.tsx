import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import BackButton from '../atoms/BackButton';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingTwo, Paragraph } from '../atoms/Text';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import Input from '../atoms/Input';
import CustomModal from '../molecules/CustomModal';
import { DisplayFlex } from '../atoms/Alignment';
import ActionCheckCard from '../molecules/ActionCheckCard';
import CameraComponent from '../molecules/CameraComponent';
import Cookies from 'js-cookie'
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import PinCode from '../atoms/InputCode';

export default function AtivarCartaoTemplate() {
  const router = useRouter();
  const [canUnlock, setCanUnlock] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [unlockede, setUnlockede] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [step, setStep] = useState(0);

  const [cardPhoto, setCardPhoto] = useState(``);
  const [cardNumber, setCardNumber] = useState(``);
  const [cardValid, setCardValid] = useState(``);

  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  useEffect(() => {
    if (cardNumber !== ``) {
      setCanUnlock(true);
    }
  }, [cardNumber]);

  const handlePhotoTaken = (uri: any) => {
    setCameraModal(false);
    setCardPhoto(uri);
  };


  return (
    <>
      {user.hasPin == 1 && (
        <PaddingContainer padding="22px">
        <BackButton clicked={() => router.back()} />
        <HeadingTwo
          fontSize={fontSizes.xLarge20}
          lineHeight="32px"
          fontWeight={fontWeight.bold}
          color={colors.verdeMediumDark}
        >
          Deseja alterar o seu PIN?
        </HeadingTwo>
        <Paragraph
          margin="8px 0 0 0"
          fontSize={fontSizes.small14}
          lineHeight="22px"
          color={colors.cinzaLightDark}
        >
          Preencha os dados abaixo para alterar:
        </Paragraph>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginTop: `24px`,
          }}
        >
          <Paragraph
            fontWeight={fontWeight.bold}
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.medium17}
            color={colors.cinzaDark}
          >
            PIN atual
          </Paragraph>
          <Input placeholder='********' styleInput={{borderBottom:'2px', borderColor: 'rgb(116, 124, 121)', borderBottomStyle: 'groove'}} maxLength={8} inputFormat="without-bg" inputType="password" onChange={(e: any) => setCardNumber(e.target.value)} />
        </div>

        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginTop: `24px`,
          }}
        >
          <Paragraph
            fontWeight={fontWeight.bold}
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.medium17}
            color={colors.cinzaDark}
          >
            Novo PIN
          </Paragraph>
          <Input placeholder='********' styleInput={{borderBottom:'2px', borderColor: 'rgb(116, 124, 121)', borderBottomStyle: 'groove'}} maxLength={8} inputFormat="without-bg" inputType="password" onChange={(e: any) => setCardValid(e.target.value)} />
        </div>


        <ActionCheckCard
          title="Selfie de Confirmação"
          iconName="icon-check"
          height="76px"
          hasShadow
          containerMargin="24px 0 0 0"
          titleSize="14px"
          titleWeight="500"
          iconColor="white"
          iconSize="16px"
          action={() => setCameraModal(true)}
          bgIconColor={cardPhoto ? colors.verdeLight : colors.cinzaLightMedium}
        />

        <FilledButtonContainer
          btnText="Alterar"
          btnBgColor1={canUnlock ? colors.verdeLight : colors.cinzaLightMedium}
          btnTextColor={colors.branco}
          height="46px"
          btnRoundedSize="50px"
          margin="49px 0"
          btnAction={
            canUnlock ? () => {
              (async function() {

                const token = Cookies.get('token')
                if (token) {
                    console.log(cardNumber);
                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`

                      const { data: user } = await api.post('Auth/Pin/Update', {pin_old:cardNumber, pin:cardValid})
                      if(user.success)
                      setUnlocked(true);
                      else
                      setUnlockede(true);



                    //setUser(user);
                }
                else{
                  setUnlocked(false);
                  setUnlockede(false);
                }
              }());

            } : () => setUnlocked(false)
          }
        />
      </PaddingContainer>
      )}

      {user.hasPin == 0 && (
        <PaddingContainer padding="22px">
        <BackButton clicked={() => router.back()} />
        <HeadingTwo
          fontSize={fontSizes.xLarge20}
          lineHeight="32px"
          fontWeight={fontWeight.bold}
          color={colors.verdeMediumDark}
        >
          Vamos criar o seu PIN?
        </HeadingTwo>
        <Paragraph
          margin="8px 0 0 0"
          fontSize={fontSizes.small14}
          lineHeight="22px"
          color={colors.cinzaLightDark}
        >
          Preencha os dados abaixo para criar o seu PIN:
        </Paragraph>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginTop: `24px`,
          }}
        >
          <Paragraph
            fontWeight={fontWeight.bold}
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.medium17}
            color={colors.cinzaDark}
          >
            PIN
          </Paragraph>
          <PinCode
            length={8}
            hasEyeButton
            getValue={(e: any) => setCardNumber(e)}
          />
        </div>




        <ActionCheckCard
          title="Selfie de Confirmação"
          iconName="icon-check"
          height="76px"
          hasShadow
          containerMargin="24px 0 0 0"
          titleSize="14px"
          titleWeight="500"
          iconColor="white"
          iconSize="16px"
          action={() => setCameraModal(true)}
          bgIconColor={cardPhoto ? colors.verdeLight : colors.cinzaLightMedium}
        />

        <FilledButtonContainer
          btnText="Criar PIN"
          btnBgColor1={canUnlock ? colors.verdeLight : colors.cinzaLightMedium}
          btnTextColor={colors.branco}
          height="46px"
          btnRoundedSize="50px"
          margin="49px 0"
          btnAction={
            canUnlock ? () => {
              (async function() {

                const token = Cookies.get('token')
                if (token) {
                    console.log(cardNumber);
                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`

                      const { data: user } = await api.post('Auth/Pin/Registration', {password:cardNumber})
                      if(user.success)
                      setUnlocked(true);
                      else
                      setUnlockede(true);



                    //setUser(user);
                }
                else{
                  setUnlocked(false);
                  setUnlockede(false);
                }
              }());

            } : () => setUnlocked(false)
          }
        />
      </PaddingContainer>
      )}


      {unlocked && (
        <CustomModal
          iconClassName="icon-close"
          onClick={() => setUnlocked(false)}
        >
          <DisplayFlex justify="center">
            <div
              style={{
                width: `121px`,
                height: `121px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                background: `linear-gradient(to right, ${colors.verdeMedium}, ${colors.verdeFluor})`,
                borderRadius: `100px`,
                margin: `30px 0 44px`,
              }}
            >
              <i
                className="icon-check"
                style={{
                  color: colors.branco,
                  fontSize: `60px`,
                  lineHeight: `40px`,
                }}
              />
            </div>
          </DisplayFlex>
          <HeadingTwo
            fontSize={fontSizes.xLarge20}
            color={colors.verdeDark}
            fontWeight={fontWeight.bold}
            lineHeight="28px"
            margin="0 0 30px 0"
            textAlign="center"
          >
            Sua senha foi alterada com sucesso!
          </HeadingTwo>
          <Paragraph
            fontSize={fontSizes.small14}
            fontColor={colors.cinzaLightDark}
            margin="0 0 48px"
            textAlign="center"
          >
            Você já pode utilizá-lo para todas as finalidades.
          </Paragraph>

          <FilledButtonContainer
            btnTextColor={colors.branco}
            height="46px"
            btnBgColor1={colors.verdeLight}
            btnText="Voltar"
            btnRoundedSize="80px"
            btnAction={() => router.push(`/`)}
          />
        </CustomModal>
      )}
      {unlockede && (
        <CustomModal
          iconClassName="icon-close"
          onClick={() => setUnlockede(false)}
        >
          <DisplayFlex justify="center">
            <div
              style={{
                width: `121px`,
                height: `121px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                background: `linear-gradient(to right, ${colors.vermelho}, ${colors.vermelho})`,
                borderRadius: `100px`,
                margin: `30px 0 44px`,
              }}
            >
              <i
                className="icon-check"
                style={{
                  color: colors.branco,
                  fontSize: `60px`,
                  lineHeight: `40px`,
                }}
              />
            </div>
          </DisplayFlex>
          <HeadingTwo
            fontSize={fontSizes.xLarge20}
            color={colors.verdeDark}
            fontWeight={fontWeight.bold}
            lineHeight="28px"
            margin="0 0 30px 0"
            textAlign="center"
          >
            Erro ao atualizar o seu pin
          </HeadingTwo>
          <Paragraph
            fontSize={fontSizes.small14}
            fontColor={colors.cinzaLightDark}
            margin="0 0 48px"
            textAlign="center"
          >
            Tente novamente mais tarde
          </Paragraph>

          <FilledButtonContainer
            btnTextColor={colors.branco}
            height="46px"
            btnBgColor1={colors.verdeLight}
            btnText="Voltar"
            btnRoundedSize="80px"
            btnAction={() => router.push(`/`)}
          />
        </CustomModal>
      )}

      {cameraModal && (
        <div
          style={{
            position: `absolute`,
            width: `100%`,
            top: 0,
            left: 0,
            height: `100vh`,
            backgroundColor: colors.branco,
            zIndex: 10,
          }}
        >
          <PaddingContainer padding="22px">
            <BackButton clicked={() => setCameraModal(false)} />
            <DisplayFlex justify="center">
              <Paragraph
                fontSize={fontSizes.large18}
                fontWeight={fontWeight.bold}
                fontFamily={fontFamily.roboto}
                margin="0 0 15px 0"
              >
                Selfie
              </Paragraph>
            </DisplayFlex>

            <div
              style={{
                width: `100%`,
                //maxWidth: `100%`,
                position: `relative`,
                //overflowX: `hidden`,
                flexDirection: `row`,
                height: `100%`,
                display: 'flex',
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <CameraComponent
                photoTaken={(e) => handlePhotoTaken(e)}
                camError={() => setCameraModal(false)}
              />
            </div>
          </PaddingContainer>
        </div>
      )}
    </>
  );
}
