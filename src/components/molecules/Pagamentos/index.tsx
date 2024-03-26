/* eslint-disable */
import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import Input from '@/components/atoms/Input';
import FilledButton from '@/components/atoms/FilledButton';
// import Qr from 'react-qr-scanner';
import QrCode from '../QrCode';
import { ContainerNullish } from './style';
import { FlexContainer } from '../CustomModal/style';
import ActionIconCard from '../ActionIconCard';
import CustomModal from '../CustomModal';
import CodeInputContainer from '../CodeInputContainer';
import AlertModal from '../AlertModal';
import ModalListInfo from '../ModalInfoList';
import { InfoList_Template } from '../../../utils/interfaces';
import { BarcodeReader, BoletoBarcodeReader, BoletoBarcodeReaderProvider, BoletoBarcodeReaderSupport, isSmartDevice } from 'react-boleto-reader';

import Cookies from 'js-cookie'
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import { useAlert } from 'react-alert';
import ReactLoading from "react-loading";

import moment from 'moment';
import 'moment/locale/pt-br';

const pagamentosType = [
  {
    id: 0,
    title: `Leitor de código de barras`,
    icon: `icon-Icones-32`,
    route: `/pagamentos/boleto`,
  },
  {
    id: 1,
    title: `Leitor de QR code`,
    icon: `icon-menu`,
    route: `/pagamentos/qrcode`,
  },
];

interface IPagamentos {
  type: string;
}

export default function Pagamentos({ type }: IPagamentos) {
  const router = useRouter();

  const [showCustomModal, setShowCustomModal] = useState(false);
  const [stepModal, setStepModal] = useState(0);
  const [password, setPassword] = useState(``);
  const [passwordBtnIsActive, setPasswordBtnIsActive] = useState(false);
  const [recoverSuccess, setRecoverSuccess] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [boleto, setBoleto] = useState(null);
const [barcode, setBarcode] = useState(null);
const [reading, setReading] = useState(true);
const [readersHeight, setReadersHeight] = useState(0);
const [carregando, setCarregando] = useState(false);
const alert = useAlert();

moment.locale('pt-br');
let readed = false;

  const handleScan = (data: any) => {
    if (scanned === false) {
      if (data !== null) {
        setScanned(true);
        setShowCustomModal(true);
      }
    }
  };

    /**
   * Not important: example stuff
   */
  const reset = useCallback(() => {
    setBoleto(null);
    setBarcode(null);
    setReading(false);
  }, []);

  /**
   * Not important: example stuff
   */
  const restart = useCallback(() => {
    setBoleto(null);
    setBarcode(null);
    setReading(true);
  }, []);

  /**
   *
   */
  const onCancel = useCallback(() => {
    reset();
  }, [reset]);


async function onDetectBoleto(detectedBoleto){

  if (!readed) {
    readed = true;
    async function getproducts() {
      
      try {
        
        setCarregando(true);
       
        console.log(detectedBoleto)
          const token = Cookies.get('token')
          if (token) {
  
            console.log("Got a token in the cookies, let's see if it is valid")
            api.defaults.headers.Authorization = `PixLand ${token}`
            
            api.post('boleto/get/info', {boleto:detectedBoleto.barcode, tipo:detectedBoleto.type})
            .then((response) => {
              setCarregando(false);
  
  
              if(response.data['success'])
              {
  
                //setOperadoras(response.data['operadoras']);
                setShowCustomModal(true);

                setReading(false);
                setBoleto(detectedBoleto);
                setCarregando(false);
                console.log(detectedBoleto)
                  
              }
              else{
                console.log('ERROR')
              }
              
            })
            .catch((err) => {
              setCarregando(false);
              readed = true;
              console.log(err)
            });
  
          }
          else{
  
          }
      
        
        

      } catch (error) {
        console.error(error);
      }
    }
    getproducts();
  }
 
}


  


  const [orientation, setOrientation] = useState('');


  useEffect(() => {
    const isLandscape = () => window.matchMedia('(orientation:landscape)').matches;

    const onWindowResize = () => {              
      clearTimeout(window.resizeLag)
      window.resizeLag = setTimeout(() => {
        delete window.resizeLag                       
        setOrientation(isLandscape() ? 'landscape' : 'portrait')
      }, 200)
    };

    if (password !== `` && password.length >= 6) {
      setPasswordBtnIsActive(true);
    } else {
      setPasswordBtnIsActive(false);
    }
    
    
    
    onWindowResize(),
      window.addEventListener('resize', onWindowResize),
      () => window.removeEventListener('resize', onWindowResize)
      
  }, [password]);

  const buildActionCards = () =>
    pagamentosType.map((action) => (
      <ActionIconCard
        key={action.id}
        title={action.title}
        height="76px"
        iconMargin="0 12px 0 0"
        titleSize="14px"
        hasShadow
        iconName={action.icon}
        iconSize="24px"
        iconColor={colors.verdeLight}
        containerMargin="0 20px 20px 0px"
        action={() => {
          router.push(action.route);
        }}
      />
    ));
  return (
    <>
      <ContainerNullish>
        {type === `cards` && (
          <>
            <FlexContainer
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Paragraph
                fontWeight="400"
                fontSize="15px"
                lineHeight="20px"
                margin="20px"
              >
                Insira o código de barras para pagar o boleto que deseja ou
                capture através do leitor de código de barras ou QR Code. {orientation}
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Paragraph
                fontWeight="700"
                fontSize="14px"
                lineHeight="20px"
                margin="16px 20px 0 20px"
              >
                Código de Barras
              </Paragraph>
            </FlexContainer>

            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `20px`,
                width: `100%`,
              }}
            >
              {buildActionCards()}
            </div>
          </>
        )}
        {type === `qrcode` && (
          <>
            <QrCode onScan={handleScan} />
          </>
        )}
        {type === `boleto` && (
          <>
          {carregando ? (
          <ReactLoading
            type={"spin"}
            color={"#03fc4e"}
            height={90}
            width={'100%'}
          />
        ) : (
          <BoletoBarcodeReaderProvider>
        <BoletoBarcodeReaderSupport>
          {orientation == 'portrail' ? (
            <article id="not-smart-device">
              <div>
                Vire a tela do dispositivo.
              </div>
            </article>
          ) : (
            <>
              {reading ? (
                <div id="readers">


                      <BoletoBarcodeReader
                        height={readersHeight}
                        onCancel={onCancel}
                        onDetected={onDetectBoleto}
                      />



                </div>
              ) : ((!boleto && !barcode) ? (
                <article id="start">
                  <button
                    type="button"
                    className="btn"
                    onClick={restart}
                  >
                    Começar Leitura
                  </button>
                </article>
              ) : (

                <></>

              ))}
            </>
          )}
        </BoletoBarcodeReaderSupport>
      </BoletoBarcodeReaderProvider>)}
          </>
        )}
      </ContainerNullish>
      {showCustomModal === true && stepModal === 0 && (
        <CustomModal
          title="Pagamento"
          iconClassName="icon-close"
          hasCurrency
          titleCurrency="Você está pagando"
          subtitleCurrency="Saldo dispinível: R$ 3.000,00"
          onClick={() => setShowCustomModal(false)}
        >
          <hr color={colors.cinzaLight} />
          <FlexContainer
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop="10px"
          >
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Pagando:
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                27/07/2021 (hoje)
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Vencimento:
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                30/07/2021 (hoje)
              </Paragraph>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Paragraph
              fontSize="12px"
              fontWeight="400"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="10px 0 0 0"
            >
              Código de barras:
            </Paragraph>
            <Paragraph
              fontSize="12px"
              fontWeight="400"
              lineHeight="16px"
              fontColor={colors.black}
              margin="4px 0 0 0"
            >
              00000000.00000000.00000000.0000000000000.000000
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Paragraph
              fontSize="14px"
              fontWeight="700"
              lineHeight="20px"
              fontColor={colors.black}
              margin="16px 0 10px 0"
            >
              Destino
            </Paragraph>
            <Paragraph
              fontSize="12px"
              fontWeight="400"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 4px 0"
            >
              Banco Destinatário
            </Paragraph>
            <Paragraph
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              fontColor={colors.black}
              margin="0 0 10px 0"
            >
              {boleto?.banks}
            </Paragraph>
            <Paragraph
              fontSize="12px"
              fontWeight="400"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="0 0 4px 0"
            >
              Destinatário
            </Paragraph>
            <Paragraph
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              fontColor={colors.black}
              margin="0 0 10px 0"
            >
              Azul Viagens LTDA
            </Paragraph>
            <Paragraph
              fontSize="14px"
              fontWeight="700"
              lineHeight="20px"
              fontColor={colors.black}
              margin="16px 0 10px 0"
            >
              Pagamento
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop="10px"
          >
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Juros:
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                R$ 0,00
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Desconto::
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                R$ 0,00
              </Paragraph>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop="10px"
          >
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Multa:
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                R$ 0,00
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Paragraph
                fontSize="12px"
                fontWeight="400"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                Total de encargos:
              </Paragraph>
              <Paragraph
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                fontColor={colors.cinzaMediumDark}
                margin="4px 0 0 0"
              >
                R$ 0,00
              </Paragraph>
            </FlexContainer>
          </FlexContainer>
          <Input
            inputFormat="label"
            inputType="text"
            labelText="Descrição"
            placeholder="Adicionar uma descrição"
            margin="10px 0 0 0"
          />
          <FilledButton
            text="Confirmar"
            textColor="white"
            height="50px"
            roundedSize="25px"
            bgColor1={colors.verdeLight}
            margin="10px 0 0 0"
            action={() => setStepModal(stepModal + 1)}
          />
        </CustomModal>
      )}
      {showCustomModal === true && stepModal === 1 && (
        <CustomModal
          title="Pagamento"
          iconClassName="icon-close"
          onClick={() => setShowCustomModal(false)}
        >
          <Paragraph
            margin="20px 0 16px 0"
            fontSize="15px"
            lineHeight="20px"
            fontWeight="400"
            fontColor={colors.cinzaLightDark}
          >
            Para realizar o pagamento digite sua senha
          </Paragraph>
          <CodeInputContainer
            getInputValue={(e) => setPassword(e)}
            inputLength={6}
            labelText="Senha"
            margin="18px 0"
          />
          <FilledButton
            text="Confirmar"
            textColor="white"
            height="50px"
            roundedSize="25px"
            bgColor1={
              passwordBtnIsActive ? colors.verdeMedium : colors.cinzaLightMedium
            }
            margin="10px 0 0 0"
            action={() => setRecoverSuccess(true)}
          />
        </CustomModal>
      )}
      {recoverSuccess && (
        <AlertModal
          btnWidth="80%"
          btnText="Ver Comprovante"
          text="Transferência realizada com
          sucesso!"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnAction={() => {
            setRecoverSuccess(false);
            setStepModal(stepModal + 1);
          }}
        />
      )}
      {showCustomModal === true && stepModal === 2 && (
        <CustomModal
          title="Pagamento"
          iconClassName="icon-close"
          onClick={() => {
            router.push(`/pagamentos`);
            setShowCustomModal(false);
          }}
          hasCurrency
          titleCurrency="Você está pagando"
          subtitleCurrency="Saldo dispinível: R$ 3.000,00"
        >
          <ModalListInfo infoList={InfoList_Template} />
        </CustomModal>
      )}
    </>
  );
}
