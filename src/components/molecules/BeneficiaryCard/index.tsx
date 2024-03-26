import { colors } from '@/utils/colors';
import { Container, LeftContainer, Circle, RightContainer } from './style';
import { Paragraph } from '../../atoms/Text';

interface IConvideSeusAmigosTemplate {
  Iniciais?: string;
  Nome?: string;
  Banco?: string;
  Agencia?: string;
  Conta?: string;
  Documento?: string;
}
export default function BeneficaryCard({
  Iniciais = `1B2C3V`,
  Nome = `1B2C3V`,
  Banco = `1B2C3V`,
  Agencia = `1B2C3V`,
  Conta = `1B2C3V`,
  Documento = `1B2C3V`,

}: IConvideSeusAmigosTemplate) {
  return (
    <Container>
      <LeftContainer>
        <Circle>
          <Paragraph fontSize="15px" lineHeight="22px" fontWeight="400">
            {Iniciais.charAt(0)}
          </Paragraph>
        </Circle>
      </LeftContainer>
      <RightContainer>
        <Paragraph
          fontSize="16px"
          lineHeight="22px"
          fontWeight="400"
          fontColor={colors.cinzaMedium}
        >
          {Nome}
        </Paragraph>
        <Paragraph
          fontSize="14px"
          lineHeight="20px"
          fontWeight="400"
          fontColor={colors.cinzaLightDark}
        >
          {Documento}
        </Paragraph>
        <Paragraph
          fontSize="14px"
          lineHeight="20px"
          fontWeight="400"
          fontColor={colors.cinzaLightDark}
        >
          Banco: {Banco}
        </Paragraph>
        <Container>
          <Container>
            <Paragraph
              fontSize="14px"
              lineHeight="20px"
              fontWeight="400"
              fontColor={colors.cinzaLightDark}
            >
              Agência: {Agencia}
            </Paragraph>
          </Container>
          <Container>
            <Paragraph
              fontSize="14px"
              lineHeight="20px"
              fontWeight="400"
              fontColor={colors.cinzaLightDark}
            >
              Conta: {Conta}
            </Paragraph>
          </Container>
        </Container>
      </RightContainer>
    </Container>
  );
}
