/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import AttachmentModal from '@/components/molecules/AttachmentModal';
import Image from 'next/dist/client/image';
import CustomModal from '@/components/molecules/CustomModal';
import { ContainerNullish, FlexContainer } from './style';
import { HeadingOne, Paragraph, Caption } from '../../atoms/Text';
import InputCnpjCpf from '../../atoms/Input-cnpj-cpf';
import Input from '../../atoms/Input';
import BackButton from '../../atoms/BackButton';
import ProgressBar from '../../atoms/ProgressBar/index';
import FilledButton from '../../atoms/FilledButton';
import CodeInputContainer from '../../molecules/CodeInputContainer';
import ActionCheckCard from '../../molecules/ActionCheckCard';
import { DisplayFlex } from '../../atoms/Alignment';

export default function RegisterTenhoContaContent() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(true);

  const [cnpj, setCnpj] = useState(``);
  const [empresa, setEmpresa] = useState(``);
  const [razaosocial, setRazaoSocial] = useState(``);

  const [senha, setSenha] = useState(``);
  const [confirmarSenha, setConfirmarSenha] = useState(``);

  const planoElite = `/plans/cardEliteBtn.jpg`;
  const planoPremier = `/plans/cardPremierBtn.jpg`;
  const planoMiddle = `/plans/cardMiddleBtn.jpg`;
  const planoStart = `/plans/cardStartBtn.jpg`;
  const planoSpecial = `/plans/cardSpecialBtn.jpg`;
  const logo = `/logo_sa.png`;

  

  useEffect(() => {
    if (step === 0) {
      if (cnpj !== `` && empresa !== `` && razaosocial !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 1) {
      if (senha !== `` && confirmarSenha !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    }
  }, [cnpj, empresa, razaosocial]);

  return (
    <>
      <ContainerNullish>
        {step === 0 && (
          <>
            <BackButton
              textColor={colors.cinzaMediumDark}
              width="fit-content"
              clicked={() => router.push(`/register`)}
              marginBottom="20px"
            />
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              Cadastro
            </HeadingOne>
            <Paragraph
              fontSize="15px"
              lineHeight="22px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 18px 0"
            >
              Para abrir uma conta com a gente vamos precisar que você preencha
              os dados da sua empresa abaixo.
            </Paragraph>
            <ProgressBar width="20%" widthBar="100%" />
            <InputCnpjCpf
              type="text"
              labelText="CNPJ"
              containerMargin="16px 0 0 0"
              value={cnpj}
              onChange={(e: any) => setCnpj(e.target.value)}
            />
            <Input
              inputFormat="label"
              inputType="text"
              labelText="Nome da Empresa (Nome Fantasia)"
              placeholder="Digite aqui o nome fantasia da empresa"
              margin="16px 0 0 0"
              value={empresa}
              onChange={(e: any) => setEmpresa(e.target.value)}
            />
            <Input
              inputFormat="label"
              inputType="text"
              labelText="Razão social"
              placeholder="Digite aqui a razão social da empresa"
              margin="16px 0 0 0"
              value={razaosocial}
              onChange={(e: any) => setRazaoSocial(e.target.value)}
            />
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 0 0"
                action={() => {
                  setStep(step + 1);
                }}
              />
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <BackButton
              textColor={colors.cinzaMediumDark}
              width="fit-content"
              clicked={() => router.push(`/register`)}
              marginBottom="20px"
            />
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              Cadastro
            </HeadingOne>
            <Paragraph
              fontSize="15px"
              lineHeight="22px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 18px 0"
            >
              Agora você precisa definir a senha de acesso da sua conta da sua
              empresa. De acordo com os itens de segurança abaixo:
            </Paragraph>
            <ProgressBar width="60%" widthBar="100%" />
            <CodeInputContainer
              getInputValue={(e) => setSenha(e)}
              // value={senha}
              hasEyeIcon
              inputLength={8}
              labelText="Senha"
              margin="36px 0"
            />
            <CodeInputContainer
              getInputValue={(e) => setConfirmarSenha(e)}
              // value={confirmarSenha}
              inputLength={8}
              hasEyeIcon
              labelText="Confirmar Senha"
              margin="18px 0"
            />
            <FlexContainer
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  a
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Letras
                  <br />
                  minúsculas
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  A
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Letras
                  <br />
                  maiúsculas
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  #
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Caractere
                  <br />
                  especial
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  8
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Mínimo de
                  <br />
                  caractere
                </Paragraph>
              </FlexContainer>
            </FlexContainer>
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 0 0"
                action={() => setStep(step + 1)}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <BackButton
              textColor={colors.cinzaMediumDark}
              width="fit-content"
              clicked={() => router.push(`/register`)}
              marginBottom="20px"
            />
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              Cadastro
            </HeadingOne>
            <Paragraph
              fontSize="15px"
              lineHeight="22px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 18px 0"
            >
              Para que nossa equipe possa liberar sua conta, precisamos que nos
              envie alguns documentos solicitados abaixo:
            </Paragraph>
            <ProgressBar width="100%" widthBar="100%" />
            <ActionCheckCard
              title="Anexar Contrato Social"
              iconName="icon-check"
              height="76px"
              hasShadow
              containerMargin="20px 0 20px 0"
              titleSize="14px"
              titleWeight="500"
              iconColor="white"
              bgIconColor={isGreen ? colors.verdeMedium : `#b7b7b7`}
              iconSize="18px"
              action={() => setAttachmentModal(true)}
            />
            <div
              style={{
                height: `calc(100vh - 385px)`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `flex-end`,
              }}
            >
              <FlexContainer
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: `20px` }}
              >
                <input type="checkbox" />
                <Caption style={{ marginLeft: `10px` }}>
                  Declaro que concordo e aceito os{` `}
                  <strong onClick={() => window.open('https://www.pixland.com.br/política-de-kyc', '_blank')} style={{ color: colors.verdeMedium }}>
                    Termos de uso
                  </strong>
                  {` `}e{` `}
                  <strong onClick={() => window.open('https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro', '_blank')} style={{ color: colors.verdeMedium }}>
                    Políticas de privacidade.
                  </strong>
                </Caption>
              </FlexContainer>
              <FilledButton
                roundedSize="25px"
                width="100%"
                bgColor1={
                  isGreen === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                height="45px"
                text="Abrir Conta"
                textColor="white"
                margin="40px 0 0 0"
                action={() => setStep(step + 1)}
              />
            </div>
            {attachmentModal && (
              <AttachmentModal
                containerClicked={() => setAttachmentModal(false)}
                documentClicked={() => {
                  setIsGreen(true);
                  setAttachmentModal(false);
                }}
                imageClicked={() => {
                  setIsGreen(true);
                  setAttachmentModal(false);
                }}
                cameraClicked={() => {
                  setIsGreen(true);
                  setAttachmentModal(false);
                }}
              />
            )}
          </>
        )}
        {step === 3 && (
          <>
            <BackButton
              textColor={colors.cinzaMediumDark}
              width="fit-content"
              clicked={() => router.push(`/register`)}
              marginBottom="20px"
            />
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              Você no melhor estilo!
            </HeadingOne>
            <Paragraph
              fontSize="15px"
              lineHeight="22px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 18px 0"
            >
              Escolha nossos programas de associação:
            </Paragraph>
            <DisplayFlex
              align="center"
              justify="center"
              style={{ width: `100%`, marginTop: `16px` }}
            >
              <Image
                src={planoElite}
                height={530}
                width={320}
                alt="Plano Elite"
                onClick={() => setStep(step + 1)}
              />
            </DisplayFlex>
            <DisplayFlex
              align="center"
              justify="center"
              style={{ width: `100%`, marginTop: `16px` }}
            >
              <Image
                src={planoPremier}
                height={530}
                width={320}
                alt="Plano Premier"
                onClick={() => setStep(step + 1)}
              />
            </DisplayFlex>
            <DisplayFlex
              align="center"
              justify="center"
              style={{ width: `100%`, marginTop: `16px` }}
            >
              <Image
                src={planoMiddle}
                height={530}
                width={320}
                alt="Plano Middle"
                onClick={() => setStep(step + 1)}
              />
            </DisplayFlex>
            <DisplayFlex
              align="center"
              justify="center"
              style={{ width: `100%`, marginTop: `16px` }}
            >
              <Image
                src={planoStart}
                height={530}
                width={320}
                alt="Plano Start"
                onClick={() => setStep(step + 1)}
              />
            </DisplayFlex>
            <DisplayFlex
              align="center"
              justify="center"
              style={{ width: `100%`, marginTop: `16px` }}
            >
              <Image
                src={planoSpecial}
                height={330}
                width={320}
                alt="Plano Special"
                onClick={() => setStep(step + 1)}
              />
            </DisplayFlex>
          </>
        )}
        {step === 4 && (
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
        )}
      </ContainerNullish>
    </>
  );
}
