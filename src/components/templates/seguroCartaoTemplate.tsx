import { colors } from '@/utils/colors';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import { Paragraph, HeadingTwo } from '../atoms/Text';
import FilledButtonContainer from '../molecules/FilledButtonContainer';

export default function SeguroCartaoTemplate() {
  return (
    <>
      <Header title="Seguro" />
      <PaddingContainer padding="30px 20px">
        <HeadingTwo
          fontSize={fontSizes.large18}
          fontWeight={fontWeight.bold}
          color={colors.cinzaDark}
          margin="0 0 26px 0"
        >
          Detalhes do Seguro
        </HeadingTwo>

        <div style={{ margin: `0 0 18px 0` }}>
          <Paragraph
            fontSize={fontSizes.xSmall12}
            fontWeight={fontWeight.bold}
            margin="0 0 4px 0"
          >
            Cobertura
          </Paragraph>
          <Paragraph
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.xSmall12}
            fontColor={colors.cinzaLightDark}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </div>
        <div style={{ margin: `0 0 18px 0` }}>
          <Paragraph
            fontSize={fontSizes.xSmall12}
            fontWeight={fontWeight.bold}
            margin="0 0 4px 0"
          >
            Vigência
          </Paragraph>
          <Paragraph
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.xSmall12}
            fontColor={colors.cinzaLightDark}
          >
            Sed effictur sapien sed urna fringilla dignissim.
          </Paragraph>
        </div>
        <div>
          <Paragraph
            fontSize={fontSizes.xSmall12}
            fontWeight={fontWeight.bold}
            margin="0 0 4px 0"
          >
            Parceiro
          </Paragraph>
          <Paragraph
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.xSmall12}
            fontColor={colors.cinzaLightDark}
          >
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </Paragraph>
        </div>

        <FilledButtonContainer
          btnText="Contratar"
          btnBgColor1={colors.verdeLight}
          height="46px"
          btnRoundedSize="60px"
          btnTextColor={colors.branco}
          margin="90px 0 0 0"
        />
      </PaddingContainer>
    </>
  );
}
