/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import { ContainerNullish, FlexContainer } from './style';
import { HeadingOne, Paragraph, Caption } from '../../atoms/Text';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import PaddingContainer from '../../atoms/PaddingContainer';
import { DisplayFlex } from '../../atoms/Alignment';
import InputCnpjCpf from '../../atoms/Input-cnpj-cpf';
import Input from '../../atoms/Input';
import BackButton from '../../atoms/BackButton';
import ProgressBar from '../../atoms/ProgressBar/index';
import FilledButton from '../../atoms/FilledButton';
import CodeInputContainer from '../../molecules/CodeInputContainer';
import ActionCheckCard from '../../molecules/ActionCheckCard';
import InputMask from '../../atoms/Input-mask';
import CustomSelect from '../../atoms/CustomSelect';
import LoadingScreen from 'react-loading-screen';
import { useAlert } from 'react-alert';
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import CameraComponent from '../../molecules/CameraComponent';

interface IRegisterTemplate {
  checkCards?: Array<{
    id: number;
    title: string;
  }>;
}

interface ICheckCards {
  id: number;
  title: string;
}

export default function RegisterNaoTenhoContaContent({
  checkCards = [],
}: IRegisterTemplate) {
  const router = useRouter();
  const alert = useAlert();

  const [step, setStep] = useState(0);
  const [isLoding, setIsLoding] = useState(false);

  const [cnpj, setCnpj] = useState(``);
  const [empresa, setEmpresa] = useState(``);
  const [razaosocial, setRazaoSocial] = useState(``);
  const [name, setName] = useState(``);
  const [cpf, setCpf] = useState(``);
  const [mae, setMae] = useState(``);
  const [senha, setSenha] = useState(``);
  const [confirmarSenha, setConfirmarSenha] = useState(``);
  const [birthDate, setBirthDate] = useState(``);
  const [email, setEmail] = useState(``);
  const [telefone, setTelefone] = useState(``);
  const [estado, setEstado] = useState(``);
  const [cep, setCep] = useState(``);
  const [rua, setRua] = useState(``);
  const [numero, setNumero] = useState(``);
  const [complemento, setComplemento] = useState(``);
  const [bairro, setBairro] = useState(``);
  const [cidade, setCidade] = useState(``);

  const [buttonIsActive, setButtonIsActive] = useState(false);

  const handleSelectedBankType = (type: any) => {
    setEstado(type);
  };

  const [photo0, setPhotoOne] = useState('');
  const [photo1, setPhotoTw] = useState('');
  const [photo2, setPhotoTr] = useState('');
  const [photo3, setPhotoFo] = useState('');

  const [cameraModal, setCameraModal] = useState(false);

  const [photoId, setPhotoId] = useState(0);

  const { registro, logout }:any = useAuth();

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
    if (step === 0) {
      if (cnpj !== `` && empresa !== `` && razaosocial !== ``) {
        setButtonIsActive(true);
      } else {
        setButtonIsActive(false);
      }
    }
  }, [cnpj, empresa, razaosocial]);

  const itemsCheck: ICheckCards[] = [
    {
      id: 0,
      title: `Anexar Contrato Social`,
    },
    {
      id: 1,
      title: `Foto de frente do RG ou CNH`,
    },
    {
      id: 2,
      title: `Foto do verso do RG ou CNH`,
    },
    {
      id: 3,
      title: `Selfie segurando o RG ou CNH`,
    },
  ];

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
      />
    ));
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

  return (
    <ContainerNullish>
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
            dados da sua empresa abaixo.
          </Paragraph>
          <ProgressBar width="20%" widthBar="100%" />
          <InputCnpjCpf
            type="text"
            labelText="CNPJ"
            containerMargin="16px 0 0 0"
            value={cnpj}
            onChange={(e: any) => setCnpj(e.target.value)}
          />
          <Input
            inputFormat="label"
            inputType="text"
            labelText="Nome da Empresa (Nome Fantasia)"
            placeholder="Digite aqui o nome fantasia da empresa"
            margin="16px 0 0 0"
            value={empresa}
            onChange={(e: any) => setEmpresa(e.target.value)}
          />
          <Input
            inputFormat="label"
            inputType="text"
            labelText="Razão social"
            placeholder="Digite aqui a razão social da empresa"
            margin="16px 0 0 0"
            value={razaosocial}
            onChange={(e: any) => setRazaoSocial(e.target.value)}
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
                setStep(step + 1);
              }}
            />
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <BackButton
            textColor={colors.cinzaMediumDark}
            width="fit-content"
            clicked={() => setStep(step - 1)}
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
            Agora vamos precisar dos seus dados, para que possamos concluir a
            abertura da conta da sua empresa.
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
            labelText="Nome da Mãe"
            value={mae}
            onChange={(e: any) => setMae(e.target.value)}
            placeholder="Digite aqui o nome da sua mãe"
            margin="16px 0 16px 0px"
          />
          <InputCnpjCpf
            type="cpf"
            labelText="Digite seu CPF"
            value={cpf}
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
                setStep(step + 1);
              }}
            />
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <BackButton
            textColor={colors.cinzaMediumDark}
            width="fit-content"
            clicked={() => setStep(step - 1)}
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
            Agora você precisa definir a senha de acesso da sua conta da sua
            empresa. De acordo com os itens de segurança abaixo:
          </Paragraph>
          <ProgressBar width="60%" widthBar="100%" />
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
            inputLength={8}
            hasEyeIcon
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
      {step === 3 && (
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
            Vamos precisar do seu e-mail e telefone para que possamos manter
            contato com você.
          </Paragraph>
          <ProgressBar width="70%" widthBar="100%" />
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
      {step === 4 && (
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
            Vamos precisar do seu e-mail e telefone para que possamos manter
            contato com você.
          </Paragraph>
          <ProgressBar width="80%" widthBar="100%" />
          <InputMask
            isCep
            labelText="Cep"
            containerMargin="16px 0 16px 0"
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
            margin="16px 0 16px 0px"
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
              margin="40px 0 0 0"
              action={() => setStep(step + 1)}
            />
          </div>
        </>
      )}
      {step === 5 && (
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
            envie alguns documentos solicitados abaixo:
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
          <FilledButton
            roundedSize="25px"
            width="100%"
            bgColor1={
              buttonIsActive === true
                ? colors.verdeMedium
                : colors.cinzaLightMedium
            }
            height="45px"
            text="Abrir Conta"
            textColor="white"
            margin="40px 0 0 0"
            action={() => {
              let referencia = localStorage.getItem('inviteCode');
              api.post('auth/cadastro/pj/naotenhoconta', { name, empresa, mae, razaosocial, cnpj, cpf, birthDate, senha, confirmarSenha, referencia, email, telefone, estado, cep, rua, numero, complemento, bairro, cidade, photo0, photo1, photo2, photo3 })
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
                    router.push('/planos');
                  }());
                }
                else {
                  const alerta = alert.show(response.data['message'], {
                    timeout: 8000,
                    type: 'error'
                  })
                  
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
        </>
      )}
      {cameraModal && (
        <div
          style={{
            position: `absolute`,
            width: `100%`,
            top: 0,
            left: 0,
            height: `100vh`,
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
  );
}
