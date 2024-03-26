/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
import FilledButton from '@/components/atoms/FilledButton';
import { HeadingOne, HeadingThree, Paragraph } from '@/components/atoms/Text';
import Header from '@/components/molecules/Header';
import Input from '@/components/atoms/Input';
import ContainerFlex from '@/components/atoms/ContainerFlex';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';
import { useRouter } from 'next/router';
import { DisplayFlex } from '@/components/atoms/Alignment';
import DataModal from '@/components/molecules/DataModal';
import styled from 'styled-components';
import ShareDataModal from '@/components/molecules/ShareDataModal';

const QrCodeBox = styled.div`
  width: 219px;
  height: 219px;
  border-radius: 10px;
  border: 2.19px solid ${colors.verdeMedium};
`;

const ShareBox = styled.div`
  width: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${colors.cinzaLightMedium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 20px;
`;

export default function GerarQrCode() {
  const [value, setValue] = useState(`0,00`);
  const [identifier, setIdentifier] = useState(``);
  const [step, setStep] = useState(0);
  const router = useRouter();

  const [writeMsg, setWriteMsg] = useState(false);

  const [openShareModal, setOpenShareModal] = useState(false);
  return (
    <ContentContainer>
      <Header
        title="PIX - Minhas chaves"
        justifyContent="flex-start"
        arrowClicked={() => {
          if (step === 0 || step === 2) {
            router.back();
          } else {
            setStep(step - 1);
          }
        }}
      />
      {step === 0 && (
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
            {!writeMsg ? (
              <DisplayFlex
                align="center"
                justify="center"
                onClick={() => setWriteMsg(true)}
              >
                <img src="/icons/chat.svg" alt="" />
                <Paragraph
                  fontColor="#ff9f1e"
                  fontWeight="500"
                  margin="0 0 0 10px"
                >
                  Escrever uma mensagem
                </Paragraph>
              </DisplayFlex>
            ) : (
              <div
                style={{
                  width: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  backgroundColor: `#F0F1F5`,
                  borderRadius: `40px`,
                }}
              >
                <input
                  maxLength={90}
                  type="text"
                  style={{
                    width: `70%`,
                    height: `36px`,
                    backgroundColor: `transparent`,
                    border: `none`,
                    outline: `none`,
                    fontSize: `15px`,
                    lineHeight: `20px`,
                    fontFamily: fontFamily.roboto,
                    fontWeight: 500,
                    color: `#495057`,
                  }}
                />
              </div>
            )}
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
              <Paragraph
                fontSize="17px"
                fontColor={colors.cinzaLightMedium}
                fontFamily={fontFamily.roboto}
              >
                Email
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
              <Paragraph
                onClick={() => setStep(1)}
                fontWeight="500"
                fontSize="17px"
                fontColor="#495057"
              >
                Identificador
              </Paragraph>
              <Paragraph
                style={{ width: `100%`, textAlign: `right`, color: `#495057` }}
                lineHeight="10px"
                onClick={() => setStep(1)}
              >
                <i className="icon-chevron-right" />
              </Paragraph>
            </ContainerFlex>
            <FilledButton
              text="Criar QR code"
              borderRounded
              roundedSize="5px"
              bgColor1="#ff9f1e"
              height="46px"
              textColor="white"
              action={() => setStep(2)}
              margin="46px 0 0 0"
            />
          </ContainerFlex>
        </>
      )}
      {step === 1 && (
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
      {step === 2 && (
        <ContainerFlex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="20px"
        >
          <HeadingOne
            lineHeight="28px"
            fontFamily={fontFamily.roboto}
            margin="0 0 4px 0"
            fontSize="20px"
            color={colors.black}
          >
            Mostre o QR code ou compartilhe o link
          </HeadingOne>
          <Paragraph fontColor={colors.cinzaLightMedium} lineHeight="22px">
            Quem for te pagar precisa abrir o app em que vai fazer a
            transferência e escanear o QR code.
          </Paragraph>
          <div
            style={{ width: `100%`, marginTop: `36px`, marginBottom: `32px` }}
          >
            <DisplayFlex align="center" justify="center">
              <QrCodeBox />
            </DisplayFlex>
          </div>

          <ShareBox onClick={() => setOpenShareModal(true)}>
            <i className="icon-share" style={{ marginRight: `9px` }} />
            <div>
              <HeadingThree
                fontFamily={fontFamily.roboto}
                fontWeight="bold"
                fontSize="14px"
                lineHeight="20px"
                color={colors.black}
                margin="0 0 4px 0"
              >
                {` `}
                Compartilhar link{` `}
              </HeadingThree>
              <Paragraph
                color={colors.cinzaLightMedium}
                fontFamily={fontFamily.roboto}
                fontSize="12px"
                lineHeight="16px"
                fontWeight="400"
              >
                {` `}
                Se não conseguir mostrar o QR code, compartilhe o link para
                receber.
              </Paragraph>
            </div>
          </ShareBox>
        </ContainerFlex>
      )}

      {openShareModal && (
        <ShareDataModal
          title="Cobrança PixLand"
          closeAction={() => setOpenShareModal(false)}
        />
      )}
    </ContentContainer>
  );
}
