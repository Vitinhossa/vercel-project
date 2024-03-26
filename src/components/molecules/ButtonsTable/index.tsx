import { colors } from '@/utils/colors';
import { useRouter } from 'next/router';
import { Table, Row, Column } from './style';
import FilledButtonContainer from '../FilledButtonContainer';

export default function ButtonsTable() {
  const router = useRouter();
  return (
    <Table>
      <Row>
        {/*<Column>
          <FilledButtonContainer
            btnBgColor1={colors.verdeMedium}
            btnBgColor2={colors.verdeLight}
            btnText="Gestor Financeiro"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/gestorfinanceiro`)}
          />
  </Column>*/}
        <Column width="45%">
          <FilledButtonContainer
            btnBgColor1={colors.magentaLight}
            btnBgColor2={colors.magentaMedium}
            btnText="PIX"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/pix`)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.amareloLight}
            btnBgColor2={colors.amareloMedium}
            btnText="Agregação"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/agregacao`)}
          />
        </Column>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.verdeDark}
            btnBgColor2={colors.verdeMediumDark}
            btnText="Transferência"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/transferencia`)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.azulMediumDark}
            btnBgColor2={colors.azulMedium}
            btnText="Investimentos"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/investimentos`)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.magentaLight}
            btnBgColor2={colors.magentaMedium}
            btnText="Pagamento"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/pagamentos`)}
          />
        </Column>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.verdeMedium}
            btnBgColor2={colors.verdeLight}
            btnText="Deposito"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/deposito`)}
          />
        </Column>
      </Row>
      <Row>
        <Column width="45%">
          <FilledButtonContainer
            btnBgColor1={colors.azulLightMedium}
            btnBgColor2={colors.azulLight}
            btnText="Store PixLand"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/store10x`)}
          />
        </Column>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.amareloLightMedium}
            btnBgColor2={colors.amareloMedium}
            btnText="Extrato e Comprovantes"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/extract`)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.verdeMediumDark}
            btnBgColor2={colors.verdeLight}
            btnText="Recebimentos"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/recebimentos`)}
          />
        </Column>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.azulLightMedium}
            btnBgColor2={colors.azulLight}
            btnText="Convidar amigos"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            btnAction={() => router.push(`/convideseusamigos`)}
          />
        </Column>
      </Row>
      <Row>
        <Column width="90%">
          <FilledButtonContainer
            btnBgColor1={colors.amareloLightMedium}
            btnBgColor2={colors.amareloMedium}
            btnText="Cobranças"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            //btnAction={() => router.push(`/home`)}
          />
        </Column>
        <Column>
          <FilledButtonContainer
            btnBgColor1={colors.verdeDark}
            btnBgColor2={colors.verdeMediumDark}
            btnText="Store Rewards"
            btnTextColor={colors.branco}
            btnBoxShadow="0 0 8px rgba(0, 0, 0, 0.25)"
            //btnAction={() => router.push(`/storerewards`)}
          />
        </Column>
      </Row>
    </Table>
  );
}
