import Image from 'next/dist/client/image';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import router from 'next/router';
import Header from '../molecules/Header';
import { Paragraph } from '../atoms/Text';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import PaddingContainer from '../atoms/PaddingContainer';
import { DisplayFlex } from '../atoms/Alignment';

export default function ConfigCartaoTemplate() {
  return (
    <>
      <Header title="Configurações do cartão" />
      <PaddingContainer padding="30px 20px">
        <Paragraph
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.small14}
          fontColor={colors.cinzaDark}
        >
          Altere senha, peça 2ª via ou troque de cartão.
        </Paragraph>
        <Paragraph
          fontFamily={fontFamily.roboto}
          fontSize={fontSizes.small14}
          fontColor={colors.cinzaDark}
          margin="0 0 23px 0"
        >
          Você no estilo 10!
        </Paragraph>

        <DisplayFlex justify="space-evenly" align="center">
          <Image
            src="/cards/silver.jpg"
            width={158}
            height={104}
            alt="Cartão silver"
          />
          <DisplayFlex direction="column" justify="center" align="center">
            <FilledButtonContainer
              btnText="Senha"
              btnTextColor={colors.branco}
              height="46px"
              width="160px"
              btnBgColor1={colors.verdeLight}
              btnRoundedSize="50px"
              margin="0 0 8px 0"
              btnAction={() => router.push(`/cartoes/configuracao/senha`)}
            />
            <FilledButtonContainer
              btnText="2° via"
              btnTextColor={colors.branco}
              height="46px"
              width="160px"
              btnBgColor1={colors.verdeLight}
              btnRoundedSize="50px"
              btnAction={() => router.push(`/cartoes/configuracao/2via`)}
            />
          </DisplayFlex>
        </DisplayFlex>

        <FilledButtonContainer
          btnText="Trocar cartão"
          btnTextColor={colors.branco}
          height="46px"
          btnBgColor1={colors.verdeLight}
          btnRoundedSize="50px"
          margin="50px 0 0 0"
          btnAction={() => router.push(`/cartoes/querocartao`)}
        />
      </PaddingContainer>
    </>
  );
}
