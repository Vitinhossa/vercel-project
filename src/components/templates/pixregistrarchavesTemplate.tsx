import { colors } from '@/utils/colors';
import { useState } from 'react';
import { fontFamily } from '@/utils/fonts';
import Input from '@/components/atoms/Input';
import FilledButton from '@/components/atoms/FilledButton';
import { DisplayFlex } from '@/components/atoms/Alignment';
import styled from 'styled-components';
import ClockIcon from '@/assets/svg/clock';
import EmailIcon from '@/assets/svg/email';
import CelularIcon from '@/assets/svg/celular';
import ShieldIcon from '@/assets/svg/shiedIcon';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingThree, HeadingTwo, Paragraph } from '../atoms/Text';
import Cookies from 'js-cookie'
import api from '@/services/api';
import { useAlert } from 'react-alert';
import InputCnpjCpf from '../atoms/Input-cnpj-cpf';

interface IPixRegistrar {
  pageType?: string;
}

const NewCodeBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;

  p {
    display: flex;
    align-items: center;
  }
`;

const IconItem = styled.span`
  margin-right: 8px;
  svg path {
    fill: ${colors.cinzaLightDark};
  }
`;

export default function PixRegistrarChavesTemplate({
  pageType = ``,
}: IPixRegistrar) {
  const [email, setEmail] = useState(``);
  const [celular, setCelular] = useState(``);
  const [cpf, setCpf] = useState(``);
  const [cnpj, setCnpj] = useState(``);
  const [confirmCode, setConfirmCode] = useState(``);
  const [verifyStep, setVerifyStep] = useState(false);
  const [confirmStep, setConfirmStep] = useState(false);
  const [keyInUse, setKeyInUse] = useState(false);
  const alert = useAlert();

  const registrarChave = () => {

    const token = Cookies.get('token')
    if (token) {

        console.log("Got a token in the cookies, let's see if it is valid")
        api.defaults.headers.Authorization = `PixLand ${token}`

        api.post('pix/chave/new', { type:pageType })
        .then((response) => {

          if(response.data['success'])
          {

              const alerta = alert.show(response.data['message'], {
                timeout: 8000, // custom timeout just for this one alert
                type: 'success'
              });
          }
          else {
            const alerta = alert.show(response.data['message'], {
              timeout: 8000,
              type: 'error'
            })
          }
        })
        .catch((err) => {
          const alerta = alert.show('Erro ao solicitar chave, tente novamente mais tarde!', {
            timeout: 8000,
            type: 'error'
          })
        });
    }

  }

  const portabilityText = {
    title: 'Portabilidade',
    description: 'Chave associada à outra conta. Deseja trazer sua chave para o PixLand?',
    observation: 'Essa portabilidade deve ser confirmada na instituição que a chave está ativa em até 7 dias.',
  }

  switch (pageType) {
    case `email`:
      return (
        <>
          <Header title="PIX - Registrar Chave" />
          <PaddingContainer padding="20px">
            {!verifyStep && !confirmStep && (
              <>
                <HeadingTwo
                  fontSize="20px"
                  margin="0 0 4px"
                  color={colors.black}
                  fontWeight="bold"
                  fontFamily={fontFamily.roboto}
                >
                  Registrar e-mail
                </HeadingTwo>
                <Paragraph
                  fontSize="17px"
                  lineHeight="24px"
                  fontColor={colors.cinzaLightMedium}
                  fontFamily={fontFamily.roboto}
                >
                  Insira o e-mail que você quer usar para receber transferências
                  por Pix.
                </Paragraph>
                <Input
                  inputType="email"
                  inputFormat="label"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Digite aqui seu email"
                  margin="16px 0 42px 0px"
                />
                <DisplayFlex justify="flex-end">
                  <FilledButton
                    iconClassName="icon-arrow-right"
                    height="44px"
                    width="44px"
                    borderRounded
                    roundedSize="40px"
                    bgColor1={colors.verdeMedium}
                    action={() => {
                      if (email !== ``) {
                        keyInUse ? setConfirmStep(true) : setVerifyStep(true)
                      }
                    }}
                  />
                </DisplayFlex>
              </>
            )}

            {verifyStep && (
              <>
                <HeadingTwo
                  fontSize="20px"
                  margin="0 0 4px"
                  color={colors.black}
                  fontWeight="bold"
                  fontFamily={fontFamily.roboto}
                >
                  Insira o código enviado via e-mail para {email}
                </HeadingTwo>
                <Input
                  inputType="number"
                  inputFormat="label"
                  value={confirmCode}
                  onChange={(e: any) => setConfirmCode(e.target.value)}
                  placeholder="Código"
                  margin="16px 0 42px 0px"
                />

                <NewCodeBtn>
                  <Paragraph
                    fontSize="14px"
                    lineHeight="24px"
                    fontWeight="bold"
                    fontColor={colors.cinzaLightMedium}
                    fontFamily={fontFamily.roboto}
                  >
                    Enviar novo código
                    <i
                      style={{ marginLeft: `6px`, lineHeight: `10px` }}
                      className="icon-arrow-right"
                    />
                  </Paragraph>
                </NewCodeBtn>

                <DisplayFlex align="center">
                  <IconItem>{ClockIcon()}</IconItem>
                  <Paragraph
                    fontSize="12px"
                    fontFamily={fontFamily.roboto}
                    fontColor={colors.cinzaLightDark}
                  >
                    Você pode enviar novamente em{` `}
                    <span style={{ fontWeight: `bold` }}>60</span> segundos...
                  </Paragraph>
                </DisplayFlex>

                <DisplayFlex justify="flex-end">
                  <FilledButton
                    iconClassName="icon-arrow-right"
                    height="44px"
                    width="44px"
                    borderRounded
                    margin="16px 0 0 0"
                    roundedSize="40px"
                    bgColor1={colors.verdeMedium}
                    action={() => {
                      if (confirmCode !== ``) {
                        setConfirmStep(true);
                        setVerifyStep(false);
                      }
                    }}
                  />
                </DisplayFlex>
              </>
            )}

            {confirmStep && (
              <>
                <PaddingContainer
                  minHeight="calc(100vh - 351px)"
                  style={{ height: `100%` }}
                  padding="0"
                >
                  <HeadingTwo
                    fontSize="20px"
                    margin="0 0 4px"
                    color={colors.black}
                    fontWeight="bold"
                    fontFamily={fontFamily.roboto}
                  >
                    { keyInUse ? portabilityText.title : 'E-mail verificado'}
                  </HeadingTwo>
                  <Paragraph
                    fontSize="17px"
                    lineHeight="24px"
                    fontColor={colors.cinzaLightMedium}
                    fontFamily={fontFamily.roboto}
                    margin="0 0 46px 0"
                  >
                    {
                      keyInUse
                      ? portabilityText.description
                      : 'Receba transferência pelo Pix usando apenas o seu endereço de e-mail.'
                    }
                  </Paragraph>
                  <DisplayFlex align="center" justify="flex-start">
                    <span style={{ marginRight: `8px` }}>{EmailIcon()}</span>
                    <DisplayFlex direction="column">
                      <HeadingThree
                        fontWeight="bold"
                        margin="0 0 4px 0"
                        color={colors.black}
                        fontSize="14px"
                      >
                        E-mail
                      </HeadingThree>
                      <Paragraph
                        fontSize="14px"
                        color={colors.cinzaLightMedium}
                      >
                        {email}
                      </Paragraph>
                    </DisplayFlex>
                  </DisplayFlex>
                </PaddingContainer>
                <div
                  style={{
                    borderTop: `1px solid #ADB5BD`,
                    padding: `20px 20px 40px 20px`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `space-between`,
                  }}
                >
                  <Paragraph
                    fontFamily={fontFamily.roboto}
                    fontSize="14px"
                    fontColor={colors.cinzaLightDark}
                    lineHeight="20px"
                  >
                     {
                      keyInUse
                      ? portabilityText.observation
                      : `Quem usa Pix pode saber que você tem uma chave cadastrada
                        por telefone ou e-mail, mas sem ter acesso aos seus dados.
                        Ao te pagar, a pessoa verá seu nome completo e alguns
                        dígitos do seu CPF.`
                    }

                  </Paragraph>

                  <FilledButton
                    text="Registrar e-mail"
                    bgColor1={colors.verdeMedium}
                    textColor={colors.branco}
                    height="46px"
                    margin="42px 0 0 0"
                    action={() => registrarChave()}
                  />
                </div>
              </>
            )}
          </PaddingContainer>
        </>
      );
    case `celular`:
      return (
        <>
          <Header title="PIX - Registrar Chave" />
          <PaddingContainer padding="20px">
            {!verifyStep && !confirmStep && (
              <>
                <HeadingTwo
                  fontSize="20px"
                  margin="0 0 4px"
                  color={colors.black}
                  fontWeight="bold"
                  fontFamily={fontFamily.roboto}
                >
                  Registrar celular
                </HeadingTwo>
                <Paragraph
                  fontSize="17px"
                  lineHeight="24px"
                  fontColor={colors.cinzaLightMedium}
                  fontFamily={fontFamily.roboto}
                >
                  Insira o celular que você quer usar para receber
                  transferências por Pix.
                </Paragraph>
                <Input
                  inputType="tel"
                  inputFormat="label"
                  value={celular}
                  onChange={(e: any) => setCelular(e.target.value)}
                  placeholder="Digite aqui seu celular"
                  margin="16px 0 42px 0px"
                />
                <DisplayFlex justify="flex-end">
                  <FilledButton
                    iconClassName="icon-arrow-right"
                    height="44px"
                    width="44px"
                    borderRounded
                    roundedSize="40px"
                    bgColor1={colors.verdeMedium}
                    action={() => {
                      if (celular !== ``) {
                        keyInUse ? setConfirmStep(true) : setVerifyStep(true)
                      }
                    }}
                  />
                </DisplayFlex>
              </>
            )}

            {verifyStep && (
              <>
                <HeadingTwo
                  fontSize="20px"
                  margin="0 0 4px"
                  color={colors.black}
                  fontWeight="bold"
                  fontFamily={fontFamily.roboto}
                >
                  Insira o código via SMS para {celular}
                </HeadingTwo>
                <Input
                  inputType="number"
                  inputFormat="label"
                  value={confirmCode}
                  onChange={(e: any) => setConfirmCode(e.target.value)}
                  placeholder="Código"
                  margin="16px 0 42px 0px"
                />

                <NewCodeBtn>
                  <Paragraph
                    fontSize="14px"
                    lineHeight="24px"
                    fontWeight="bold"
                    fontColor={colors.cinzaLightMedium}
                    fontFamily={fontFamily.roboto}
                  >
                    Enviar novo código
                    <i
                      style={{ marginLeft: `6px`, lineHeight: `10px` }}
                      className="icon-arrow-right"
                    />
                  </Paragraph>
                </NewCodeBtn>

                <DisplayFlex align="center">
                  <IconItem>{ClockIcon()}</IconItem>
                  <Paragraph
                    fontSize="12px"
                    fontFamily={fontFamily.roboto}
                    fontColor={colors.cinzaLightDark}
                  >
                    Você pode enviar novamente em{` `}
                    <span style={{ fontWeight: `bold` }}>60</span> segundos...
                  </Paragraph>
                </DisplayFlex>

                <DisplayFlex justify="flex-end">
                  <FilledButton
                    iconClassName="icon-arrow-right"
                    height="44px"
                    width="44px"
                    borderRounded
                    margin="16px 0 0 0"
                    roundedSize="40px"
                    bgColor1={colors.verdeMedium}
                    action={() => {
                      if (confirmCode !== ``) {
                        setConfirmStep(true);
                        setVerifyStep(false);
                      }
                    }}
                  />
                </DisplayFlex>
              </>
            )}

            {confirmStep && (
              <>
                <PaddingContainer
                  minHeight="calc(100vh - 351px)"
                  style={{ height: `100%` }}
                  padding="0"
                >
                  <HeadingTwo
                    fontSize="20px"
                    margin="0 0 4px"
                    color={colors.black}
                    fontWeight="bold"
                    fontFamily={fontFamily.roboto}
                  >
                    {
                      keyInUse ? portabilityText.title : 'Celular verificado'
                    }
                  </HeadingTwo>
                  <Paragraph
                    fontSize="17px"
                    lineHeight="24px"
                    fontColor={colors.cinzaLightMedium}
                    fontFamily={fontFamily.roboto}
                    margin="0 0 46px 0"
                  >
                    {
                      keyInUse
                      ? portabilityText.description
                      : 'Receba transferência pelo Pix usando apenas o seu número de celular.'
                    }
                  </Paragraph>
                  <DisplayFlex align="center" justify="flex-start">
                    <span style={{ marginRight: `8px` }}>{CelularIcon()}</span>
                    <DisplayFlex direction="column">
                      <HeadingThree
                        fontWeight="bold"
                        margin="0 0 4px 0"
                        color={colors.black}
                        fontSize="14px"
                      >
                        Celular
                      </HeadingThree>
                      <Paragraph
                        fontSize="14px"
                        color={colors.cinzaLightMedium}
                      >
                        {celular}
                      </Paragraph>
                    </DisplayFlex>
                  </DisplayFlex>
                </PaddingContainer>
                <div
                  style={{
                    borderTop: `1px solid #ADB5BD`,
                    padding: `20px 20px 40px 20px`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `space-between`,
                  }}
                >
                  <Paragraph
                    fontFamily={fontFamily.roboto}
                    fontSize="14px"
                    fontColor={colors.cinzaLightDark}
                    lineHeight="20px"
                  >
                    {
                      keyInUse
                      ? portabilityText.observation
                      : 'Quem usa Pix pode saber que você tem uma chave cadastrada por telefone ou e-mail, mas sem ter acesso aos seus dados. Ao te pagar, a pessoa verá seu nome completo e alguns dígitos do seu CPF.'
                    }
                  </Paragraph>

                  <FilledButton
                    text="Registrar celular"
                    bgColor1={colors.verdeMedium}
                    textColor={colors.branco}
                    height="46px"
                    margin="42px 0 0 0"
                    action={() => registrarChave()}
                  />
                </div>
              </>
            )}
          </PaddingContainer>
        </>
      );
      case `cpf`:
        return (
          <>
            <Header title="PIX - Registrar Chave" />
            <PaddingContainer padding="20px">
              {!confirmStep && (
                <>
                  <HeadingTwo
                    fontSize="20px"
                    margin="0 0 4px"
                    color={colors.black}
                    fontWeight="bold"
                    fontFamily={fontFamily.roboto}
                  >
                    Registrar CPF
                  </HeadingTwo>
                  
                  <DisplayFlex justify="flex-end">
                    <FilledButton
                      iconClassName="icon-arrow-right"
                      height="44px"
                      width="44px"
                      borderRounded
                      roundedSize="40px"
                      bgColor1={colors.verdeMedium}
                      action={() => {

                          setConfirmStep(true);
                        
                      }}
                    />
                  </DisplayFlex>
                </>
              )}

              {confirmStep && (
                <>
                  <PaddingContainer
                    minHeight="calc(100vh - 351px)"
                    style={{ height: `100%` }}
                    padding="0"
                  >
                    <HeadingTwo
                      fontSize="20px"
                      margin="0 0 4px"
                      color={colors.black}
                      fontWeight="bold"
                      fontFamily={fontFamily.roboto}
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : 'CPF verificado'
                      }
                    </HeadingTwo>
                    <Paragraph
                      fontSize="17px"
                      lineHeight="24px"
                      fontColor={colors.cinzaLightMedium}
                      fontFamily={fontFamily.roboto}
                      margin="0 0 46px 0"
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : 'Receba transferência pelo Pix usando apenas o seu número do CPF.'
                      }
                    </Paragraph>
                    <DisplayFlex align="center" justify="flex-start">
                      <span style={{ marginRight: `8px` }}>{CelularIcon()}</span>
                      <DisplayFlex direction="column">
                        <HeadingThree
                          fontWeight="bold"
                          margin="0 0 4px 0"
                          color={colors.black}
                          fontSize="14px"
                        >
                          CPF
                        </HeadingThree>
                        <Paragraph
                          fontSize="14px"
                          color={colors.cinzaLightMedium}
                        >
                          {cpf}
                        </Paragraph>
                      </DisplayFlex>
                    </DisplayFlex>
                  </PaddingContainer>
                  <div
                    style={{
                      borderTop: `1px solid #ADB5BD`,
                      padding: `20px 20px 40px 20px`,
                      display: `flex`,
                      flexDirection: `column`,
                      justifyContent: `space-between`,
                    }}
                  >
                    <Paragraph
                      fontFamily={fontFamily.roboto}
                      fontSize="14px"
                      fontColor={colors.cinzaLightDark}
                      lineHeight="20px"
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : `Quem usa Pix pode saber que você tem uma chave cadastrada
                          por telefone ou e-mail, mas sem ter acesso aos seus dados.
                          Ao te pagar, a pessoa verá seu nome completo e alguns
                          dígitos do seu CPF.`
                      }
                    </Paragraph>

                    <FilledButton
                      text="Registrar CPF"
                      bgColor1={colors.verdeMedium}
                      textColor={colors.branco}
                      height="46px"
                      margin="42px 0 0 0"
                      action={() => registrarChave()}
                    />
                  </div>
                </>
              )}
            </PaddingContainer>
          </>
        );
        case `cnpj`:
        return (
          <>
            <Header title="PIX - Registrar Chave" />
            <PaddingContainer padding="20px">
              {!confirmStep && (
                <>
                  <HeadingTwo
                    fontSize="20px"
                    margin="0 0 4px"
                    color={colors.black}
                    fontWeight="bold"
                    fontFamily={fontFamily.roboto}
                  >
                    Registrar CNPJ
                  </HeadingTwo>
                  
                  <DisplayFlex justify="flex-end">
                    <FilledButton
                      iconClassName="icon-arrow-right"
                      height="44px"
                      width="44px"
                      borderRounded
                      roundedSize="40px"
                      bgColor1={colors.verdeMedium}
                      action={() => {

                          setConfirmStep(true);
                        
                      }}
                    />
                  </DisplayFlex>
                </>
              )}

              {confirmStep && (
                <>
                  <PaddingContainer
                    minHeight="calc(100vh - 351px)"
                    style={{ height: `100%` }}
                    padding="0"
                  >
                    <HeadingTwo
                      fontSize="20px"
                      margin="0 0 4px"
                      color={colors.black}
                      fontWeight="bold"
                      fontFamily={fontFamily.roboto}
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : 'CNPJ verificado'
                      }
                    </HeadingTwo>
                    <Paragraph
                      fontSize="17px"
                      lineHeight="24px"
                      fontColor={colors.cinzaLightMedium}
                      fontFamily={fontFamily.roboto}
                      margin="0 0 46px 0"
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : 'Receba transferência pelo Pix usando apenas o seu número do CNPJ.'
                      }
                    </Paragraph>
                    <DisplayFlex align="center" justify="flex-start">
                      <span style={{ marginRight: `8px` }}>{ShieldIcon()}</span>
                      <DisplayFlex direction="column">
                        <HeadingThree
                          fontWeight="bold"
                          margin="0 0 4px 0"
                          color={colors.black}
                          fontSize="14px"
                        >
                          CNPJ
                        </HeadingThree>
                        <Paragraph
                          fontSize="14px"
                          color={colors.cinzaLightMedium}
                        >
                          {cnpj}
                        </Paragraph>
                      </DisplayFlex>
                    </DisplayFlex>
                  </PaddingContainer>
                  <div
                    style={{
                      borderTop: `1px solid #ADB5BD`,
                      padding: `20px 20px 40px 20px`,
                      display: `flex`,
                      flexDirection: `column`,
                      justifyContent: `space-between`,
                    }}
                  >
                    <Paragraph
                      fontFamily={fontFamily.roboto}
                      fontSize="14px"
                      fontColor={colors.cinzaLightDark}
                      lineHeight="20px"
                    >
                      {
                        keyInUse
                        ? portabilityText.title
                        : `Quem usa Pix pode saber que você tem uma chave cadastrada
                          por telefone ou e-mail, mas sem ter acesso aos seus dados.
                          Ao te pagar, a pessoa verá seu nome completo e alguns
                          dígitos do seu CPF.`
                      }
                    </Paragraph>

                    <FilledButton
                      text="Registrar CNPJ"
                      bgColor1={colors.verdeMedium}
                      textColor={colors.branco}
                      height="46px"
                      margin="42px 0 0 0"
                      action={() => registrarChave()}
                    />
                  </div>
                </>
              )}
            </PaddingContainer>
          </>
        );
    case `aleatoria`:
      return (
        <>
          <Header title="PIX - Registrar Chave" />
          <PaddingContainer padding="20px">
            <PaddingContainer
              minHeight="calc(100vh - 351px)"
              style={{ height: `100%` }}
              padding="0"
            >
              <HeadingTwo
                fontSize="20px"
                margin="0 0 4px"
                color={colors.black}
                fontWeight="bold"
                fontFamily={fontFamily.roboto}
              >
                Criar chave aleatória
              </HeadingTwo>
              <Paragraph
                fontSize="17px"
                lineHeight="24px"
                fontColor={colors.cinzaLightMedium}
                fontFamily={fontFamily.roboto}
                margin="0 0 46px 0"
              >
                Receba transferência pelo Pix usando apenas uma chave aleatória.
              </Paragraph>
              <DisplayFlex align="center" justify="flex-start">
                <span style={{ marginRight: `8px` }}>{ShieldIcon()}</span>
                <DisplayFlex direction="column">
                  <HeadingThree
                    fontWeight="bold"
                    margin="0 0 4px 0"
                    color={colors.black}
                    fontSize="14px"
                  >
                    Chave aleatória
                  </HeadingThree>
                </DisplayFlex>
              </DisplayFlex>
            </PaddingContainer>
            <div
              style={{
                borderTop: `1px solid #ADB5BD`,
                padding: `20px 20px 40px 20px`,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
              }}
            >
              <Paragraph
                fontFamily={fontFamily.roboto}
                fontSize="14px"
                fontColor={colors.cinzaLightDark}
                lineHeight="20px"
              >
                Quem usa Pix pode saber que você tem uma chave cadastrada por
                telefone ou e-mail, mas sem ter acesso aos seus dados.
                <br />
                Ao te pagar, a pessoa verá seu nome completo e alguns dígitos do
                seu CPF.
              </Paragraph>

              <FilledButton
                text="Registrar chave aleatória"
                bgColor1={colors.verdeMedium}
                textColor={colors.branco}
                height="46px"
                margin="42px 0 0 0"
                action={() => registrarChave()}
              />
            </div>
          </PaddingContainer>
        </>
      );
    default:
      return <></>;
  }
  // return (
  //   <>

  //   </>
  // );
}
