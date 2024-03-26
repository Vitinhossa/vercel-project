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
  const [step, setStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [validkey, setValidKey] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [keyInfo, setKeyInfo] = useState(Array);
  const alert = useAlert();
  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  let mensagem_Taxa = "";
  if(user.meus_dados.login.length == 18)
  mensagem_Taxa = "Taxa de transação de R$ 0,60";

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
        title="PIX - Transferência"
        justifyContent="flex-start"
        arrowClicked={() => {
          if (step === 0) {
            router.push(`/pix`);
          } else {
            setStep(step - 1);
          }
        }}
      />
      {step === 0 && (
        <>
          <ContainerFlex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="20px"
          >
            <Paragraph>Qual valor você quer transferir?</Paragraph>
            <NextLink href="/pix/qrcode">
              <img src="/icons/qr-code.svg" alt="" />
            </NextLink>
          </ContainerFlex>
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
                descriptionText={mensagem_Taxa}
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
          <ContainerFlex
            padding="20px"
            margin="50px 0 0 0"
            flexDirection="column"
          >
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
              action={() => router.push(`/pix`)}
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
              Para quem você quer transferir
              <br /> {value}?
            </HeadingThree>
            <Paragraph fontColor="#ADB5BD" lineHeight="24px">
              Encontre um contato na sua lista ou inicie uma nova transferência
            </Paragraph>
            <Input
              inputFormat="description"
              inputType="text"
              placeholder="Nome, CPF/CNPJ, Celular, e-mail ou chave Pix"
              margin="28px 0 0 0"
              descriptionPosition="right"
              value={identifier}
              onChange={(e: any) => {
                setIdentifier(e.target.value);
                console.log(validate(e.target.value).length)
                if(validate(e.target.value).length){
                  console.log(validate(e.target.value)[0]);

                  setIdentifier(format(e.target.value));
                  const token = Cookies.get('token')
                  if (token) {

                      console.log("Got a token in the cookies, let's see if it is valid")
                      api.defaults.headers.Authorization = `PixLand ${token}`

                      api.post('pix/chave/dict/get', { key:format(e.target.value), type: validate(e.target.value)[0]})
                      .then((response) => {

                        if(response.data['success'])
                        {
                            setValidKey(true)
                            Key_Info = JSON.parse(response.data['key']);
                            setKeyInfo(JSON.parse(response.data['key']));
                            console.log(Key_Info?.owner.name)
                            console.log(keyInfo['owner'].name)
                        }
                        else{
                          console.log('ERRO')
                          let mensagem = JSON.parse(response.data['key']);
                          const alerta = alert.show(mensagem.description, {
                            timeout: 8000,
                            type: 'error'
                          })
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

            <div style={{ margin: `40px 0`, width: `100%` }}>
              <ContactsHorizontalList
                onSelectContact={(e) => {

                  setIdentifier(e.pix_key);
                  console.log(validate(e.pix_key).length)
                  if(validate(e.pix_key).length){
                    console.log(validate(e.pix_key)[0]);

                    setIdentifier(format(e.pix_key));
                    const token = Cookies.get('token')
                    if (token) {

                        console.log("Got a token in the cookies, let's see if it is valid")
                        api.defaults.headers.Authorization = `PixLand ${token}`

                        api.post('pix/chave/dict/get', { key:format(e.pix_key), type: validate(e.pix_key)[0]})
                        .then((response) => {



                          if(response.data['success'])
                          {
                              setValidKey(true)
                              Key_Info = JSON.parse(response.data['key']);
                              setKeyInfo(JSON.parse(response.data['key']));
                              console.log(Key_Info?.owner.name)
                              console.log(keyInfo['owner'].name)
                          }
                          if(response.data['success'] == "false"){
                            console.log('ERRO')
                            let mensagem = JSON.parse(response.data['key']);
                            const alerta = alert.show(mensagem.description, {
                              timeout: 8000,
                              type: 'error'
                            })
                          }

                        })
                        .catch((err) => {

                        });
                    }
                  console.log(e);
                  }
                }}
                listContacts={user.contacts_pix_principais}
              />
            </div>
            <ContactsList onSelectContact={(e) => {

setIdentifier(e.pix_key);
console.log(validate(e.pix_key).length)
if(validate(e.pix_key).length){
  console.log(validate(e.pix_key)[0]);

  setIdentifier(format(e.pix_key));
  const token = Cookies.get('token')
  if (token) {

      console.log("Got a token in the cookies, let's see if it is valid")
      api.defaults.headers.Authorization = `PixLand ${token}`

      api.post('pix/chave/dict/get', { key:format(e.pix_key), type: validate(e.pix_key)[0]})
      .then((response) => {

        if(response.data['success'])
        {
            setValidKey(true)
            Key_Info = JSON.parse(response.data['key']);
            setKeyInfo(JSON.parse(response.data['key']));
            console.log(Key_Info?.owner.name)
            console.log(keyInfo['owner'].name)
        }

      })
      .catch((err) => {

      });
  }
console.log(e);
}
}} listContacts={user.contacts_pix_principais} />
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
            <strong>{value}</strong>?
          </Paragraph>
          <BeneficaryCard Iniciais={keyInfo['owner'].name} Nome={keyInfo['owner'].name} Agencia={keyInfo['account'].branch} Conta={keyInfo['account'].accountNumber} Documento={keyInfo['owner'].taxIdNumber} Banco={keyInfo['account'].bankName}  />
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

                //setCarregando(true)
                setOpenModal(true)

                /*const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`

                    api.post('pix/chave/dict/send', { key:format(identifier), type: validate(identifier)[0], amount: value})
                    .then((response) => {

                      if(response.data['success'])
                      {

                          const alerta = alert.show('Pix efetuado com sucesso!', {
                            timeout: 8000, // custom timeout just for this one alert
                            type: 'success'
                          });
                          setend(response.data['endtoend']);
                          setOpenModal(true);
                          setCarregando(false)
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
                }*/

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
          PaymentContentMoney={value}
          hasCurrency
          hasPaymentContent
          subtitleCurrency={`Pago em ${moment().format('L')} às ${moment().format('LTS')}`}
          paymentType="Pix"
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
              {keyInfo.owner.name}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Agência
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfo.account.branch}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Conta
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfo.account.accountNumber}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              Banco
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfo.account.bankName}
            </Paragraph>
          </ItemPayment>
          <ItemPayment>
            <Paragraph fontWeight="500" fontSize="12px">
              CPF/CNPJ
            </Paragraph>
            <Paragraph fontWeight="500" fontSize="12px">
              {keyInfo.owner.taxIdNumber}
            </Paragraph>
          </ItemPayment>
          {
            confirmed ?
              <FilledButton
              text="Comprovante"
              textColor="white"
              height="50px"
              roundedSize="5px"
              margin="32px 0 0 0"
              bgColor1="#ff9f1e"
              action={() => setOpenModal(false)}
            /> :
              <FilledButton
                text="Confirmar"
                textColor="white"
                height="50px"
                roundedSize="5px"
                margin="32px 0 0 0"
                bgColor1="#ff9f1e"
                action={() => setPinOpen(true)}
              />
          }

        </CustomModal>
      )}
      {pinOpen && (
        <AlertModal
          btnText="Confirmar"
          text="Digite seu PIN"
          typeTransaction={'PIX - Pagamento: '+keyInfo.owner.name}
          pinAction={(valuex) => {

            if(valuex.length > 10)
            {
              setCarregando(true);
              (async function() {

                const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`

                    api.post('pix/chave/dict/send', { key:format(identifier), type: validate(identifier)[0], amount: value, hash: valuex})
                    .then((response) => {

                      if(response.data['success'])
                      {

                          const alerta = alert.show('Pix efetuado com sucesso!', {
                            timeout: 8000, // custom timeout just for this one alert
                            type: 'success'
                          });
                          setend(response.data['endtoend']);
                          setOpenModal(true);
                          setCarregando(false)
                          setPinOpen(false);
                          setConfirmed(true);
                      }
                      else {
                        const alerta = alert.show(response.data['message'], {
                          timeout: 8000,
                          type: 'error'
                        })
                        setCarregando(false)
                        setPinOpen(false);
                        setOpenModal(false);
                      }
                    })
                    .catch((err) => {
                      const alerta = alert.show('Erro ao solicitar chave, tente novamente mais tarde!', {
                        timeout: 8000,
                        type: 'error'
                      })
                      setCarregando(false)
                      setPinOpen(false);
                      setOpenModal(false);

                    });




                    //setUser(user);
                }

              }());


            }
            else{
              const alerta = alert.show('Erro ao validar o PIN', {
                timeout: 8000, // custom timeout just for this one alert
                type: 'error',
              });
              setPinOpen(false);
              setCarregando(false);
              setOpenModal(false);

            }

          }}
          closeClick={() => {
            setPinOpen(false);
            setCarregando(false);

          }}
          isPinModal
          hasCloseBtn
          btnWidth="80%"
        />
      )}
    </ContentContainer>
  );
}
