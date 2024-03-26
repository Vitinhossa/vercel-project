import { useState } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '@/components/atoms/ProgressBar';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import Input from '@/components/atoms/Input';
import { ContainerNullish, FlexContainer } from './style';
import FilledButton from '../../atoms/FilledButton';
import ActionIconCard from '../ActionIconCard';
import AlertModal from '../AlertModal';
import BeneficiaryCard from '../BeneficiaryCard';
import QrCode from '../QrCode';

export default function TransferenciaPixTemplate() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(`0,00`);
  const [qrCode, setQrCode] = useState(``);
  const [showModal, setShowModal] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleScan = (data: any) => {
    if (scanned === false) {
      if (data !== null) {
        setScanned(true);
        setStep(3);
      }
    }
  };

  return (
    <ContainerNullish>
      {step === 0 && (
        <>
          <ProgressBar width="25%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Qual valor você quer transferir?
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
              style={{ width: `42%` }}
            >
              <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px">
                R$
              </Paragraph>
            </FlexContainer>
            <FlexContainer
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              style={{ width: `50%` }}
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
              Saldo disponível: R$ 3.000,00
            </Paragraph>
          </FlexContainer>
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={
              price === `0,00` ? colors.cinzaLightMedium : colors.verdeLight
            }
            action={() => setStep(step + 1)}
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
      {step === 1 && (
        <>
          <ProgressBar width="50%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Insira a Chave PIX ou leia o QR Code para efetuar a transferência de
            <strong> R$ 300,00</strong>
          </Paragraph>
          <Input
            inputFormat="default"
            inputType="text"
            value={qrCode}
            onChange={(e: any) => setQrCode(e.target.value)}
            eyeIcon="icon-copy"
            placeholder="Cole aqui a chave PIX"
            margin="0 0 20px 0"
          />
          <ActionIconCard
            title="Leitor de QR code PIX"
            height="76px"
            iconMargin="0 12px 0 0"
            titleSize="14px"
            hasShadow
            iconName="icon-menu"
            iconSize="24px"
            iconColor={colors.verdeLight}
            containerMargin="0 0 20px 0"
            action={() => {
              setStep(2);
            }}
          />
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={
              qrCode === `` ? colors.cinzaLightMedium : colors.verdeLight
            }
            action={() => setStep(3)}
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
      {step === 2 && (
        <>
          <QrCode onScan={handleScan} />
        </>
      )}
      {step === 3 && (
        <>
          <ProgressBar width="75%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Essa é a conta que você quer transferir
            <strong> R$ 300,00</strong>
          </Paragraph>
          <BeneficiaryCard />
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={colors.verdeLight}
            action={() => setShowModal(true)}
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
