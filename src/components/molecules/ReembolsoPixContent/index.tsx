import { useState } from 'react';
import { Container, Title, Saldo, InputDescription } from './style';
import Input from '@/components/atoms/Input';
import FilledButton from '@/components/atoms/FilledButton';
import { colors } from '@/utils/colors';
import AlertModal from '../AlertModal';

function RefundDatail ({ label, type }: { label: string, type: string }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      padding: '16px 0'
    }}>
      <p>{ label }</p>
      <h4>{ type }</h4>
    </div>
  )
}

export default function ReembolsoPixContent() {

  const [balance, setBalance] = useState('20.000,00'); // receber da api
  const [refundLimit, setRefundLimit] = useState('300,00'); // receber da api
  const [value, setValue] = useState(`0`);
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);

  return (
    <Container>
      {
        step === 0 && (
          <>
            <div>
              <Title>Qual é o valor do reembolso</Title>
              <Saldo>Saldo disponível em conta R$ {balance}</Saldo>
              <div
                style={{
                  width: `100%`,
                  position: `relative`,
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <div style={{ position: `absolute` }}>
                  <span style={{ fontSize: '32px', fontWeight: 'bold' }}>R$</span>
                </div>
                <Input
                  inputType="number"
                  value={value}
                  inputFormat="normal"
                  onChange={(e: any) => setValue(e.target.value)}
                  inputPadding="3px 0 0 50px"
                  styleInput={{ fontSize: '32px', fontWeight: 'bold' }}
                />
              </div>
              <InputDescription>Você pode reembolsar até R$ {refundLimit}</InputDescription>
            </div>
            <FilledButton
                text="CONTINUAR"
                bgColor1={
                  value !== `` && value !== `0`
                    ? colors.verdeMedium
                    : colors.cinzaLight
                }
                textColor={
                  value !== `` && value !== `0`
                    ? colors.branco
                    : colors.cinzaLightDark
                }
                height="56px"
                margin="32px 0 0 0"
                action={() => setStep(step + 1)}
              />
          </>
        )
      }
      {
        step === 1 && (
          <>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Reembolsando</h4>
              <div
                style={{
                  width: `100%`,
                  position: `relative`,
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <div style={{ position: `absolute` }}>
                  <span style={{ fontSize: '32px', fontWeight: 'bold' }}>R$</span>
                </div>
                <Input
                  inputType="number"
                  value={value}
                  inputFormat="normal"
                  onChange={(e: any) => setValue(e.target.value)}
                  inputPadding="3px 0 0 50px"
                  styleInput={{ fontSize: '32px', fontWeight: 'bold' }}
                />
              </div>
              <p style={{ marginTop: '26px' }}>
                para <strong>FULANO DE TAL SILVA SANTOS</strong>
              </p>
              <a
                href='#'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '26px'
                }}
              >
                <img src="/pix/u_comment-dots.svg" alt="" />
                <p style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: colors.verdeMedium,
                  marginLeft: '8px'
                }}>
                  Motivo do reembolso
                </p>
              </a>
              <div>
                <RefundDatail label='Tipo de transferência' type='PIX' />
                <RefundDatail label='Instituição' type='BANCO DO BRASIL S.A' />
              </div>
            </div>
            <FilledButton
                text="REEMBOLSAR"
                bgColor1={
                  value !== `` && value !== `0`
                    ? colors.verdeMedium
                    : colors.cinzaLight
                }
                textColor={
                  value !== `` && value !== `0`
                    ? colors.branco
                    : colors.cinzaLightDark
                }
                height="56px"
                margin="32px 0 0 0"
                action={() => setPinOpen(true)}
              />
          </>
        )
      }
      { pinOpen && (
          <AlertModal
            btnText="Confirmar"
            text="Digite seu PIN"
            btnAction={() => {
              setPinOpen(false);
              setSuccess(true);
            }}
            closeClick={() => {
              setPinOpen(false);
            }}
            isPinModal
            hasCloseBtn
            btnWidth="80%"
          />
      )}
      {
        success && (
          <AlertModal
            btnWidth="80%"
            btnText="Entendi"
            text="Transferência realizada com
            sucesso!"
            iconName="icon-circle-check"
            iconColor={colors.verdeLight}
            btnAction={() => {
              setSuccess(false);
            }}
          />
        )
      }
      {
        showModalError && (
          <AlertModal
            btnWidth="80%"
            btnText="TENTAR NOVAMENTE"
            text="Não foi possível realizar a devolução."
            btnAction={() => {
              setShowModalError(false);
              // adicionar função de tentar novamente
            }}
          />
        )
      }
    </Container>
  )
}
