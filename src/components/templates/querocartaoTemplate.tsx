import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import Image from 'next/image';
import { useState } from 'react';
import router from 'next/router';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import { Paragraph } from '../atoms/Text';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import { DisplayFlex } from '../atoms/Alignment';
import ActionModal from '../molecules/AlertModal';

export default function QueroCartaoTemplate() {
  const [isModalOptionOpen, setIsModalOptionOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  return (
    <>
      <Header title="Escolha seu cartão" />
      <PaddingContainer padding="31px 20px">
        <Paragraph
          fontSize={fontSizes.small14}
          fontWeight={fontWeight.bold}
          lineHeight={fontSizes.xLarge20}
          fontColor={colors.cinzaDark}
        >
          Escolha aqui qual opção de cartão você escolhe para ser seu!
        </Paragraph>
        <Paragraph
          fontSize={fontSizes.small14}
          fontFamily={fontFamily.roboto}
          lineHeight={fontSizes.xLarge20}
          fontColor={colors.cinzaLightDark}
          margin="0 0 32px 0"
        >
          Você no estilo 10!
        </Paragraph>

        <DisplayFlex justify="center">
          <div style={{ maxWidth: `360px` }}>
            <DisplayFlex justify="space-between" align="center">
              <i
                className="icon-chevron-left"
                style={{
                  fontSize: fontSizes.xLarge32,
                  color: colors.verdeLight,
                }}
              />
              <div style={{ margin: `0 30px` }}>
                <Image
                  src="/cards/silver.jpg"
                  width={214}
                  height={136}
                  alt="Cartão silver"
                />
              </div>
              <i
                className="icon-chevron-right"
                style={{
                  fontSize: fontSizes.xLarge32,
                  color: colors.verdeLight,
                }}
              />
            </DisplayFlex>
          </div>
        </DisplayFlex>

        <Paragraph
          margin="32px 0 32px 0"
          fontSize={fontSizes.small14}
          fontFamily={fontFamily.roboto}
          fontColor={colors.cinzaLightDark}
        >
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Pellentesque accusmsan egestas purus. Class
          aptent, torquent per conubia nostra, per inceptos himenaeos.
          Pellentesque accusmsan egestas purus.
        </Paragraph>

        <FilledButtonContainer
          btnBgColor1={colors.verdeLight}
          btnTextColor={colors.branco}
          height="46px"
          btnRoundedSize="50px"
          btnText="Quero esse cartão"
          btnAction={() => setIsModalOptionOpen(true)}
        />
      </PaddingContainer>

      {isModalOptionOpen && (
        <ActionModal
          isOptionModal
          modalWidth="232px"
          btnWidth="80px"
          btnHeight="38px"
          text="Tem certeza que deseja
          escolher esse cartão?"
          positiveBtnAction={() => setIsConfirmModalOpen(true)}
          negativeBtnAction={() => setIsModalOptionOpen(false)}
          closeClick={() => setIsModalOptionOpen(false)}
        />
      )}

      {isConfirmModalOpen && (
        <ActionModal
          modalWidth="232px"
          btnWidth="135px"
          btnHeight="38px"
          text="O cartão foi escolhido
          com sucesso!"
          btnText="Voltar"
          btnAction={() => router.push(`/cartoes`)}
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
        />
      )}
    </>
  );
}
