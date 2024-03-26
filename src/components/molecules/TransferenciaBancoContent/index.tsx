/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '@/components/atoms/ProgressBar';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import Input from '@/components/atoms/Input';
import SearchInput from '@/components/atoms/SearchInput';
import FilledButton from '../../atoms/FilledButton';
import AlertModal from '../AlertModal';
import BeneficiaryCard from '../BeneficiaryCard';
import { ContainerNullish, FlexContainer } from './style';
import InputCnpjCpf from '../../atoms/Input-cnpj-cpf';

export default function TransferenciaBancoTemplate() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  // const [search, setSearch] = useState(``);
  const [cpf, setCpf] = useState(``);
  const [agencia, setAgencia] = useState(``);
  const [conta, setConta] = useState(``);
  const [activateButton, setActivateButton] = useState(false);
  const [price, setPrice] = useState(`0,00`);
  const [showModal, setShowModal] = useState(false);

  function validateEmptyFields() {
    if (cpf !== `` && agencia !== `` && conta !== ``) {
      setActivateButton(true);
    }
  }

  useEffect(() => {
    validateEmptyFields();
  }, [cpf, agencia, conta]);

  const Items = [
    {
      id: 0,
      conta: `341`,
      banco: `Itaú Unibanco S.A.`,
    },
    {
      id: 1,
      conta: `01`,
      banco: `Banco do Brasil S.A.`,
    },
    {
      id: 2,
      conta: `237`,
      banco: `Banco bradesco S.A.`,
    },
    {
      id: 3,
      conta: `745`,
      banco: `Banco Citibank S.A.`,
    },
    {
      id: 4,
      conta: `534`,
      banco: `Banco do Nordeste`,
    },
    {
      id: 5,
      conta: `130`,
      banco: `Santander S.A.`,
    },
  ];

  return (
    <ContainerNullish>
      {step === 0 && (
        <>
          <ProgressBar width="40%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Selecione ou busque uma instituição financeira
          </Paragraph>
          {/* <Input
            inputFormat="default"
            inputType="text"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            // eyeIcon="icon-radio"
            iconComp={Icon}
            placeholder="Buscar"
            margin="0 0 20px 0"
          /> */}
          <SearchInput placeholderText="Buscar" />
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="20px"
          >
            {Items.map((item) => (
              <FlexContainer
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                key={item.id}
                marginTop="16px"
              >
                <Paragraph
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="22px"
                  fontColor={colors.cinzaLightDark}
                >
                  {item.conta}
                </Paragraph>
                <Paragraph
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="22px"
                  fontColor={colors.cinzaLightDark}
                  margin="0 0 0 20px"
                >
                  {item.banco}
                </Paragraph>
              </FlexContainer>
            ))}
          </FlexContainer>
          <FilledButton
            text="Confirmar"
            textColor="white"
            bgColor1={colors.verdeLight}
            action={() => setStep(step + 1)}
            width="100%"
            height="46px"
            roundedSize="25px"
            margin="45px 0 0 0"
          />
        </>
      )}
      {step === 1 && (
        <>
          <ProgressBar width="60%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Qual o CPF ou CNPJ para quem você quer transferir?
          </Paragraph>
          <InputCnpjCpf
            type="cpf"
            value={cpf}
            onChange={(e: any) => setCpf(e.target.value)}
          />
          <div style={{ marginTop: `20px`, width: `100%` }}>
            <Input
              inputType="text"
              value={agencia}
              inputFormat="label"
              labelText="Qual o número de agência sem dígito?"
              labelColor={colors.cinzaLightDark}
              onChange={(e: any) => setAgencia(e.target.value)}
            />
          </div>
          <div style={{ marginTop: `20px`, width: `100%` }}>
            <Input
              inputType="text"
              value={conta}
              inputFormat="label"
              labelText="Qual o número da conta?"
              labelColor={colors.cinzaLightDark}
              onChange={(e: any) => setConta(e.target.value)}
            />
          </div>
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
                activateButton === false
                  ? colors.cinzaLightMedium
                  : colors.verdeLight
              }
              margin="40px 0 0 0"
              action={() => setStep(step + 1)}
            />
          </FlexContainer>
        </>
      )}
      {step === 2 && (
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
          <BeneficiaryCard />
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
            action={() => router.push(`/transferencia`)}
            width="100%"
            height="46px"
            roundedSize="25px"
          />
        </>
      )}
      {step === 3 && (
        <>
          <ProgressBar width="100%" widthBar="100%" marginTop="0px" />
          <Paragraph
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontColor={colors.cinzaLightDark}
            margin="20px 0 20px 0"
          >
            Qual valor você quer enviar para José Humberto Medeiros?
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
            action={() => setShowModal(true)}
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
