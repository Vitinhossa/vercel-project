import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '@/components/atoms/ProgressBar';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import Input from '@/components/atoms/Input';
import { ContainerNullish, FlexContainer } from './style';
import FilledButton from '../../atoms/FilledButton';
import AlertModal from '../AlertModal';
import BeneficiaryCard from '../BeneficiaryCard';
import InputCnpjCpf from '../../atoms/Input-cnpj-cpf';
import NumberFormat from "react-number-format";
import Cookies from 'js-cookie'
import api from '@/services/api';
import Skeleton from 'react-loading-skeleton'
import {useAuth} from '@/contexts/auth';
import { useAlert } from 'react-alert';

export default function Transferencia10xContent() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [cpf, setCpf] = useState(``);
  const [price, setPrice] = useState(`0,00`);
  const [showModal, setShowModal] = useState(false);
  const [done, setDone] = useState(false);

  const [loadinge, setLoading] = useState(false);
  const [found, setFound] = useState(false);

  const [nameBene, setNameBene] = useState('');
  const [docBene, setDocBene] = useState('');

  const alert = useAlert();

  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;

  let dados_usuario:any = null;

  function currencyFormatter(value: any) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

    return `${amount}`;
  }

  useEffect(() => {
    console.log(step);
    if (step === 1) {

      if(!done)
        setLoading(true);
      (async function() {

        const token = Cookies.get('token')
        if (token) {

            console.log("Got a token in the cookies, let's see if it is valid")
            api.defaults.headers.Authorization = `PixLand ${token}`
            
            const { data: user } = await api.post('Info/Login', {id:cpf})
            console.log(user);

            if(user.success)
            {

              setNameBene(user.nome);
              setDocBene(user.cpf);
              setDone(true);
              setLoading(false);
              setFound(true);
            }
            else{
              setDone(true);
              setLoading(false);
              setFound(false);

              const alerta = alert.show('Erro ao localizar beneficiario', {
                timeout: 8000, // custom timeout just for this one alert
                type: 'error'
              })
              setStep(step-1);
            }
            

            
            
            //setUser(user);
        }
        else{

        }
      }());
      
    } 

  }, [
    step
  ]);

  return (
    <ContainerNullish>
      {step === 0 && (
        <>
          <ProgressBar width="35%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Qual o CPF ou CPNJ para quem você quer transferir?
          </Paragraph>
          <InputCnpjCpf
            type="cpf"
            value={cpf}
            onChange={(e: any) => setCpf(e.target.value)}
          />
          <FlexContainer
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FilledButton
              roundedSize="50%"
              width="44px"
              height="44px"
              iconClassName="icon-arrow-right"
              bgColor1={
                cpf.length < 12 ? colors.cinzaLightMedium : colors.verdeLight
              }
              margin="40px 0 0 0"
              action={() => setStep(step + 1)}
            />
          </FlexContainer>
        </>
      )}
      {step === 1 && (
        <>
          <ProgressBar width="75%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Essa é a conta que você quer transferir?
          </Paragraph>
          {loadinge && (<Skeleton height={300} count={1} />)}
          {done && found && (<BeneficiaryCard Iniciais="IN" Nome={nameBene} Documento={docBene} />)}
          <FilledButton
            text={"Confirmar"}
            textColor="white"
            bgColor1={colors.verdeLight}
            action={() => {done ? setStep(step + 1) : console.log('ops')}}
            width="100%"
            height="46px"
            roundedSize="25px"
            margin="32px 0 0 0"
          />
          <FilledButton
            text="Cancelar"
            textColor="black"
            bgColor1="transparent"
            action={() => router.push(`/transferencia`)}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
        </>
      )}
      {step === 2 && (
        <>
          <ProgressBar width="100%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Qual valor você quer enviar para {nameBene}?
          </Paragraph>
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >

            <FlexContainer
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ width: `50%` }}
            >
              <NumberFormat
                inputFormat="description"
                inputType="text"
                descriptionText="Taxa de transação de 2%"
                value={price}
                onChange={(event: { target: { value: string } }) =>
                setPrice(event.target.value)
                }
                customInput={Input}
                format={currencyFormatter}
                prefix="R$ "
                thousandSeparator="."
                decimalSeparator=","
              />
              
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="10px 0 50px 0"
            >
              Saldo disponível: {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(user.meus_dados.saldo)}
            </Paragraph>
          </FlexContainer>
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={
              price === `0,00` ? colors.cinzaLightMedium : colors.verdeLight
            }
            action={() => {
              setShowModal(true);
            }}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
          <FilledButton
            text="Cancelar"
            textColor="black"
            bgColor1="transparent"
            action={() => router.push(`/transferencia`)}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
        </>
      )}
      {showModal && (
        <AlertModal
          btnText="Ver Comprovante"
          text="Transferência realizada com sucesso!"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnAction={() => {
            router.push(`/transferencia`);
          }}
          btnWidth="80%"
        />
      )}
    </ContainerNullish>
  );
}
