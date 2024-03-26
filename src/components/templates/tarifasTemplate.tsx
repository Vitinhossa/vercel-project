import { colors } from '@/utils/colors';
import { fontWeight, fontSizes, fontFamily } from '@/utils/fonts';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import { Paragraph, HeadingTwo } from '../atoms/Text';

export default function TarifasTemplates() {
  const TarifasContent = [
    {
      id: 0,
      title: `Geral`,
      items: [
        {
          id: 0,
          title: `Imposto sobre OP Financeira`,
          value: `9%`,
        },
        {
          id: 1,
          title: `Taxa de saque`,
          value: `R$ 5,00`,
        },
      ],
    },
    {
      id: 1,
      title: `Pagar`,
      items: [
        {
          id: 0,
          title: `Boleto ou conta`,
          value: `R$ 2,00`,
        },
        {
          id: 1,
          title: `9h até 16h, dias úteis (horário de Brasília)`,
          value: ``,
        },
        {
          id: 2,
          title: `Convênio`,
          value: `R$ 2,00`,
        },
        {
          id: 3,
          title: `9h até 16h, dias úteis (horário de Brasília)`,
          value: ``,
        },
      ],
    },
    {
      id: 2,
      title: `Depósito`,
      items: [
        {
          id: 0,
          title: `Boleto bancário`,
          value: `R$ 2,00`,
        },
        {
          id: 1,
          title: `24h, todos os dias (hoário de Brasilia)`,
          value: ``,
        },
      ],
    },
    {
      id: 3,
      title: `Transferência`,
      items: [
        {
          id: 0,
          title: `Boleto ou conta`,
          value: `R$ 2,00`,
        },
        {
          id: 1,
          title: `9h até 16h, dias úteis (horário de Brasília)`,
          value: ``,
        },
        {
          id: 2,
          title: `Convênio`,
          value: `R$ 2,00`,
        },
        {
          id: 3,
          title: `9h até 16h, dias úteis (horário de Brasília)`,
          value: ``,
        },
      ],
    },
  ];
  return (
    <>
      <Header title="Tarifas e horários" />
      <PaddingContainer padding="20px">
        <Paragraph
          margin="0 0 30px 0"
          fontColor={colors.cinzaLightDark}
          fontSize={fontSizes.small15}
          lineHeight="22px"
        >
          Queremos ser transparentes com você sempre, abaixo estão as taxas e
          horários que aplicamos*:
        </Paragraph>
        {TarifasContent.map((content) => (
          <div key={content.id} style={{ margin: `0 0 20px 0` }}>
            <HeadingTwo
              fontSize={fontSizes.small14}
              color={colors.cinzaDark}
              fontWeight={fontWeight.bold}
              margin="0 0 8px 0"
            >
              {content.title}
            </HeadingTwo>
            {content.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: `flex`,
                  justifyContent: `space-between`,
                  width: `100%`,
                }}
              >
                <Paragraph
                  fontSize={fontSizes.small14}
                  fontFamily={fontFamily.roboto}
                  fontColor={colors.cinzaLightDark}
                  margin="0 0 8px 0"
                >
                  {item.title}
                </Paragraph>
                <Paragraph
                  fontSize={fontSizes.small14}
                  fontFamily={fontFamily.roboto}
                  fontColor={colors.cinzaLightDark}
                >
                  {item.value}
                </Paragraph>
              </div>
            ))}
          </div>
        ))}
      </PaddingContainer>
    </>
  );
}
