import React, { useState, useEffect } from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
import LoginTemplate from '@/components/templates/loginTemplate';

interface ILoginTypes {
  id: number;
  title: string;
  svg: string;
  iconClassName: string;
  route: string;
}

const Login = () => {
  const [loginTypes, setLoginTypes] = useState<ILoginTypes[]>([]);

  useEffect(() => {
    const items: ILoginTypes[] = [
      {
        id: 0,
        title: `Para você`,
        iconClassName: ``,
        svg: `/person_icon.svg`,
        route: `/login/paravoce`,
      },
      {
        id: 1,
        title: `Para seu negócio`,
        iconClassName: ``,
        svg: `building_icon.svg`,
        route: `/login/paraseunegocio`,
      },
    ];

    setLoginTypes(items);
  }, []);

  return (
    <ContentContainer>
      <LoginTemplate
        pageTitle="Login"
        pageDescription="Qual conta você deseja acessar?"
        actionCards={loginTypes}
        type="select"
        step={0}
      />
    </ContentContainer>
  );
};

export default Login;
