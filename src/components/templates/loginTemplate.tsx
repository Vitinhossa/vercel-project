/*eslint-disable */
// @ts-ignore
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';

import ActionIconCard from '../molecules/ActionIconCard';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import CodeInputContainer from '../molecules/CodeInputContainer';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingOne, Paragraph } from '../atoms/Text';
import Link from '../atoms/Link';
import InputCnpjCpf from '../atoms/Input-cnpj-cpf';
import Input from '../atoms/Input';
import BackButton from '../atoms/BackButton';
import FilledButton from '../atoms/FilledButton';
import AlertModal from '../molecules/AlertModal';
import { useAlert } from 'react-alert';
import api from '@/services/api';
import Cookies from 'js-cookie'
import {useAuth} from '@/contexts/auth';


interface ILoginTemplate {
  contentPadding?: string;
  pageTitle?: string;
  pageDescription?: string;
  type?: string;
  step?: number;
  actionCards: Array<{
    id: number;
    title: string;
    svg: string;
    iconClassName: string;
    route: string;
  }>;

  // texts
  passwordText?: string;
  recoverPasswordText?: string;
  emailText?: string;
}

interface IActionCards {
  id: number;
  title: string;
  svg: string;
  iconClassName: string;
  route: string;
}

export default function LoginTemplate({
  pageTitle,
  pageDescription,
  actionCards,
  type,
  step,
  contentPadding,
  passwordText,
  emailText,
}: ILoginTemplate) {
  const router = useRouter();
  const alert = useAlert();
  const [loginTypes, setLoginTypes] = useState<IActionCards[]>([]);
  const [loginStep, setLoginStep] = useState(0);
  const [codeValue, setCodeValue] = useState(``);
  const [stepButtonIsActive, setStepButtonIsActive] = useState(false);

  const [passwordBtnIsActive, setPasswordBtnIsActive] = useState(false);
  const [password, setPassword] = useState(``);

  const [recoverBtnIsActive, setRecoverBtnIsActive] = useState(false);
  const [passwordRecover, setPasswordRecover] = useState(``);
  const [recoverSuccess, setRecoverSuccess] = useState(false);

  const { login, logout }:any = useAuth();

  useEffect(() => {
    setLoginTypes(actionCards);
  }, [actionCards]);

  useEffect(() => {
    if (step) {
      setLoginStep(step);
    }
  }, [step]);

  const buildActionCards = () =>
    loginTypes.map((action) => (
      <ActionIconCard
        key={action.id}
        title={action.title}
        height="76px"
        iconMargin="0 12px 0 0"
        titleSize="14px"
        hasShadow
        svg={action.svg}
        containerMargin="0 0 20px 0"
        action={() => {
          setLoginStep(1);
          router.push(action.route);
        }}
      />
    ));

  // Handle step button [cpf or cnpj check]
  useEffect(() => {
    if (codeValue !== ``) {
      if (codeValue.indexOf(`_`) === -1) {
        if (type === `paravoce` && codeValue.length >= 14) {
          setStepButtonIsActive(true);
        } else if (type === `paraseunegocio` && codeValue.length >= 18) {
          setStepButtonIsActive(true);
        }
      } else {
        setStepButtonIsActive(false);
      }
    }
  }, [codeValue]);

  // Handle password button [login check]
  useEffect(() => {
    if (password !== `` && password.length >= 8) {
      setPasswordBtnIsActive(true);
    } else {
      setPasswordBtnIsActive(false);
    }
  }, [password]);

  // Handle recover password button [email check]
  useEffect(() => {
    if (passwordRecover !== ``) {
      setRecoverBtnIsActive(true);
    } else {
      setRecoverBtnIsActive(false);
    }
  }, [passwordRecover]);

  return (
    <PaddingContainer padding={contentPadding || `20px 20px`}>
      <BackButton
        textColor={colors.cinzaMediumDark}
        clicked={() => {
          router.back();
          if (loginStep > 0) {
            if (loginStep === 1 && type === `recuperarsenha`) {
              setLoginStep(2);
            } else {
              setLoginStep(loginStep - 1);
            }
          }
        }}
        width="fit-content"
        marginBottom="20px"
      />
      {(loginStep === 0 || loginStep === 1) && (
        <>
          <HeadingOne
            margin="0px 0 8px 0"
            color={colors.verdeDark}
            fontSize="23px"
            lineHeight="32px"
          >
            {pageTitle}
          </HeadingOne>
          <Paragraph
            fontSize="15px"
            lineHeight="22px"
            fontColor={colors.cinzaLightDark}
            margin="0 0 18px 0"
          >
            {pageDescription}
          </Paragraph>

          {/* Step: choose account type */}
          {type === `select` && buildActionCards()}

          {/* Steps: account type */}
          {type === `paravoce` && (
            <>
              <InputCnpjCpf
                type="cpf"
                labelText="Digite seu CPF"
                value={codeValue}
                onChange={(event: { target: { value: string } }) =>
                  setCodeValue(event.target.value)
                }
              />
              <div
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  justifyContent: `flex-end`,
                }}
              >
                <FilledButton
                  borderRounded
                  roundedSize="50%"
                  bgColor1={
                    stepButtonIsActive
                      ? colors.verdeMedium
                      : colors.cinzaLightMedium
                  }
                  iconClassName="icon-arrow-right"
                  width="45px"
                  height="45px"
                  margin="40px 0 0 0"
                  action={() => {
                    if (stepButtonIsActive) {
                      setLoginStep(2);
                    }
                  }}
                />
              </div>
              {/* <FilledButtonContainer
                height="46px"
                btnText="Entrar"
                btnBgColor1={
                  stepButtonIsActive ? colors.verdeMedium : colors.cinzaLightMedium
                }
                btnIsRounded
                btnRoundedSize="50px"
                btnTextColor={colors.branco}
                margin="32px 0 0 0"
                btnAction={() => {
                  if (stepButtonIsActive) {
                    router.push(`/home`);
                  }
                }}
              /> */}
            </>
          )}
          {type === `paraseunegocio` && (
            <>
              <InputCnpjCpf
                type="cnpj"
                labelText="Digite seu CNPJ"
                value={codeValue}
                onChange={(event: { target: { value: string } }) =>
                  setCodeValue(event.target.value)
                }
              />

              <div
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  justifyContent: `flex-end`,
                }}
              >
                <FilledButton
                  borderRounded
                  roundedSize="50%"
                  bgColor1={
                    stepButtonIsActive
                      ? colors.verdeMedium
                      : colors.cinzaLightMedium
                  }
                  iconClassName="icon-arrow-right"
                  width="45px"
                  height="45px"
                  margin="40px 0 0 0"
                  action={() => {
                    if (stepButtonIsActive) {
                      setLoginStep(2);
                      setStepButtonIsActive(false);
                    }
                  }}
                />
              </div>

              {/* <FilledButtonContainer
                height="46px"
                btnText="Entrar"
                btnBgColor1={
                  stepButtonIsActive ? colors.verdeMedium : colors.cinzaLightMedium
                }
                btnIsRounded
                btnRoundedSize="50px"
                btnTextColor={colors.branco}
                margin="32px 0 0 0"
                btnAction={() => {
                  if (stepButtonIsActive) {
                    router.push(`/home`);
                  }
                }}
              /> */}
            </>
          )}

          {/* Step: forgot password */}
          {type === `recuperarsenha` && (
            <>
              <Paragraph
                margin="20px 0 18px 0"
                fontSize="15px"
                lineHeight="22px"
                fontColor={colors.cinzaLightDark}
              >
                {emailText}
              </Paragraph>
              <Input
                inputType="email"
                inputFormat="label"
                labelText="Email"
                labelColor={colors.cinzaMediumDark}
                placeholder="example@mail.com"
                value={passwordRecover}
                onChange={(event: { target: { value: string } }) =>
                  setPasswordRecover(event.target.value)
                }
              />

              <FilledButtonContainer
                height="46px"
                btnText="Enviar"
                btnBgColor1={
                  recoverBtnIsActive
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                btnIsRounded
                btnRoundedSize="50px"
                btnTextColor={colors.branco}
                margin="32px 0 0 0"
                btnAction={() => {
                  if (recoverBtnIsActive) {

                    (async function() {

                      // abrir modal
                    const { data: recovery }:any = await api.post('auth/recovery', { passwordRecover, type });
                    console.log(recovery);
                    if(recovery.success)
                    {
                      setRecoverSuccess(true);
                    }
                    else {
                      const alerta = alert.show('Erro na recuperação', {
                        timeout: 8000, // custom timeout just for this one alert
                        type: 'error'
                      })
                    }

                    }());
                    
                  }
                }}
              />

              {recoverSuccess && (
                <AlertModal
                  btnText="Ok!"
                  text="Uma nova senha foi enviada, verifique seu e-mail!"
                  iconName="icon-circle-check"
                  iconColor={colors.verdeLight}
                  btnAction={() => {
                    router.back();
                    setLoginStep(1);
                  }}
                />
              )}
            </>
          )}
        </>
      )}

      {/* Step: password */}
      {loginStep === 2 && (
        <>
          <HeadingOne
            margin="0px 0 8px 0"
            color={colors.verdeDark}
            fontSize="23px"
            lineHeight="32px"
          >
            {pageTitle}
          </HeadingOne>
          <Paragraph
            fontSize="15px"
            lineHeight="22px"
            fontColor={colors.cinzaLightDark}
            margin="0 0 18px 0"
          >
            {passwordText}
          </Paragraph>

          {/* input de senha */}
          <CodeInputContainer
            getInputValue={(e) => setPassword(e)}
            inputLength={8}
            hasEyeIcon
            labelText="Senha"
            margin="18px 0"
          />

          <Link
            url="/login/recuperarsenha"
            clicked={() => {
              setLoginStep(1);
              setStepButtonIsActive(false);
            }}
            fontColor={colors.verdeMedium}
          >
            Esqueci minha senha
          </Link>

          <FilledButtonContainer
            height="46px"
            btnText="Entrar"
            btnBgColor1={
              passwordBtnIsActive ? colors.verdeMedium : colors.cinzaLightMedium
            }
            btnIsRounded
            btnRoundedSize="50px"
            btnTextColor={colors.branco}
            margin="32px 0 0 0"
            btnAction={() => {
              if (passwordBtnIsActive) {

                (async function() {

                  if(!await login(codeValue, password))
                  {
                    const alerta = alert.show('erro na autenticação', {
                      timeout: 8000, // custom timeout just for this one alert
                      type: 'error'
                    })
                  }
                }());


              }
            }}
          />
        </>
      )}
    </PaddingContainer>
  );
}
