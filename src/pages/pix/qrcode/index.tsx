/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
import { Paragraph } from '@/components/atoms/Text';
import Header from '@/components/molecules/Header';
import styled from 'styled-components';
import { QrReader } from 'react-qr-reader';
import Cookies from 'js-cookie'
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import { useAlert } from 'react-alert';

import router from 'next/router';
import Input from '@/components/atoms/Input';
import ContainerFlex from '@/components/atoms/ContainerFlex';
import NextLink from 'next/link';
import { HeadingOne, HeadingThree } from '@/components/atoms/Text';

import CustomModal from '@/components/molecules/CustomModal';
import AlertModal from '@/components/molecules/AlertModal';
import FilledButton from '@/components/atoms/FilledButton';
import BeneficaryCard from '@/components/molecules/BeneficiaryCard';
import NumberFormat from "react-number-format";
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


export default function CopyAndPaste() {

  const [data, setData] = useState('No result');
  const [step, setStep] = useState(0);
  const [value, setValue] = useState(`0,00`);
  const [loadingresult, setloadingresult] = useState(false);
  const [identifier, setIdentifier] = useState(``);
  const [endtoend, setend] = useState(``);
  const [keyInfo, setKeyInfo] = useState(Array);
  const [keyInfoChave, setKeyInfoChave] = useState(Array);
  const [keyInfoCollection, setKeyInfoCollection] = useState(Array);
  const [pinOpen, setPinOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const { user, loading }:any = useAuth();
  const alert = useAlert();
  if(loading) return <Skeleton height={300} count={1} />;

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

  let mensagem_Taxa = "";
  if(user.meus_dados.login.length == 18)
  mensagem_Taxa = "Taxa de transação de R$ 0,60";

  let Key_Info = null;
  let Key_InfoChave = null;
  moment.locale('pt-br');

  useEffect(() => {
    if (keyInfo.type && keyInfoChave.key) {
      //console.log(keyInfoChave);
      //setStep(3);
    } 
  }, [keyInfo,keyInfoChave]);
  if(carregando) return <Skeleton height={300} count={1} />;
  const constraints = {
    facingMode: { exact: "environment" },
  };
  return (
    <ContentContainer>
      {step == 0 &&(
<>
        <Header title="PIX - Copia e cola" justifyContent="flex-start" />
        <div style={{ padding: `20px`, backgroundColor: `white` }}>
          <Paragraph color="#6E747A" lineHeight="22px">
            Posicione o quadrado verde sobre o QR Code e aguarde . A Leitura é
            automática.
          </Paragraph>
        </div>
        <div
          style={{
            backgroundColor: `rgba(0,0,0,0.5)`,
            width: `100%`,
            height: `calc( 100vh - 140px) `,
          }}>
        <QrReader
                  constraints={constraints}
                  onResult={(result, error) => {
                      if (!!result && !loadingresult && step == 0) {
                          
                          setloadingresult(true);
                          setData(result?.text);
                          setStep(2);

                          let dados_qr = parsePix(result?.text);


                          (async function() {

                            const token = Cookies.get('token')
                            if (token) {

                              console.log("Got a token in the cookies, let's see if it is valid")
                              api.defaults.headers.Authorization = `PixLand ${token}`
                              
                              api.post('pix/chave/emv/get', {key:result?.text})
                              .then((response) => {
                                setStep(2);
                                //console.log(dados_qr)

                                if(response.data['success'])
                                {
                                  //console.log('SUCESSO')

                                  if(dados_qr.pixKey){
                                    Key_Info = JSON.parse(response.data['key']);
                                    let dados_key = JSON.parse(response.data['key']);
                                    setKeyInfo(JSON.parse(response.data['key']));
                                    setKeyInfoChave(JSON.parse(response.data['chave']));
                                    if(dados_key?.transactionAmount > 0){
                                      setValue(dados_key?.transactionAmount)
                                      setStep(3);
                                    }
                                  }

                                  else if(dados_qr.type == 'DYNAMIC')
                                  {
                                    console.log('DINAMICO');
                                    Key_Info = JSON.parse(response.data['key']);
                                    setKeyInfo(JSON.parse(response.data['key']));
                                    setKeyInfoChave(JSON.parse(response.data['chave']));
                                    setKeyInfoCollection(JSON.parse(response.data['collection']))
                                    setValue(keyInfoCollection?.valor?.original);
                                    console.log(JSON.parse(response.data['collection']));
                                    console.log('FIM')
                                    setStep(3);
                                  }
                                  else{
                                    setStep(1);
                                  }
                                }
                                else{
                                  console.log('ERROR')
                                }
                                
                              })
                              .catch((err) => {
                                
                              });

          
                                
                                
                                //setUser(user);
                            }
                            else{
                              //setUnlocked(false);
                              //setUnlockede(false);
                            }
                          })();

                      }

                  }}
                  style={{ width: '100%' }}
              />
        </div>
        </>
      )}
      {step === 1 && (
        <>
        <Header title="PIX - Copia e cola" justifyContent="flex-start" />
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
              action={() => setStep(3)}
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
      {step == 2 &&(
<>
        <Header title="PIX - Copia e cola" justifyContent="flex-start" />
        <div style={{ padding: `20px`, backgroundColor: `white` }}>
          <Paragraph color="#6E747A" lineHeight="22px">
            Carregando...
          </Paragraph>
        </div>
        
        </>
      )}

      {step === 3 && (
        
        <>
        <Header title="PIX - Copia e cola" justifyContent="flex-start" />
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
          <BeneficaryCard Iniciais={keyInfoChave['owner'].name} Nome={keyInfoChave['owner'].name} Agencia={keyInfoChave['account'].branch} Conta={keyInfoChave['account'].accountNumber} Documento={keyInfoChave['owner'].taxIdNumber} Banco={keyInfoChave['account'].bankName}  />
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
            action={() => setStep(0)}
          />
        </ContainerFlex>
        </>
      )}
      {step === 4 && (
        <>
        <Header title="PIX - Copia e cola" justifyContent="flex-start" />
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
                setPinOpen(true)

                
                
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
        </>
      )}
      {openModal && (
        <CustomModal
          iconClassName="icon-close"
          title="Resumo de pagamento"
          PaymentContentTitle='Hash da Transaçāo'
          PaymentContentValue={endtoend}
          PaymentContentMoney={keyInfo.transactionAmount || keyInfoCollection.valor.original}
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
          typeTransaction={'PIX - Pagamento: '+keyInfoChave['owner'].name}
          pinAction={(valuex) => {

            if(valuex.length > 10)
            {
              setCarregando(true);
              (async function() {

                const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`
                    
                    api.post('pix/chave/emv/send', { key:data, amount: keyInfo.transactionAmount || keyInfoCollection.valor.original, hash: valuex})
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
                      }
                      else {
                        const alerta = alert.show(response.data['message'], {
                          timeout: 8000,
                          type: 'error'
                        })
                        setCarregando(false)
                        setPinOpen(false);
                      }
                    })
                    .catch((err) => {
                      const alerta = alert.show('Erro ao solicitar chave, tente novamente mais tarde!', {
                        timeout: 8000,
                        type: 'error'
                      })
                      setCarregando(false)
                      setPinOpen(false);
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
              setPinOpen(false);

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
