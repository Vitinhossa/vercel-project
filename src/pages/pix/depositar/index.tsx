/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
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
import ShieldIcon from '@/assets/svg/shiedIcon';
import EmailIcon from '@/assets/svg/email';
import CelularIcon from '@/assets/svg/celular';
import DocumentoIcon from '@/assets/svg/documento';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import NumberFormat from "react-number-format";
import api from '@/services/api';
import QRCode from 'qrcode'
import BrCode from '@/contexts/libpix.js';

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
  const [codeqr, setcodeqr] = useState('');
  const [codePayment, setCodePayment] = useState(`Carregando...`);
  const [identifier, setIdentifier] = useState(``);
  const [mensagem, setMensagem] = useState(``);
  const [step, setStep] = useState(0);
  const [modalContacts, setModalContacts] = useState(false);
  const [modalFinish, setModalFinish] = useState(false);
  const { user, loading }:any = useAuth();
  const QR_CODE_SIZE = 400;
  if(loading) return <Skeleton height={300} count={1} />;

  function currencyFormatter(value: any) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

    return `${amount}`;
  }
  const getTitle = (type: string) => {
    let title = ``;
    switch (type) {
      case `email`:
        title = `E-mail`;
        break;
      case `phone`:
        title = `Celular`;
        break;
      case `cpf`:
        title = `CPF`;
        break;
      case `EVP`:
        title = `Chave aleatória`;
        break;
      default:
        break;
    }
    return title;
  };
  const getIcon = (type: string) => {
    let icon;
    switch (type) {
      case `email`:
        icon = EmailIcon;
        break;
      case `phone`:
        icon = CelularIcon;
        break;
      case `cpf`:
        icon = DocumentoIcon;
        break;
      case `EVP`:
        icon = ShieldIcon;
        break;
      default:
        icon = ShieldIcon;
        break;
    }
    return icon;
  };

  function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
  function extractFloat(text) {
    const match = text.match(/\d+((\.|,)\d+)?/)
    return match && match[0]
  }
  function key_type(key)
  {
    if(key == 'EVP')
    return 'Outro';
  }

  useEffect(() => {
    console.log(step);
    if (step === 3) {

      
      (async function() {

        console.log(extractFloat(value));

        var brCode = new BrCode(user.chaves_pix[0].key_pix, extractFloat(value), limit(user.meus_dados.nome, 24), user.meus_dados.account, key_type(user.chaves_pix[0].type), limit(user.meus_dados.cidade, 14));

        var code = brCode.generate_qrcp();

        setCodePayment(code);

        /*QRCode.toDataURL(code, {width: QR_CODE_SIZE, height: QR_CODE_SIZE})
        .then(qrcode => {
          console.log({
            qrcode_base64: qrcode,
            code: code,
            key_type: brCode.key_type,
            key: brCode.key,
            amount: brCode.amount,
            name: brCode.name,
            city: brCode.city,
            reference: brCode.reference,
            formated_amount: brCode.formated_amount()})
            setCodePayment(code);
        })
        .catch(err => {
          console.error(err)
        })*/

        

}());
      
    } 

  }, [
    step
  ]);

  return (
    <ContentContainer>
      <Header
        title="PIX - Depositar"
        justifyContent="flex-start"
        arrowClicked={() => setStep(step - 1)}
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
            <Paragraph>Qual valor você quer depositar usando PIX?</Paragraph>
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
              
              <NumberFormat
                inputFormat="description"
                inputType="text"
                descriptionText=""
                value={value}
                onChange={(event: { target: { value: string } }) =>
                  setValue(event.target.value)
                }
                customInput={Input}
                format={currencyFormatter}
                prefix="R$ "
                thousandSeparator="."
                decimalSeparator=","
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
              action={() => setStep(step + 1)}
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
              {value}
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
            <Paragraph fontColor="#ff9f1e" fontWeight="500" margin="0 0 0 10px" onClick={() => setStep(4)}>
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
                PixLand &gt;
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
              <Paragraph>{user.meus_dados.nome}</Paragraph>
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
              <Paragraph>{user.meus_dados.cpf}</Paragraph>
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
              <Paragraph onClick={() => setStep(2)}>{identifier} {' >'}</Paragraph>
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
          <HeadingOne color="#ff9f1e" lineHeight="44px" margin="0 10px 0 0">
            {value}
          </HeadingOne>
          <Paragraph fontColor="#ADB5BD" lineHeight="24px">
            Para {user.meus_dados.nome}
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
            <Paragraph lineHeight="24px" wordBreak="break-all">
              {codePayment}
            </Paragraph>
          </ContainerFlex>

          <FilledButton
            text="Copiar Código"
            borderRounded
            roundedSize="5px"
            bgColor1="#ff9f1e"
            height="46px"
            textColor="white"
            action={() => {
              navigator.clipboard.writeText(codePayment)
              setModalFinish(true);
            }}
            margin="46px 0 0 0"
          />
        </ContainerFlex>
      )}
      {step === 4 && (
        <ContainerFlex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="20px"
        >
          <HeadingThree margin="0 0 4px 0" lineHeight="28px">
            Escreva uma mensagem
          </HeadingThree>
          <Paragraph fontColor="#ADB5BD" lineHeight="24px">
            Essa mensagem será enviado junto com o valor a ser pago.
          </Paragraph>
          <Input
            inputFormat="description"
            inputType="text"
            placeholder="Sua mensagem aqui..."
            margin="28px 0 0 0"
            descriptionPosition="right"
            descriptionText={`${mensagem.length}/25`}
            value={mensagem}
            onChange={(e: any) => setMensagem(e.target.value)}
            maxLength={25}
          />
          <FilledButton
            text="Confirmar"
            borderRounded
            roundedSize="5px"
            bgColor1="#ff9f1e"
            height="46px"
            textColor="white"
            action={() => setStep(step - 3)}
            margin="46px 0 0 0"
          />
        </ContainerFlex>
      )}
      {modalContacts && (
        <DataModal closeAction={() => setModalContacts(false)}>
          <KeyList>
          {user.chaves_pix.map((pixKey, indx) => {
            const iconClass = ``;
            const IconSvg = getIcon(pixKey.type);
            const title = getTitle(pixKey.type);
          
            return (
              <ModalKey>

              <span>{IconSvg}</span>

              <ContainerFlex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Paragraph fontSize="14px" fontWeight="700">
                  {title}
                </Paragraph>
                <Paragraph fontSize="14px" fontWeight="400">
                  {pixKey.key_pix}
                </Paragraph>
              </ContainerFlex>

              </ModalKey>
            );
          })}


            
            
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
              Agora acesse a área Pix da outra instituição e cole este código
              para o dinheiro cair na conta do PixLand.
            </Paragraph>
            <FilledButton
              text="Entendi"
              borderRounded
              roundedSize="5px"
              bgColor1="#ff9f1e"
              height="46px"
              textColor="white"
              action={() => {
                setModalFinish(false)
              }}
              margin="40px 0 0 0"
            />
          </ContainerFlex>
        </DataModal>
      )}
    </ContentContainer>
  );
}
