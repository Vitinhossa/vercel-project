/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContentContainer from '@/components/atoms/ContentContainer';
import LoginTemplate from '../../components/templates/loginTemplate';

const Login = () => {
  const [selectedType, setSelectedType] = useState<string>(``);
  const router = useRouter();
  const { type } = router.query;

  const paramError = () => router.push(`/login`);

  useEffect(() => {
    if (type) {
      setSelectedType(type.toString());

      if (
        type !== `paravoce` &&
        type !== `paraseunegocio` &&
        type !== `recuperarsenha`
      ) {
        paramError();
      }
    }
  }, [type]);

  // texts
  const passwordText = `Agora digite a sua senha de acesso.`;
  const recoverPasswordText = `Enviaremos um código de recuperação para seu e-mail ex***@email.com.`;
  const emailText = `Por favor preencha o endereço:`;

  switch (selectedType) {
    case `paravoce`:
      return (
        <ContentContainer>
          <LoginTemplate
            pageTitle="Login"
            pageDescription="Para fazer o login da sua conta precisamos do número do seu CPF."
            passwordText={passwordText}
            recoverPasswordText={recoverPasswordText}
            emailText={emailText}
            type={selectedType}
            actionCards={[]}
          />
        </ContentContainer>
      );
      break;
    case `paraseunegocio`:
      return (
        <ContentContainer>
          <LoginTemplate
            pageTitle="Login"
            pageDescription="Para fazer o login da sua conta precisamos do número do seu CNPJ."
            passwordText={passwordText}
            recoverPasswordText={recoverPasswordText}
            emailText={emailText}
            type={selectedType}
            actionCards={[]}
          />
        </ContentContainer>
      );
      break;
    case `recuperarsenha`:
      return (
        <ContentContainer>
          <LoginTemplate
            pageTitle="Esqueceu a senha?"
            pageDescription={recoverPasswordText}
            passwordText={passwordText}
            recoverPasswordText={recoverPasswordText}
            emailText={emailText}
            type={selectedType}
            actionCards={[]}
            // step={3}
          />
        </ContentContainer>
      );
    default:
      return <> </>;
      break;
  }
};

export default Login;
