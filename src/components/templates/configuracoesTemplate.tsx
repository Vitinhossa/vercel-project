/* eslint-disable no-console */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { fontWeight, fontSizes, fontFamily } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import Image from 'next/dist/client/image';
import BackButton from '../atoms/BackButton';
import BottomMenu from '../organisms/BottomMenu';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingTwo, Paragraph } from '../atoms/Text';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import DataModal from '../molecules/DataModal';
import CodeInputContainer from '../molecules/CodeInputContainer';
import AlertModal from '../molecules/AlertModal';
import { DisplayFlex } from '../atoms/Alignment';

export default function ConfiguracoesTemplate() {
  const router = useRouter();
  const [changePin, setChangePin] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const [confirmChange, setConfirmChange] = useState(false);
  const [changed, setChanged] = useState(false);

  return (
    <>
      <PaddingContainer padding="22px" minHeight="calc(100vh - 62px)">
        <BackButton clicked={() => router.back()} />
        <div style={{ padding: `0 0 120px 0` }}>
          <HeadingTwo
            margin="0 0 22px 0"
            fontSize={fontSizes.xLarge20}
            fontWeight={fontWeight.bold}
            color={colors.verdeDark}
          >
            Configuração
          </HeadingTwo>
          <div style={{ width: `210px` }}>
            <Paragraph
              fontColor={colors.cinzaDark}
              fontSize={fontSizes.small15}
              fontWeight={fontWeight.bold}
              margin="0 0 19px 0"
            >
              Crie seu PIN para confirmações, troque sua senha de acesso ou
              configure a autenticação em dois fatores.
            </Paragraph>
            <Paragraph
              fontColor={colors.cinzaLightDark}
              fontSize={fontSizes.small14}
            >
              Escolha entre as opções abaixo:
            </Paragraph>
          </div>
          <div style={{ position: `absolute`, right: 0, top: `50px` }}>
            <Image
              src="/configuracoes.svg"
              width={194}
              height={257}
              alt="Convide seus amigos"
            />
          </div>
        </div>

        <FilledButtonContainer
          btnBgColor1={colors.verdeLight}
          btnText="Criar novo PIN"
          btnTextColor={colors.branco}
          margin="0 0 10px 0"
          btnRoundedSize="50px"
          height="46px"
          btnAction={() => setChangePin(true)}
        />
        <FilledButtonContainer
          btnBgColor1={colors.azulMediumDark}
          btnBgColor2={colors.azulMedium}
          btnText="Trocar senha de acesso"
          btnTextColor={colors.branco}
          margin="0 0 10px 0"
          btnRoundedSize="50px"
          height="46px"
          btnAction={() => setChangePassword(true)}
        />
        <FilledButtonContainer
          btnBgColor1={colors.amareloLightMedium}
          btnBgColor2={colors.amareloMedium}
          btnText="Autenticação em 2 fatores"
          btnTextColor={colors.branco}
          margin="0 0 20px 0"
          btnRoundedSize="50px"
          height="46px"
        />
      </PaddingContainer>
      <BottomMenu />

      {/* CHANGE PIN */}
      {changePin && (
        <DataModal
          title="Criar novo PIN"
          closeAction={() => setChangePin(false)}
        >
          <CodeInputContainer
            getInputValue={(e) => console.log(e)}
            labelText="Digite seu novo PIN"
            margin="80px 0 12px 0"
            hasEyeIcon
            inputLength={6}
          />
          <CodeInputContainer
            getInputValue={(e) => console.log(e)}
            labelText="Confirme seu novo PIN"
            margin="0px 0 90px 0"
            hasEyeIcon
            inputLength={6}
          />
          <div style={{ width: `100%` }}>
            <DisplayFlex direction="column" align="center" justify="center">
              <FilledButtonContainer
                btnBgColor1={colors.verdeLight}
                btnTextColor={colors.branco}
                height="46px"
                btnAction={() => setConfirmChange(true)}
                btnText="Confirmar"
                margin="0 0 14px"
                btnRoundedSize="50px"
              />
              <Paragraph
                fontWeight={fontWeight.bold}
                fontFamily={fontFamily.roboto}
                onClick={() => setChangePin(false)}
              >
                Cancelar
              </Paragraph>
            </DisplayFlex>
          </div>
        </DataModal>
      )}

      {changePin && confirmChange && (
        <AlertModal
          isOptionModal
          modalWidth="260px"
          text="Tem certeza que deseja cadastrar esse PIN?"
          positiveBtnAction={() => setChanged(true)}
          negativeBtnAction={() => setConfirmChange(false)}
          closeClick={() => setConfirmChange(false)}
        />
      )}

      {changePin && confirmChange && changed && (
        <AlertModal
          modalWidth="260px"
          text="O PIN foi cadastrado com sucesso!"
          iconColor={colors.verdeLight}
          iconName="icon-circle-check"
          btnAction={() => {
            setConfirmChange(false);
            setChanged(false);
            setChangePin(false);
          }}
          btnText="Voltar"
        />
      )}

      {/*  CHANGE PASSWORD */}

      {changePassword && (
        <DataModal
          title="Criar nova senha"
          closeAction={() => setChangePassword(false)}
        >
          <CodeInputContainer
            getInputValue={(e) => console.log(e)}
            labelText="Digite sua nova senha"
            margin="80px 0 12px 0"
            hasEyeIcon
            inputLength={6}
          />
          <CodeInputContainer
            getInputValue={(e) => console.log(e)}
            labelText="Confirme sua nova senha"
            margin="0px 0 90px 0"
            hasEyeIcon
            inputLength={6}
          />
          <div style={{ width: `100%` }}>
            <DisplayFlex direction="column" align="center" justify="center">
              <FilledButtonContainer
                btnBgColor1={colors.verdeLight}
                btnTextColor={colors.branco}
                height="46px"
                btnAction={() => setConfirmChange(true)}
                btnText="Confirmar"
                margin="0 0 14px"
                btnRoundedSize="50px"
              />
              <Paragraph
                fontWeight={fontWeight.bold}
                fontFamily={fontFamily.roboto}
                onClick={() => setChangePassword(false)}
              >
                Cancelar
              </Paragraph>
            </DisplayFlex>
          </div>
        </DataModal>
      )}

      {changePassword && confirmChange && (
        <AlertModal
          isOptionModal
          modalWidth="260px"
          text="Tem certeza que deseja cadastrar essa senha?"
          positiveBtnAction={() => setChanged(true)}
          negativeBtnAction={() => setConfirmChange(false)}
          closeClick={() => setConfirmChange(false)}
        />
      )}

      {changePassword && confirmChange && changed && (
        <AlertModal
          modalWidth="260px"
          text="A senha foi cadastrada com sucesso!"
          iconColor={colors.verdeLight}
          iconName="icon-circle-check"
          btnAction={() => {
            setConfirmChange(false);
            setChanged(false);
            setChangePassword(false);
          }}
          btnText="Voltar"
        />
      )}
    </>
  );
}
