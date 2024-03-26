import Image from 'next/image';
import { colors } from '@/utils/colors';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { useRouter } from 'next/router';
import BackButton from '../atoms/BackButton';
import PaddingContainer from '../atoms/PaddingContainer';
import { HeadingTwo, Paragraph } from '../atoms/Text';
import { DisplayFlex } from '../atoms/Alignment';
import ComissaoContent from '../organisms/ComissaoContent';

export default function TaxasETarifas() {
  const router = useRouter();

  const tarifasContent = [
    {
      id: 0,
      title: `Abertura de contas`,
      items: [
        {
          id: 0,
          title: `Grátis`,
          value: ``,
        },
      ],
    },
    {
      id: 1,
      title: `Manutenção da conta Special`,
      items: [
        {
          id: 0,
          title: `Grátis`,
          value: ``,
        },
      ],
    },
    {
      id: 2,
      title: `Manutenção da conta Start 10x`,
      items: [
        {
          id: 0,
          title: `R$ 9,90 mensal`,
          value: `ou R$ 94,90 anual`,
        },
      ],
    },
    {
      id: 3,
      title: `Manutenção da conta Middle 10x`,
      items: [
        {
          id: 0,
          title: `R$ 9,90 mensal`,
          value: `ou R$ 94,90 anual`,
        },
      ],
    },
    {
      id: 4,
      title: `Manutenção da conta Premiere 10x`,
      items: [
        {
          id: 0,
          title: `R$ 9,90 mensal`,
          value: `ou R$ 94,90 anual`,
        },
      ],
    },
    {
      id: 5,
      title: `Manutenção da conta Elite 10x`,
      items: [
        {
          id: 0,
          title: `R$ 9,90 mensal`,
          value: `ou R$ 94,90 anual`,
        },
      ],
    },
  ];

  return (
    <>
      <PaddingContainer padding="22px">
        <BackButton clicked={() => router.back()} />
        <DisplayFlex align="center" justify="center">
          <div
            style={{
              width: `74px`,
              height: `74px`,
              backgroundColor: colors.cinzaLight,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              borderRadius: `10px`,
            }}
          >
            <Image
              src="/taxasetarifas.svg"
              width={24}
              height={31}
              alt="Taxas e tarifas"
            />
          </div>
        </DisplayFlex>
        <HeadingTwo
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.xLarge20}
          color={colors.verdeDark}
          margin="32px 0"
        >
          Taxas, Tarifas e Comissões
        </HeadingTwo>
        <Paragraph
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.small14}
          color={colors.cinzaDark}
          margin="0 0 30px 0"
        >
          Veja abaixo quais são as taxas, tarifas e comissões existentes na sua
          conta digital.
        </Paragraph>

        {tarifasContent.map((content) => (
          <div
            key={content.id}
            style={{
              // margin: `0 0 20px 0`,
              display: `flex`,
              alignItems: `flex-start`,
              justifyContent: `space-between`,
              padding: `9px 5px`,
              borderBottom: `1px solid ${colors.verdeLight}`,
            }}
          >
            <HeadingTwo
              fontSize={fontSizes.small14}
              color={colors.cinzaMedium}
              fontWeight={fontWeight.bold}
            >
              {content.title}
            </HeadingTwo>
            {content.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  width: `130px`,
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

        <Paragraph
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.small14}
          color={colors.cinzaDark}
          margin="24px 0 30px 0"
        >
          Comissões por referenciamento de clientes:
        </Paragraph>

        <ComissaoContent />
      </PaddingContainer>
    </>
  );
}
