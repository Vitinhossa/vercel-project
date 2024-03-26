import React, { useState, useEffect } from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
import RegisterTemplate from '@/components/templates/registerTemplate';

interface IRegisterTypes {
  id: number;
  title: string;
  svg: string;
  iconClassName: string;
  route: string;
}

interface ICheckCards {
  id: number;
  title: string;
}

const Register = () => {
  const [registerTypes, setRegisterTypes] = useState<IRegisterTypes[]>([]);
  const [checkTypes, setCheckTypes] = useState<ICheckCards[]>([]);

  useEffect(() => {
    const items: IRegisterTypes[] = [
      {
        id: 0,
        title: `Para você`,
        iconClassName: ``,
        svg: `/person_icon.svg`,
        route: `/register/paravoce`,
      },
      {
        id: 1,
        title: `Para seu negócio`,
        iconClassName: ``,
        svg: `building_icon.svg`,
        route: `/register/paraseunegocio`,
      },
    ];

    const itemsCheck: ICheckCards[] = [
      {
        id: 0,
        title: `Foto de frente do RG ou CNH`,
      },
      {
        id: 1,
        title: `Foto do verso do RG ou CNH`,
      },
      {
        id: 3,
        title: `Selfie segurando o RG ou CNH`,
      },
    ];

    setCheckTypes(itemsCheck);
    setRegisterTypes(items);
  }, []);

  return (
    <ContentContainer>
      <RegisterTemplate actionCards={registerTypes} checkCards={checkTypes} />
    </ContentContainer>
  );
};

export default Register;
