/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';
import styled from 'styled-components';
import ContentContainer from '@/components/atoms/ContentContainer';
import FilledButton from '@/components/atoms/FilledButton';
import { HeadingOne, HeadingThree, Paragraph } from '@/components/atoms/Text';
import Header from '@/components/molecules/Header';
import Input from '@/components/atoms/Input';
import ContainerFlex from '@/components/atoms/ContainerFlex';
import DataModal from '@/components/molecules/DataModal';
import Link from '@/components/atoms/Link';
import EmailIcon from '@/assets/svg/email';
import CelularIcon from '@/assets/svg/celular';
import DocumentoIcon from '@/assets/svg/documento';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'

const KeyList = styled.ul`
  list-style: none;
  width: 100%;
`;

const ModalKey = styled.li`
  display: flex;
  width: 100%;

  span {
    margin-right: 8px;
  }

  p {
    color: ${colors.black};
    font-family: ${fontFamily.roboto};
  }

  a {
    padding: 7.5px 0;
  }
`;

export default function Depositar() {
  const [value, setValue] = useState(`0,00`);
  const [identifier, setIdentifier] = useState(``);
  const [step, setStep] = useState(0);
  const [modalContacts, setModalContacts] = useState(false);
  const [modalFinish, setModalFinish] = useState(false);

  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  return (
    <ContentContainer>
      <Header
        title="Boleto - Depositar"
        justifyContent="flex-start"
        arrowClicked={() => setStep(0)}
      />
      {step === 0 && (
        <>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              alignItems: `center`,
              padding: `20px`,
            }}
          >
            <Paragraph>Qual valor você quer depositar usando Boleto?</Paragraph>
            <img src="/icons/qr-code.svg" alt="" />
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              alignItems: `center`,
              padding: `20px`,
            }}
          >
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `20px`,
              }}
            >
              <Paragraph
                fontWeight="400"
                fontSize="12px"
                lineHeight="16px"
                margin="0 0 0 25px"
              >
                R$
              </Paragraph>
              <Input
                inputType="text"
                value={value}
                inputFormat="without-bg"
                leftText="R$"
                onChange={(e: any) => setValue(e.target.value)}
                inputWidth="125px"
              />
            </div>
            <Paragraph style={{ marginTop: `10px` }}>
              Saldo disponível: {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(user.meus_dados.saldo)}
            </Paragraph>
          </div>
          <div style={{ padding: `20px`, marginTop: `50px` }}>
            <FilledButton
              text="Confirmar"
              borderRounded
              roundedSize="5px"
              bgColor1={value === `0,00` ? `#ADB5BD` : `#ff9f1e`}
              height="46px"
              textColor="white"
              action={() => setStep(3)}
            />
            <FilledButton
              text="Cancelar"
              borderRounded
              roundedSize="5px"
              height="46px"
            />
          </div>
        </>
      )}

      {step === 3 && (
        <ContainerFlex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="20px"
        >
          <HeadingOne color="#ff9f1e" lineHeight="44px" margin="0 10px 0 0">
            R$ {value}
          </HeadingOne>
          <Paragraph fontColor="#ADB5BD" lineHeight="24px">
            Para Seu Nome
          </Paragraph>
          <HeadingThree margin="24px 0 4px 0" lineHeight="28px">
            Utilize o código para depositar este valor na sua conta do PixLand.
          </HeadingThree>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            padding="20px"
            bgColor="#F0F1F5"
            width="100%"
            borderRadius="15px"
            margin="28px 0 0 0"
          >
            <Paragraph>
              Codigo boleto
            </Paragraph>
          </ContainerFlex>

          <FilledButton
            text="Copiar Código"
            borderRounded
            roundedSize="5px"
            bgColor1="#ff9f1e"
            height="46px"
            textColor="white"
            action={() => setModalFinish(true)}
            margin="46px 0 0 0"
          />
        </ContainerFlex>
      )}
      {modalContacts && (
        <DataModal closeAction={() => setModalContacts(false)}>
          <KeyList>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/email"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
                fontWeight="400"
              >
                <span>{EmailIcon()}</span>

                <ContainerFlex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Paragraph fontSize="14px" fontWeight="700">
                    E-mail
                  </Paragraph>
                  <Paragraph fontSize="14px" fontWeight="400">
                    angelosDiego@gmail.com
                  </Paragraph>
                </ContainerFlex>
              </Link>
            </ModalKey>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/celular"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
              >
                <span>{CelularIcon()}</span>
                <ContainerFlex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Paragraph fontSize="14px" fontWeight="700">
                    Celular
                  </Paragraph>
                  <Paragraph fontSize="14px" fontWeight="400">
                    98240-1273
                  </Paragraph>
                </ContainerFlex>
              </Link>
            </ModalKey>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/aleatoria"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
              >
                <span>{DocumentoIcon()}</span>
                <ContainerFlex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Paragraph fontSize="14px" fontWeight="700">
                    CPF
                  </Paragraph>
                  <Paragraph fontSize="14px" fontWeight="400">
                    059.860.161-90
                  </Paragraph>
                </ContainerFlex>
              </Link>
            </ModalKey>
          </KeyList>
        </DataModal>
      )}
      {modalFinish && (
        <DataModal closeAction={() => setModalFinish(false)}>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            // padding="20px"
            // bgColor="#F0F1F5"
            // width="100%"
            // borderRadius="15px"
            // margin="28px 0 0 0"
          >
            <Paragraph fontWeight="700" fontSize="20px" lineHeight="28px">
              Código copiado
            </Paragraph>
            <Paragraph
              fontWeight="400"
              fontSize="17px"
              lineHeight="24px"
              margin="4px 0 0 0"
            >
              Agora acesse a área Boleto da outra instituição e cole este código
              para o dinheiro cair na sua conta do PixLand.
            </Paragraph>
            <FilledButton
              text="Entendi"
              borderRounded
              roundedSize="5px"
              bgColor1="#ff9f1e"
              height="46px"
              textColor="white"
              action={() => setModalFinish(false)}
              margin="40px 0 0 0"
            />
          </ContainerFlex>
        </DataModal>
      )}
    </ContentContainer>
  );
}
