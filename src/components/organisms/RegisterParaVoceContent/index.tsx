/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import SumsubWebSdk from '@sumsub/websdk-react'
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import { ContainerNullish, FlexContainer, ModalContainer, ModalContent, ModalImage } from './style';
import { HeadingOne, Paragraph, Caption, HeadingThree } from '../../atoms/Text';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import PaddingContainer from '../../atoms/PaddingContainer';
import { DisplayFlex } from '../../atoms/Alignment';
import InputCnpjCpf from '../../atoms/Input-cnpj-cpf';
import InputMask from '../../atoms/Input-mask';
import Input from '../../atoms/Input';
import BackButton from '../../atoms/BackButton';
import ProgressBar from '../../atoms/ProgressBar/index';
import FilledButton from '../../atoms/FilledButton';
import CodeInputContainer from '../../molecules/CodeInputContainer';
import FilledButtonContainer from '../../molecules/FilledButtonContainer';
import CustomSelect from '../../atoms/CustomSelect';
import ActionCheckCard from '../../molecules/ActionCheckCard';
import CameraComponent from '../../molecules/CameraComponent';
import LoadingScreen from 'react-loading-screen';
import { useAlert } from 'react-alert';
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';



interface IRegisterTemplate {
  checkCards?: Array<{
    id: number;
    title: string;
  }>;
}

interface ICheckCards {
  id: number;
  title: string;
  checked: boolean;
}

export default function RegisterParaVoceContent({
  checkCards = [],
}: IRegisterTemplate) {
  const router = useRouter();
  const alert = useAlert();



    // These parameters should be used for all requests
    const SUMSUB_APP_TOKEN = 'sbx:rPPpKu7JpO40hwA5JfFGq95P.iPl4OJ7pomCo3MHUXeVQ7ct88d8ADmeV'; // Example: sbx:uY0CgwELmgUAEyl4hNWxLngb.0WSeQeiYny4WEqmAALEAiK2qTC96fBad - Please don't forget to change when switching to production
    const SUMSUB_SECRET_KEY = 'Ybmskct3KGnou5ru6UIoERWU57xb1HVq'; // Example: Hej2ch71kG2kTd1iIUDZFNsO5C1lh5Gq - Please don't forget to change when switching to production
    const SUMSUB_BASE_URL = 'https://api.sumsub.com';

  const [step, setStep] = useState(0);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState(``);
  const [documento, setCpf] = useState(``);
  const [birthDate, setBirthDate] = useState(``);
  const [senha, setSenha] = useState(``);
  const [motherName, setmotherName] = useState(``);
  const [confirmarSenha, setConfirmarSenha] = useState(``);
  const [email, setEmail] = useState(``);
  const [telefone, setTelefone] = useState(``);
  const [estado, setEstado] = useState(``);
  const [cep, setCep] = useState(``);
  const [rua, setRua] = useState(``);
  const [numero, setNumero] = useState(``);
  const [complemento, setComplemento] = useState(``);
  const [bairro, setBairro] = useState(``);
  const [cidade, setCidade] = useState(``);
  const [underAge, setUnderAge] = useState(false);

  const [responsibleName, setResponsibleName] = useState(``);
  const [responsiblePhone, setResponsiblePhone] = useState(``);
  const [responsibleMail, setResponsibleMail] = useState(``);
  const [responsibleDocument, setResponsibleDocument] = useState(``);


  const [cameraModal, setCameraModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [photoId, setPhotoId] = useState(0);

  const [cardPhoto, setCardPhoto] = useState(``);

  const [buttonIsActive, setButtonIsActive] = useState(false);

  const [photo0, setPhotoOne] = useState('');
  const [photo1, setPhotoTw] = useState('');
  const [photo2, setPhotoTr] = useState('');
  const [photo3, setPhotoFo] = useState('');

  const { registro, logout }:any = useAuth();


  const handleSelectedBankType = (type: any) => {
    setEstado(type);
    console.log(type)
  };

  var itemsCheck: ICheckCards[] = [
    {
      id: 0,
      title: `Selfie`,
      checked: photo0,
    },
    {
      id: 1,
      title: `Foto de frente do RG ou CNH`,
      checked: photo1,
    },
    {
      id: 2,
      title: `Foto do verso do RG ou CNH`,
      checked: photo2,
    },
    {
      id: 3,
      title: `Selfie segurando o RG ou CNH`,
      checked: photo3,
    },
  ];
  const handlePhotoTaken = (uri: any) => {
    setCameraModal(false);
    setCardPhoto(uri);

    if(photoId == 0)
      setPhotoOne(uri);
    if(photoId == 1)
      setPhotoTw(uri);
    if(photoId == 2)
      setPhotoTr(uri);
    if(photoId == 3)
      setPhotoFo(uri);


  };

  const isOverEighteen = ( birthday: Date ) => {
    const ageDifMs = Date.now() - birthday.getTime();

    const ageDate = new Date(ageDifMs);

    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if(age > 17) return true;

    return false;
}

  const buildCheckCards = () =>
    itemsCheck?.map((check) => (
      <ActionCheckCard
        key={check.id}
        title={check.title}
        iconName="icon-check"
        height="76px"
        hasShadow
        containerMargin="20px 0 20px 0"
        titleSize="14px"
        titleWeight="500"
        iconColor="white"
        iconSize="18px"
        action={() => {
          setCameraModal(true);
          setPhotoId(check.id);
          console.log(check);

        }}
        bgIconColor={check.checked ? colors.verdeLight : colors.cinzaLightMedium}
      />
    ));
    function launchWebSdk(accessToken) {
      let snsWebSdkInstance = snsWebSdk.init(
              accessToken,
              // token update callback, must return Promise
              () => this.getNewAccessToken()
          )
          .withConf({
              lang: 'en', //language of WebSDK texts and comments (ISO 639-1 format)
          })
          .on('onError', (error) => {
            console.log('onError', payload)
          })
          .onMessage((type, payload) => {
            console.log('onMessage', type, payload)
          })
          .build();

      // you are ready to go:
      // just launch the WebSDK by providing the container element for it
      snsWebSdkInstance.launch('#sumsub-websdk-container')
  }
  function getcep(cep) {
    cep = cep.replace(/\D/g, '');
    setCep(cep);
    if (cep.length == 8) {
      fetch('https://viacep.com.br/ws/' + cep + '/json/', {
        method: 'GET',
        headers: { Accept: 'application/json' },
      })
        .then((response) => response.text())
        .then((responseData) => {
          var dados = JSON.parse(responseData);
          if (!dados.uf) {
            const alerta = alert.show('CEP Inválido', {
              timeout: 8000, // custom timeout just for this one alert
              type: 'error',
            });
            setCep('');
          }
          setRua(dados.logradouro);
          setCidade(dados.localidade);
          setComplemento(dados.complemento);
          setBairro(dados.bairro);
          setEstado(dados.uf);
        })
        .catch((error) => {});
    }
  }

  useEffect(() => {
    //console.log(step);
    if (step === 0) {
      if (name !== `` && documento !== `` && birthDate !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 1) {
      if (senha !== `` && confirmarSenha !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 2) {
      if (email !== `` && telefone !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 3) {
      if (
        cep !== `` &&
        rua !== `` &&
        numero !== `` &&
        complemento !== `` &&
        bairro !== `` &&
        estado !== `` &&
        cidade !== ``
      ) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 4) {
      if (
        photo0 !== `` &&
        photo1 !== `` &&
        photo2 !== `` &&
        photo3 !== ``
      ) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    } else if (step === 5) {
      launchWebSdk('sbx:YubsRuHZVUTYUrSf7j68zAfy');
    }

  }, [
    name,
    motherName,
    documento,
    birthDate,
    senha,
    confirmarSenha,
    email,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    step,
    photo0,
    photo1,
    photo2,
    photo3,
  ]);

  useEffect(() => {
    setButtonIsActive(false);
  }, [step]);

  return (
    <>
      <ContainerNullish showOverflow={!showModal}>
        {step === 0 && (
          <>
            <BackButton
              textColor={colors.cinzaMediumDark}
              width="fit-content"
              clicked={() => router.push(`/register`)}
              marginBottom="20px"
            />
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
              Para abrir uma conta com a gente vamos precisar que você preencha os
              dados abaixo.
            </Paragraph>
            <ProgressBar width="30%" widthBar="100%" />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Nome Completo"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Digite aqui seu nome completo"
              margin="16px 0 16px 0px"
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Nome Completo (Mãe)"
              value={motherName}
              onChange={(e: any) => setmotherName(e.target.value)}
              placeholder="Digite o nome completo da sua mãe"
              margin="16px 0 16px 0px"
            />
            <InputCnpjCpf
              type="cpf"
              labelText="Digite seu CPF"
              value={documento}
              onChange={(e: any) => setCpf(e.target.value)}
              inputMargin="0 0 16px 0"
            />
            <InputMask
              isDate
              labelText="Data de Nascimento"
              value={birthDate}
              onChange={(e: any) => setBirthDate(e.target.value)}
            />
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 0 0"
                action={() => {
                  const [ day, month, year ] = birthDate.split("/");

                  const birthday = new Date(`${year}-${month}-${day}`);

                  const isUnderAge = !isOverEighteen(birthday);

                  if (isUnderAge) {
                    setUnderAge(true);
                    setStep(6);
                    return;
                  }

                  setStep(step + 1);
                }}
              />
            </div>
          </>
        )}
        {
          underAge && step === 6 &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85vh'}} >
            <div>
              <BackButton clicked={() => setStep(0)} />

              <ProgressBar width="50%" widthBar="100%" />

              <HeadingOne
                margin="20px 0 8px 0"
                color={colors.verdeDark}
                fontSize="23px"
                lineHeight="32px"
              >
                Temos uma conta digital só para você!
              </HeadingOne>
              <Paragraph
                fontSize="15px"
                lineHeight="22px"
                fontColor={colors.cinzaLightDark}
                margin="0 0 18px 0"
              >
                Nossa conta digital para pessoas da sua idade tem diversos benefícios.
              </Paragraph>
              <Paragraph
                fontSize="15px"
                lineHeight="22px"
                fontColor={colors.cinzaLightDark}
                margin="0 0 18px 0"
              >
                Você já inicio a abertura da sua conta. Para continuarmos, informe os dados da pessoa responsável por você.
              </Paragraph>
            </div>
            <FilledButton
                borderRounded
                bgColor1={ colors.verdeMedium }
                text='CONTINUAR'
                textColor={ colors.branco }
                width="100%"
                height="56px"
                action={() => setStep(2)}
              />
          </div>
        }
        {step === 1 && (
          <>
            <BackButton clicked={() => setStep(step - 1)} />
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
              Agora você precisa definir a senha de acesso da sua conta. De acordo
              com os itens de segurança abaixo:
            </Paragraph>
            <ProgressBar width="50%" widthBar="100%" />
            <CodeInputContainer
              getInputValue={(e) => setSenha(e)}
              // value={senha}
              hasEyeIcon
              inputLength={8}
              labelText="Senha"
              margin="36px 0"
            />
            <CodeInputContainer
              getInputValue={(e) => setConfirmarSenha(e)}
              // value={confirmarSenha}
              hasEyeIcon
              inputLength={8}
              labelText="Confirmar Senha"
              margin="18px 0"
            />
            <FlexContainer
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  a
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Letras
                  <br />
                  minúsculas
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  A
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Letras
                  <br />
                  maiúsculas
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  #
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Caractere
                  <br />
                  especial
                </Paragraph>
              </FlexContainer>
              <FlexContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Paragraph
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  fontColor={colors.verdeMedium}
                >
                  8
                </Paragraph>
                <Paragraph
                  fontSize="10px"
                  lineHeight="14px"
                  fontWeight="400"
                  fontColor={colors.cinzaLightDark}
                  textAlign="center"
                >
                  Mínimo de
                  <br />
                  caractere
                </Paragraph>
              </FlexContainer>
            </FlexContainer>
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 0 0"
                action={() => setStep(step + 1)}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <BackButton clicked={() => {
              if (underAge) return setStep(6);

              setStep(step - 1);
            }} />
            {
              underAge
              ? <>
                <HeadingOne
                  margin="20px 0 8px 0"
                  color={colors.verdeDark}
                  fontSize="23px"
                  lineHeight="32px"
                >
                  Informe os dados da pessoa responsável por você
                </HeadingOne>
                <ProgressBar width="60%" widthBar="100%" />
                <Input
                  inputType="text"
                  inputFormat="label"
                  labelText="Nome completo do responsável"
                  value={responsibleName}
                  onChange={(e: any) => setResponsibleName(e.target.value)}
                  placeholder="Nome e sobrenome"
                  margin="40px 0 16px 0px"
                />
                <InputMask
                  isTelephone
                  labelText="Telefone do responsável"
                  value={responsiblePhone}
                  onChange={(e: any) => setResponsiblePhone(e.target.value)}
                  inputMargin='0 0 16px 0px'
                />
                <Input
                  inputType="email"
                  inputFormat="label"
                  labelText="E-mail do responsável"
                  value={responsibleMail}
                  onChange={(e: any) => setResponsibleMail(e.target.value)}
                  placeholder="Digite aqui seu email"
                  margin="0 0 16px 0px"
                />
                <InputCnpjCpf
                  type="cpf"
                  labelText="CPF do responsável"
                  value={responsibleDocument}
                  onChange={(e: any) => setResponsibleDocument(e.target.value)}
                  inputMargin="0 0 16px 0"
                />
              </>
              : <>
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
                  Vamos precisar do seu e-mail e telefone para que possamos manter
                  contato com você.
                </Paragraph>
                <ProgressBar width="60%" widthBar="100%" />
                <Input
                  inputType="email"
                  inputFormat="label"
                  labelText="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Digite aqui seu email"
                  margin="16px 0 16px 0px"
                />
                <InputMask
                  isTelephone
                  labelText="Telefone"
                  value={telefone}
                  onChange={(e: any) => setTelefone(e.target.value)}
                />
              </>
            }
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 0 0"
                action={() => setStep(step + 1)}
              />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <BackButton clicked={() => setStep(step - 1)} />
            <HeadingOne
              margin="20px 0 8px 0"
              color={colors.verdeDark}
              fontSize="23px"
              lineHeight="32px"
            >
              { underAge ? 'Agora cadastro o endereço da pessoa responsável por você': 'Cadastro'}
            </HeadingOne>
            {
              !underAge &&
              <Paragraph
                fontSize="15px"
                lineHeight="22px"
                fontColor={colors.cinzaLightDark}
                margin="0 0 18px 0"
              >
                Vamos precisar do seu endereço para que possamos manter
                contato com você.
              </Paragraph>
            }
            <ProgressBar width="80%" widthBar="100%" />
            <InputMask
              isCep
              labelText="Cep"
              containerMargin="40px 0 16px 0"
              value={cep}
              beforeMaskedValueChange={(e: any) => {
                getcep(e.value);
                console.log(e);
              }}
              onChange={(e: any) => getcep(e.target.value)}
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Rua"
              placeholder="Digite aqui o nome da sua rua"
              margin="16px 0 16px 0px"
              value={rua}
              onChange={(e: any) => setRua(e.target.value)}
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Número"
              placeholder="Digite aqui o número da sua rua"
              margin="16px 0 16px 0px"
              value={numero}
              onChange={(e: any) => setNumero(e.target.value)}
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Complemento"
              placeholder="Digite aqui o complemento"
              margin="16px 0 16px 0px"
              value={complemento}
              onChange={(e: any) => setComplemento(e.target.value)}
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Bairro"
              placeholder="Digite aqui o nome do seu bairro"
              margin="16px 0 16px 0px"
              value={bairro}
              onChange={(e: any) => setBairro(e.target.value)}
            />
            <Input
              inputType="text"
              inputFormat="label"
              labelText="Cidade"
              placeholder="Digite aqui o nome da sua cidade"
              margin="16px 0 36px 0px"
              value={cidade}
              onChange={(e: any) => setCidade(e.target.value)}
            />
            <CustomSelect
              labelText="Estado"
              placeholderText="Selecione o estado"
              selectOption={(type) => handleSelectedBankType(type)}
            />
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `flex-end`,
                width: `100%`,
              }}
            >
              <FilledButton
                borderRounded
                roundedSize="50%"
                bgColor1={
                  buttonIsActive === true
                    ? colors.verdeMedium
                    : colors.cinzaLightMedium
                }
                iconClassName="icon-arrow-right"
                width="45px"
                height="45px"
                margin="40px 0 40px 0"
                action={() => {
                  if (underAge) {
                    setShowModal(true);
                    return
                  }

                  setStep(step + 1)
                }}
              />
            </div>
          </>
        )}
        {step === 4 && (
          <>
          {isLoding ? (
            <>
            <BackButton clicked={() => setStep(step - 1)} />
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
              Para que nossa equipe possa liberar sua conta, precisamos que nos
              envie fotos dos documentos abaixo:
            </Paragraph>
            <ProgressBar width="100%" widthBar="100%" />
          <LoadingScreen
            loading={true}
            bgColor="#f1f1f1"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc="/loading.gif"
            text="Validando dados..."
          />
          </>

        ) : (
          <>
            <BackButton clicked={() => setStep(step - 1)} />
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
              Para que nossa equipe possa liberar sua conta, precisamos que nos
              envie fotos dos documentos abaixo:
            </Paragraph>
            <ProgressBar width="100%" widthBar="100%" />
            {buildCheckCards()}
            <FlexContainer
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: `20px` }}
            >
              <input type="checkbox" />
              <Caption style={{ marginLeft: `10px` }}>
                Declaro que concordo e aceito os{` `}
                <strong onClick={() => window.open('https://www.pixland.com.br/política-de-kyc', '_blank')} style={{ color: colors.verdeMedium }}>
                  Termos de uso
                </strong>
                {` `}e{` `}
                <strong onClick={() => window.open('https://www.pixland.com.br/politica-contra-lavagem-de-dinheiro', '_blank')} style={{ color: colors.verdeMedium }}>
                  Políticas de privacidade.
                </strong>
              </Caption>
            </FlexContainer>
            <FilledButtonContainer
              height="46px"
              btnText="Abrir Conta"
              btnBgColor1={
                buttonIsActive === true
                  ? colors.verdeMedium
                  : colors.cinzaLightMedium
              }
              btnIsRounded
              btnRoundedSize="50px"
              btnTextColor={colors.branco}
              margin="32px 0 0 0"
              btnAction={() => {
                console.log(photo0);
                let referencia = localStorage.getItem('inviteCode');
                api.post('auth/cadastro', { name, documento, birthDate, senha, confirmarSenha, email, telefone, estado, cep, rua, numero, complemento, bairro, cidade, photo0, photo1, photo2, photo3, motherName, referencia })
                .then((response) => {

                  if(response.data['success'])
                  {
                    (async function() {

                      if(!await registro(response.data['token']))
                      {
                        const alerta = alert.show('erro na autenticação', {
                          timeout: 8000, // custom timeout just for this one alert
                          type: 'error'
                        })
                      }
                    }());
                  }
                  else {
                    const alerta = alert.show(response.data['message'], {
                      timeout: 8000,
                      type: 'error'
                    })
                    //router.push('/planos');
                  }

                })
                .catch((err) => {
                    /**
                     * The 'catch' method is executed only when the request fails to complete.
                     */
                    console.log(err);
                });
                /*if (data) {
                  console.log(data);
                }
                else {

                  console.log(data);

                }*/
              }}

            />
          </>)}
          </>
        )}
        {cameraModal && (
          <div
            style={{
              position: `absolute`,
              width: `100%`,
              top: 0,
              left: 0,
              height: `100%`,
              backgroundColor: colors.branco,
              zIndex: 10,
            }}
          >
            <PaddingContainer padding="22px">
              <BackButton clicked={() => setCameraModal(false)} />
              <DisplayFlex justify="center">
                <Paragraph
                  fontSize={fontSizes.large18}
                  fontWeight={fontWeight.bold}
                  fontFamily={fontFamily.roboto}
                  margin="0 0 15px 0"
                >
                  Selfie
                </Paragraph>
              </DisplayFlex>

              <div
                style={{
                  width: `100%`,
                  maxWidth: `100%`,
                  position: `relative`,
                  overflowX: `hidden`,
                  flexDirection: `row`,
                  height: `100%`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                <CameraComponent
                  photoTaken={(e) => handlePhotoTaken(e)}
                  camError={() => setCameraModal(false)}
                />

              </div>
            </PaddingContainer>
          </div>
        )}
      </ContainerNullish>
      {
        showModal &&
        <ModalContainer>
          <ModalContent>
            <ModalImage src={`../modal-${error ? 'error' : 'success'}.svg`} />
            <HeadingThree>
              {
                error
                ? 'Ocorreu um erro inesperado. Tente novamente mais tarde'
                : 'Cadastro realizado com sucesso'
              }
            </HeadingThree>
            {
              !error &&
              <Paragraph>Enviamos um e-mail para seu responsável. Agora ele precisa validar sua abertura de conta.</Paragraph>
            }
            <FilledButton
                borderRounded
                bgColor1={ colors.verdeMedium }
                text='ENTENDI'
                textColor={ colors.branco }
                width="100%"
                height="56px"
                action={() => {
                  router.push('/home')
                  setShowModal(false)
                }}
              />
              <FilledButton
                borderRounded
                bgColor1='transparent'
                text='ENVIAR FEEDBACK'
                textColor={ colors.verdeMedium }
                width="100%"
                height="56px"
                action={() => {
                  router.push('/feedback')
                  setShowModal(false)
                }}
              />
          </ModalContent>
        </ModalContainer>
      }
    </>
  );
}
