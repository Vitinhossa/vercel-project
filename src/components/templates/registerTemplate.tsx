/*eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import Image from 'next/image';

import invite from '../../../public/invite.png';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingOne, Paragraph } from '../atoms/Text';
import ProgressBar from '../atoms/ProgressBar/index';
import CodeInput from '../atoms/CodeInput/index';
import ActionIconCard from '../molecules/ActionIconCard';
import BackButton from '../atoms/BackButton';
import FilledButton from '../atoms/FilledButton';
import { useAlert } from 'react-alert';
import api from '@/services/api';



interface IRegisterTemplate {
  contentPadding?: string;
  type?: string;
  actionCards: Array<{
    id: number;
    title: string;
    svg: string;
    iconClassName: string;
    route: string;
  }>;
  checkCards: Array<{
    id: number;
    title: string;
  }>;
}

interface IActionCards {
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

export default function RegisterTemplate({
  contentPadding,
  actionCards,
  checkCards,
}: // type,
IRegisterTemplate) {
  const router = useRouter();
  const alert = useAlert();

  const [registerStep, setRegisterStep] = useState(0);
  const [registerTypes, setRegisterTypes] = useState<IActionCards[]>([]);
  const [checkTypes, setCheckTypes] = useState<ICheckCards[]>([]);
  const [stepButtonIsActive, setStepButtonIsActive] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    setRegisterTypes(actionCards);
    setCheckTypes(checkCards);
  }, [actionCards, checkCards]);



  const buildActionCards = () =>
    registerTypes.map((action) => (
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
          router.push(action.route);
          // setRegisterStep(2);
        }}
      />
    ));

  return (
    <>
      {registerStep === 0 && (
        <PaddingContainer padding="20px 20px">
          <BackButton
            textColor={colors.cinzaMediumDark}
            clicked={() => router.push(`/`)}
            width="fit-content"
            marginBottom="20px"
          />
          <div
            style={{
              width: `100%`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              marginBottom: `24px`,
            }}
          >
            <Image src={invite} alt="" />
          </div>
          <PaddingContainer padding={contentPadding || `20px 20px`}>
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              Código do seu convite
            </HeadingOne>
            <Paragraph
              fontSize="15px"
              lineHeight="22px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 18px 0"
            >
              Trabalhamos apenas com a indicação de nossos membros associados.
            </Paragraph>
            <ProgressBar width="10%" />
            <Paragraph
              fontWeight="400"
              fontSize="17px"
              lineHeight="24px"
              margin="16px 0 0 0"
              color={colors.cinzaMediumDark}
            >
              Código do seu convite
            </Paragraph>
            <CodeInput
              fields={7}
              inputType="text"
              onChange={(e: string) => {
                e.length === 7 && setStepButtonIsActive(true)
                setInviteCode(e)
              }}
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

                        (async function() {

                                const { data: token } = await api.post('auth/inviteCode', {inviteCode})
                                console.log(token);
                                if (token.success) {
                                  setRegisterStep(registerStep + 1);
                                  setStepButtonIsActive(false);
                                  localStorage.setItem('inviteCode', inviteCode);
                                }
                                else {
                                  const alerta = alert.show('código de convite inválido', {
                                    timeout: 8000, // custom timeout just for this one alert
                                    type: 'error'
                                  })
                                  //setRegisterStep(registerStep + 1);
                                  //setStepButtonIsActive(false);
                                  //this.refs.notifyEl.notificationAlert(options);
                                }

                        }());
                                              

                      }


                }}
              />
            </div>
          </PaddingContainer>
        </PaddingContainer>
      )}

      {registerStep === 1 && (
        <PaddingContainer padding="20px 20px">
          <BackButton
            textColor={colors.cinzaMediumDark}
            width="fit-content"
            marginBottom="20px"
            clicked={() => setRegisterStep(registerStep - 1)}
          />
          <>
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
              Qual tipo de conta você deseja criar?
            </Paragraph>
            {buildActionCards()}
          </>
        </PaddingContainer>
      )}
    </>
  );
}
