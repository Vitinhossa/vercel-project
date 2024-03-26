/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentContainer from '@/components/atoms/ContentContainer';
import FilledButton from '@/components/atoms/FilledButton';
import { HeadingOne, HeadingThree, Paragraph } from '@/components/atoms/Text';
import Header from '@/components/molecules/Header';
import Input from '@/components/atoms/Input';
import ContainerFlex from '@/components/atoms/ContainerFlex';
import BeneficaryCard from '@/components/molecules/BeneficiaryCard';
import router from 'next/router';
import { ContactsList } from '@/components/molecules/ContactsList';
import { ContactsHorizontalList } from '@/components/molecules/ContactsHorizontalList';
import CustomModal from '@/components/molecules/CustomModal';
import AlertModal from '@/components/molecules/AlertModal';
import NumberFormat from "react-number-format";
import NextLink from 'next/link';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton';
import { validate, format, normalize } from 'pixkey';
import Cookies from 'js-cookie'
import api from '@/services/api';
import { useAlert } from 'react-alert';
import { parsePix } from 'pix-utils';
import moment from 'moment';
import 'moment/locale/pt-br';

const ContainerPayment = styled.div`
  display: grid;
  grid: auto / 22px 1fr;
  width: 100%;
  grid-gap: 18px;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 20px;
  p:first-of-type {
    margin-bottom: 5px;
  }
  img {
    width: 100%;
  }
`;

const ItemPayment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 10px 0;
  p:first-of-type {
    color: #6e747a;
  }
`;



export default function Transferir() {
  const [value, setValue] = useState(`0,00`);
  const [identifier, setIdentifier] = useState(``);
  const [endtoend, setend] = useState(``);
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [validkey, setValidKey] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [keyInfo, setKeyInfo] = useState(Array);
  const [keyInfoChave, setKeyInfoChave] = useState(Array);
  const [keyInfoCollection, setKeyInfoCollection] = useState(Array);
  const alert = useAlert();
  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  let Key_Info = null;
  moment.locale('pt-br');

  const resize = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.style.width = `${e.currentTarget.value.length}ch`;
    setValue(e.currentTarget.value);
  };

  function currencyFormatter(value: any) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

    return `${amount}`;
  }


  const accounts = [
    {
      icon: `/logo_10xbank.svg`,
      bank: `Conta do PixLand`,
      amount: `Saldo disponível: `+new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(user.meus_dados.saldo),
    },
    /*{
      icon: `/pix/nubank.svg`,
      bank: `Conta do Nubank`,
      amount: `Limite disponível: R$ 25.000,00`,
    },
    {
      icon: `/pix/santander.svg`,
      bank: `Conta do Santander`,
      amount: `Limite disponível: R$ 20.000,00`,
    },
    {
      icon: `/pix/bb.svg`,
      bank: `Conta do Banco do Brasil`,
      amount: `Limite disponível: R$ 15.000,00`,
    },*/
  ];
  if(carregando) return <Skeleton height={300} count={1} />;
  return (
    <ContentContainer>
      <Header
        title="PIX - Copia e Cola"
        justifyContent="flex-start"
        arrowClicked={() => {
          if (step === 1) {
            router.push(`/pix`);
          } else {
            setStep(step - 1);
          }
        }}
      />
      
      {step === 1 && (
        <>
          <ContainerFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            padding="20px"
          >
            <HeadingThree margin="0 0 4px 0" lineHeight="28px">
              Digite ou cole o QRCode PIX para efetuar o pagamento
              <br />
            </HeadingThree>
            <Paragraph fontColor="#ADB5BD" lineHeight="24px">
              Cole abaixo
            </Paragraph>
            <Input
              inputFormat="description"
              inputType="text"
              placeholder="QRCode PIX"
              margin="28px 0 0 0"
              descriptionPosition="right"
              value={identifier}
              onChange={(e: any) => {
                setIdentifier(e.target.value);
                console.log(parsePix(e.target.value))
                let dados_qr = parsePix(e.target.value);

                if(dados_qr.pixKey){
                  
                  setIdentifier(e.target.value);
                  const token = Cookies.get('token')
                  if (token) {

                      console.log("Got a token in the cookies, let's see if it is valid")
                      api.defaults.headers.Authorization = `PixLand ${token}`
                      
                      api.post('pix/chave/emv/get', { key:e.target.value })
                      .then((response) => {
                        
                        if(response.data['success'])
                        {
                            setValidKey(true)
                            Key_Info = JSON.parse(response.data['key']);
                            setKeyInfo(JSON.parse(response.data['key']));
                            setKeyInfoChave(JSON.parse(response.data['chave']));
                            setValue(keyInfo.transactionAmount);
                            console.log(keyInfo)
                        }
                        
                      })
                      .catch((err) => {
                        
                      });
                  }

                }
                else if(dados_qr.type == 'DYNAMIC'){
                  setIdentifier(e.target.value);
                  const token = Cookies.get('token')
                  if (token) {

                      console.log("Got a token in the cookies, let's see if it is valid")
                      api.defaults.headers.Authorization = `PixLand ${token}`
                      
                      api.post('pix/chave/emv/get', { key:e.target.value })
                      .then((response) => {
                        
                        if(response.data['success'])
                        {
                            setValidKey(true)
                            Key_Info = JSON.parse(response.data['key']);
                            setKeyInfo(JSON.parse(response.data['key']));
                            setKeyInfoChave(JSON.parse(response.data['chave']));
                            setKeyInfoCollection(JSON.parse(response.data['collection']))
                            setValue(keyInfoCollection.valor.original);
                            console.log(keyInfoCollection.valor.original)
                        }
                        
                      })
                      .catch((err) => {
                        
                      });
                  }

                }
                else
                setValidKey(false)
              }}
              styleInput={{ paddingLeft: 0 }}
            />
            {validkey && (
              <FilledButton
              text="Continuar"
              borderRounded
              roundedSize="5px"
              bgColor1="#ff9f1e"
              height="46px"
              textColor="white"
              action={() => setStep(step + 1)}
              margin="46px 0 0 0"
            />
            )}
            
            
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
          <Paragraph fontColor="#ADB5BD" lineHeight="24px" margin="0 0 45px">
            Essa é a conta que você quer transferir <br />
            <strong>R$ {keyInfo.transactionAmount || keyInfoCollection.valor.original}</strong>?
          </Paragraph>
          <BeneficaryCard Iniciais={keyInfoChave['owner'].name} Nome={keyInfoChave['owner'].name} Documento={keyInfoChave['owner'].taxIdNumber} Banco={keyInfoChave['account'].bankName} Agencia={keyInfoChave['account'].branch} Conta={keyInfoChave['account'].accountNumber}   />
          <FilledButton
            text="Confirmar"
            borderRounded
            roundedSize="5px"
            bgColor1="#ff9f1e"
            height="46px"
            textColor="white"
            action={() => setStep(step + 1)}
            margin="46px 0 0 0"
          />
          <FilledButton
            text="Cancelar"
            borderRounded
            roundedSize="5px"
            height="46px"
            action={() => setStep(step - 1)}
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
          Escolha a origem de pagamento
          </HeadingThree>
          {accounts.map((account) => (
            <ContainerPayment
              key={account.bank}
              onClick={() => {

                setCarregando(true)

                const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`
                    
                    api.post('pix/chave/emv/send', { key:identifier, amount: keyInfo.transactionAmount || keyInfoCollection.valor.original})
                    .then((response) => {
                      
                      if(response.data['success'])
                      {

                          const alerta = alert.show('Pix efetuado com sucesso!', {
                            timeout: 8000, // custom timeout just for this one alert
                            type: 'success'
                          });
                          setend(response.data['endtoend']);
                          setOpenModal(true);
                          setCarregando(false);
                      }
                      else {
                        const alerta = alert.show(response.data['message'], {
                          timeout: 8000,
                          type: 'error'
                        })
                        setCarregando(false)
                      }
                    })
                    .catch((err) => {
                      const alerta = alert.show('Erro ao solicitar chave, tente novamente mais tarde!', {
                        timeout: 8000,
                        type: 'error'
                      })
                      setCarregando(false)
                    });
                }
                
              }}
            >
              <img src={account.icon} alt="" />
              <div>
                <Paragraph fontWeight="500">{account.bank}</Paragraph>
                <Paragraph fontColor="#adb5bd">{account.amount}</Paragraph>
              </div>
            </ContainerPayment>
          ))}
        </ContainerFlex>
      )}
      {openModal && (
        <CustomModal
          iconClassName="icon-close"
          title="Resumo de pagamento"
          PaymentContentTitle='Hash da Transaçāo'
          PaymentContentValue={endtoend}
          PaymentContentMoney={'R$ ' + keyInfo.transactionAmount || keyInfoCollection.valor.original}
          hasCurrency
          hasPaymentContent
          subtitleCurrency={`Pago em ${moment().format('L')} às ${moment().format('LTS')}`}
          paymentType="Pix QRCode"
          onClick={() => router.push(`/pix`)}
        >
          <HeadingThree margin="20px 0 0 0" color="#34403B">
            Pagamento
          </HeadingThree>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Recebedor
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfoChave.owner.name}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Agência
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfoChave.account.branch}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Conta
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfoChave.account.accountNumber}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Banco
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfoChave.account.bankName}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              CPF/CNPJ
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfoChave.owner.taxIdNumber}
            </Paragraph>
          </ItemPayment>
          <FilledButton
            text="Comprovante"
            textColor="white"
            height="50px"
            roundedSize="5px"
            margin="32px 0 0 0"
            bgColor1="#ff9f1e"
            action={() => setOpenModal(false)}
          />
          
        </CustomModal>
      )}
      {pinOpen && (
        <AlertModal
          btnText="Confirmar"
          text="Digite seu PIN"
          btnAction={() => {
            setPinOpen(false);
            setOpenModal(false);
            router.push(`/pix`);
          }}
          closeClick={() => {
            router.push(`/pix`);
          }}
          isPinModal
          hasCloseBtn
          btnWidth="80%"
        />
      )}
    </ContentContainer>
  );
}
