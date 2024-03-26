import { useState } from 'react';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import Input from '@/components/atoms/Input';
import { ContainerNullish, FlexContainer } from './style';
import { Paragraph, HeadingOne } from '../../atoms/Text';
import FilledButton from '../../atoms/FilledButton';
import ProfileCard from '../../molecules/ProfileCard';

export default function DepositoTransferenciaContent() {
  const router = useRouter();

  const [price, setPrice] = useState(`0,00`);

  const [step, setStep] = useState(0);

  return (
    <ContainerNullish>
      {step === 0 && (
        <>
          <Paragraph fontSize="15px" fontWeight="400">
            Qual valor você quer depositar na sua conta?
          </Paragraph>
          <FlexContainer
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <FlexContainer
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ width: `50%` }}
            >
              <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px">
                R$
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Input
                inputType="text"
                value={price}
                inputFormat="without-bg"
                leftText="R$"
                onChange={(e: any) => setPrice(e.target.value)}
              />
            </FlexContainer>
          </FlexContainer>
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={colors.verdeLight}
            action={() => setStep(step + 1)}
            width="100%"
            height="46px"
            roundedSize="25px"
            margin="32px 0 0 0"
          />
          <FilledButton
            text="Cancelar"
            textColor="black"
            bgColor1="transparent"
            action={() => router.push(`/deposito`)}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
        </>
      )}
      {step === 1 && (
        <>
          <Paragraph fontSize="15px" fontWeight="400">
            Envie ou use os dados da sua conta para depositar:
          </Paragraph>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop="32px"
          >
            <FlexContainer
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <Paragraph
                fontWeight="400"
                fontSize="12px"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
              >
                R$
              </Paragraph>
              <HeadingOne
                fontWeight="700"
                fontSize="20px"
                lineHeight="28px"
                color={colors.cinzaMediumDark}
                margin="0 0 0 12px"
              >
                {price}
              </HeadingOne>
            </FlexContainer>
            <FlexContainer
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <Paragraph
                fontWeight="400"
                fontSize="12px"
                lineHeight="16px"
                fontColor={colors.cinzaLightDark}
                margin="12px 0 20px 0"
              >
                A ser realizado em 28/07/2021
              </Paragraph>
            </FlexContainer>
          </FlexContainer>
          <Paragraph fontSize="14px" fontWeight="400">
            Para validar seu depósito você deve enviar o comprovante de
            transferência
          </Paragraph>

          <ProfileCard

            bank="001"
            agency="0001"
            account="91829"
            document="91829"
            type="Conta Corrente"
            padding="0 20px"
          />

          <FilledButton
            text="Enviar Comprovante"
            textColor="white"
            bgColor1={colors.verdeLight}
            action={() => setStep(step + 1)}
            width="100%"
            height="46px"
            roundedSize="25px"
            margin="32px 0 0 0"
          />
          <FilledButton
            text="Cancelar"
            textColor="black"
            bgColor1="transparent"
            action={() => router.push(`/deposito`)}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
        </>
      )}
    </ContainerNullish>
  );
}
