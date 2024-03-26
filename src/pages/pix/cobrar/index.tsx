/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';
import React, { useState } from 'react';
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
import ShareDataModal from '@/components/molecules/ShareDataModal';

export default function Cobrar() {
  const [value, setValue] = useState(`0,00`);
  const [identifier, setIdentifier] = useState(``);
  const [step, setStep] = useState(0);
  const [modalContacts, setModalContacts] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

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

  return (
    <ContentContainer>
      <Header
        title="PIX - Cobrar"
        justifyContent="flex-start"
        arrowClicked={() => setStep(step - 1)}
      />
      {step === 0 && (
        <>
          <ContainerFlex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="20px"
          >
            <Paragraph>Qual valor você quer receber?</Paragraph>
            <img src="/icons/qr-code.svg" alt="" />
          </ContainerFlex>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            <ContainerFlex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="20px"
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
            </ContainerFlex>
            <Paragraph style={{ marginTop: `10px` }}>
              Saldo disponível: R$ 3.000,00
            </Paragraph>
          </ContainerFlex>
          <ContainerFlex padding="20px" margin="50px 0 0 0">
            <FilledButton
              text="Confirmar"
              borderRounded
              roundedSize="5px"
              bgColor1={value === `0,00` ? `#ADB5BD` : `#ff9f1e`}
              height="46px"
              textColor="white"
              action={() => setStep(step + 1)}
            />
            <FilledButton
              text="Cancelar"
              borderRounded
              roundedSize="5px"
              height="46px"
            />
          </ContainerFlex>
        </>
      )}
      {step === 1 && (
        <>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            padding="20px"
          >
            <HeadingThree margin="0 0 4px 0" lineHeight="28px">
              Recebendo
            </HeadingThree>
            <Paragraph fontColor="#ADB5BD" lineHeight="24px">
              Quem for te pagar vai ver essas informações quando escanear o QR
              Code.
            </Paragraph>
          </ContainerFlex>
          <ContainerFlex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            padding="20px"
          >
            <HeadingOne color="#ff9f1e" lineHeight="44px" margin="0 10px 0 0">
              R$ {value}
            </HeadingOne>
            <img src="/icons/pencil.svg" alt="" />
          </ContainerFlex>
          <ContainerFlex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            <img src="/icons/chat.svg" alt="" />
            <Paragraph fontColor="#ff9f1e" fontWeight="500" margin="0 0 0 10px">
              Escrever uma mensagem
            </Paragraph>
          </ContainerFlex>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            <ContainerFlex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
              width="100%"
            >
              <Paragraph fontWeight="500" fontSize="17px" fontColor="#495057">
                Chave PIX
              </Paragraph>
              <Paragraph onClick={() => setModalContacts(true)}>
                Email &gt;
              </Paragraph>
            </ContainerFlex>
            <ContainerFlex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
              width="100%"
            >
              <Paragraph fontWeight="500" fontSize="17px" fontColor="#495057">
                Nome
              </Paragraph>
              <Paragraph>Diego Ângelos Xavier</Paragraph>
            </ContainerFlex>

            <ContainerFlex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
              width="100%"
            >
              <Paragraph fontWeight="500" fontSize="17px" fontColor="#495057">
                CPF
              </Paragraph>
              <Paragraph>***.860.161-**</Paragraph>
            </ContainerFlex>
            <ContainerFlex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
              width="100%"
            >
              <Paragraph fontWeight="500" fontSize="17px" fontColor="#495057">
                Instituição
              </Paragraph>
              <Paragraph>PixLand</Paragraph>
            </ContainerFlex>
            <ContainerFlex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="20px"
              width="100%"
            >
              <Paragraph fontWeight="500" fontSize="17px" fontColor="#495057">
                Identificador
              </Paragraph>
              <Paragraph onClick={() => setStep(2)}> &gt; </Paragraph>
            </ContainerFlex>
            <FilledButton
              text="Criar QR code"
              borderRounded
              roundedSize="5px"
              bgColor1="#ff9f1e"
              height="46px"
              textColor="white"
              action={() => setStep(3)}
              margin="46px 0 0 0"
            />
          </ContainerFlex>
        </>
      )}
      {step === 2 && (
        <ContainerFlex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="20px"
        >
          <HeadingThree margin="0 0 4px 0" lineHeight="28px">
            Escreva um identificador
          </HeadingThree>
          <Paragraph fontColor="#ADB5BD" lineHeight="24px">
            Esse identificador será enviado junto com o valor a ser pago.
          </Paragraph>
          <Input
            inputFormat="description"
            inputType="text"
            placeholder="Seu identificador aqui..."
            margin="28px 0 0 0"
            descriptionPosition="right"
            descriptionText={`${identifier.length}/25`}
            value={identifier}
            onChange={(e: any) => setIdentifier(e.target.value)}
            maxLength={25}
          />
          <FilledButton
            text="Confirmar"
            borderRounded
            roundedSize="5px"
            bgColor1="#ff9f1e"
            height="46px"
            textColor="white"
            action={() => setStep(step - 1)}
            margin="46px 0 0 0"
          />
        </ContainerFlex>
      )}
      {step === 3 && (
        <ContainerFlex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="20px"
        >
          <HeadingThree margin="0 0 4px 0" lineHeight="28px">
            Mostre o QR code ou compartilhe o link
          </HeadingThree>
          <Paragraph fontColor="#ADB5BD" lineHeight="24px">
            Quem for te pagar precisa abrir o app em que vai fazer a
            transferência e escanear o QR code.
          </Paragraph>
          <ContainerFlex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            margin="36px 0 0 0"
          >
            <div
              style={{
                width: `219px`,
                height: `219px`,
                border: `1px solid #ff9f1e`,
                borderRadius: `10px`,
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
                justifyContent: `center`,
              }}
            >
              <img src="/qr.png" alt="" />
            </div>
          </ContainerFlex>
          <ContainerFlex
            flexDirection="row"
            borderTop="1px solid #ADB5BD"
            borderBottom="1px solid #ADB5BD"
            padding="24px"
            margin="64px 0 0 0"
            width="100%"
            alignItems="center"
          >
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-start`,
                alignItems: `center`,
                width: `10%`,
                height: `100%`,
              }}
            >
              <img src="/icons/share.svg" alt="" />
            </div>
            <ContainerFlex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              width="90%"
              clicked={() => setOpenShareModal(true)}
            >
              <Paragraph
                fontSize="14px"
                fontWeight="700"
                lineHeight="16px"
                fontColor="#495057"
              >
                Compartilhar link
              </Paragraph>
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="14px"
                margin="8px 0 0 0"
              >
                Se não conseguir mostrar o QR code, compartilhe o link para
                receber.
              </Paragraph>
            </ContainerFlex>
          </ContainerFlex>
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
      {openShareModal && (
        <ShareDataModal
          closeAction={() => setOpenShareModal(false)}
          title="Compartilhar Chave"
        />
      )}
    </ContentContainer>
  );
}
