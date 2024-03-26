/* eslint-disable no-console */
import { useState } from 'react';
import Image from 'next/image';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import FilledButtonContainer from '@/components/molecules/FilledButtonContainer';
import PaddingContainer from '@/components/atoms/PaddingContainer';
import SearchInput from '@/components/atoms/SearchInput';
import IconListItems from '@/components/molecules/IconListItems';
import IconListItem from '@/components/atoms/IconListItem';
import InputCnpjCpf from '@/components/atoms/Input-cnpj-cpf';
import CodeInputContainer from '../../molecules/CodeInputContainer';
import { Paragraph, HeadingTwo } from '../../atoms/Text';
import { DisplayFlex } from '../../atoms/Alignment';
import AlertModal from '../../molecules/AlertModal';
import {
  MainContainer,
  IconsContainer,
  SquareIcon,
  LogoContainer,
  ButtonContainer,
  IconContainer,
  CheckListItem,
  CheckList,
  CheckListItemHead,
} from './style';

interface IBankItem {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  action: (e: any) => void;
}

export default function BankConnectContent() {
  const [connectStep, setConnectStep] = useState(0);
  const [selectedBank, setSelectedBank] = useState<IBankItem>();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleConnectBank = () => {
    setIsCompleted(true);
  };
  const handleSelectBank = (e: any) => {
    setSelectedBank(e);
    setConnectStep(3);
  };

  const banks = [
    {
      id: 0,
      title: `Banco do Brasil`,
      subtitle: `www.bancodobrasil.com`,
      imageUrl: ``,
      action: (e: any) => {
        handleSelectBank(e);
      },
    },
    {
      id: 1,
      title: `Bradesco`,
      subtitle: `www.bradesco.com`,
      imageUrl: ``,
      action: (e: any) => {
        handleSelectBank(e);
      },
    },
  ];

  // 0 - Conecte o seu Banco
  // 1 - A PixLand é segura para conectar ao seu Banco
  // 2 - Escolha seu banco
  // 3 - Entre com suas credências

  return (
    <>
      {connectStep === 0 && (
        <MainContainer>
          <DisplayFlex align="center" justify="center" direction="column">
            <IconsContainer>
              <SquareIcon>
                <i
                  className="icon-bank"
                  style={{
                    fontSize: fontSizes.xLarge32,
                    lineHeight: `20px`,
                    color: colors.verdeDark,
                  }}
                />
              </SquareIcon>
              <i
                className="icon-change-2"
                style={{
                  fontSize: fontSizes.xLarge32,
                  lineHeight: `20px`,
                  color: colors.cinzaLightMedium,
                }}
              />
              <LogoContainer>
                <Image
                  src="/logo_sa.png"
                  width="74"
                  height="74"
                  alt="logo"
                />
              </LogoContainer>
            </IconsContainer>
            <HeadingTwo
              fontSize={fontSizes.xLarge20}
              fontWeight={fontWeight.bold}
              color={colors.cinzaMediumDark}
              margin="0 0 10px 0"
            >
              Conecte o seu Banco
            </HeadingTwo>
            <Paragraph
              fontColor={colors.cinzaMedium}
              fontSize={fontSizes.small14}
              lineHeight="20px"
              textAlign="center"
            >
              Em vez de verificar seu crédito ou solicitar recibos de pagamento,
              a PixLand se conecta com segurança ao seu banco para ver quando e
              o quanto você receberá.
            </Paragraph>

            <ButtonContainer direction="row">
              <IconContainer>
                <Image
                  src="/shield_icon.svg"
                  width="22px"
                  height="22px"
                  alt="shield icon"
                />
              </IconContainer>
              <FilledButtonContainer
                btnText="Conecte com segurança"
                btnBgColor1={colors.verdeLight}
                btnTextColor={colors.branco}
                btnRoundedSize="50px"
                height="46px"
                btnAction={() => setConnectStep(1)}
              />
            </ButtonContainer>
          </DisplayFlex>
        </MainContainer>
      )}

      {connectStep === 1 && (
        <MainContainer align="flex-start">
          <DisplayFlex
            align="center"
            justify="space-between"
            direction="column"
          >
            <LogoContainer padding="60px 0 0 0">
              <Image
                src="/logo_sa.png"
                width="74"
                height="74"
                alt="logo"
              />
            </LogoContainer>
            <div style={{ maxWidth: `320px` }}>
              <HeadingTwo
                textAlign="center"
                fontWeight={fontWeight.bold}
                fontSize={fontSizes.xLarge20}
                lineHeight="28px"
                margin="30px 0 40px 0"
              >
                A PixLand é segura para conectar ao seu Banco
              </HeadingTwo>
            </div>

            <CheckList>
              <CheckListItem>
                <CheckListItemHead>
                  <i
                    className="icon-check"
                    style={{
                      marginRight: `15px`,
                      fontSize: fontSizes.xLarge20,
                      color: colors.verdeLight,
                    }}
                  />
                  <Paragraph
                    fontWeight={fontWeight.bold}
                    fontSize={fontSizes.small14}
                  >
                    Seguro
                  </Paragraph>
                </CheckListItemHead>
                <Paragraph margin="0 0 0 35px" fontSize={fontSizes.small14}>
                  A criptografia ajuda a proteger seus dados
                </Paragraph>
              </CheckListItem>
              <CheckListItem>
                <CheckListItemHead>
                  <i
                    className="icon-check"
                    style={{
                      marginRight: `15px`,
                      fontSize: fontSizes.xLarge20,
                      color: colors.verdeLight,
                    }}
                  />
                  <Paragraph
                    fontWeight={fontWeight.bold}
                    fontSize={fontSizes.small14}
                  >
                    Privado
                  </Paragraph>
                </CheckListItemHead>
                <Paragraph margin="0 0 0 35px" fontSize={fontSizes.small14}>
                  Suas credencias nunca serão disponibilizadas para a PixLand
                </Paragraph>
              </CheckListItem>
            </CheckList>

            <ButtonContainer>
              <div style={{ maxWidth: `272px` }}>
                <Paragraph
                  fontSize={fontSizes.xSmall10}
                  fontFamily={fontFamily.roboto}
                  lineHeight="14px"
                  fontColor={colors.cinzaLightMedium}
                  margin="0 0 10px 0"
                  textAlign="center"
                >
                  Ao selecionar “Continue” você aceita a
                  <br />
                  <span style={{ color: colors.cinzaLightDark }}>
                    Politica de Privacidade da PixLand.
                  </span>
                </Paragraph>
              </div>
              <FilledButtonContainer
                btnText="Continue"
                btnBgColor1={colors.verdeLight}
                btnTextColor={colors.branco}
                btnRoundedSize="50px"
                height="46px"
                btnAction={() => setConnectStep(2)}
              />
            </ButtonContainer>
          </DisplayFlex>
        </MainContainer>
      )}

      {connectStep === 2 && (
        <MainContainer align="flex-start">
          <PaddingContainer padding="20px 0">
            <Paragraph
              fontSize={fontSizes.small14}
              fontWeight={fontWeight.bold}
              margin="0 0 10px 0"
            >
              Escolha seu banco
            </Paragraph>
            <SearchInput placeholderText="Buscar" margin="0 30px 0 0" />
            <IconListItems items={banks} />
          </PaddingContainer>
        </MainContainer>
      )}

      {connectStep === 3 && (
        <MainContainer align="flex-start" fitContent>
          <PaddingContainer padding="0px 0">
            <IconListItem
              title={selectedBank?.title}
              subtitle={selectedBank?.subtitle}
              imageUrl={selectedBank?.imageUrl}
            />
            <Paragraph
              fontSize={fontSizes.small14}
              fontWeight={fontWeight.bold}
              margin="20px 0 15px 0"
            >
              Entre com suas credências
            </Paragraph>
            <InputCnpjCpf
              labelText="Digite seu CPF"
              containerMargin="0 0 20px 0"
            />
            <CodeInputContainer
              getInputValue={(e) => console.log(e)}
              inputLength={6}
              labelText="Senha"
              margin="18px 0 35px 0"
            />
            <DisplayFlex align="center" direction="column">
              <FilledButtonContainer
                btnText="Conectar ao Banco"
                btnBgColor1={colors.verdeLight}
                btnRoundedSize="50px"
                btnTextColor={colors.branco}
                height="46px"
                btnAction={() => handleConnectBank()}
              />
              <Paragraph
                fontSize={fontSizes.medium16}
                fontWeight={fontWeight.bold}
                color={colors.cinzaMediumDark}
                margin="16px 0 0 0"
              >
                Cancelar
              </Paragraph>
            </DisplayFlex>
          </PaddingContainer>
        </MainContainer>
      )}

      {isCompleted && (
        <AlertModal
          btnText="Ok"
          text="Banco conectado com sucesso!"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnAction={() => {
            setConnectStep(0);
            setIsCompleted(false);
          }}
        />
      )}
    </>
  );
}
