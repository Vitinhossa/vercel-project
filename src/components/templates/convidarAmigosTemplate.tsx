import Image from 'next/image';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';
import plusSquare from '@/assets/svg/plus-square';
import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import { DisplayFlex } from '../atoms/Alignment';
import { Paragraph } from '../atoms/Text';
import IconListItem from '../atoms/IconListItem';

export default function ConvidarAmigosTemplate() {
  return (
    <>
      <Header title="Convidar amigos" />
      <PaddingContainer>
        <div style={{ margin: `35px 0 0 0` }}>
          <DisplayFlex align="center" justify="center">
            <Image
              src="/invite.png"
              width={200}
              height={154}
              alt="Convidar amigos"
            />
          </DisplayFlex>
        </div>
        <Paragraph
          fontColor={colors.cinzaLightMedium}
          fontSize={fontSizes.small15}
          margin="25px 0"
        >
          Por onde você quer indicar seu amigo?
        </Paragraph>

        <div>
          <IconListItem title="WhatsApp" iconName="icon-message" hasArrow />
          <IconListItem title="E-mail" iconName="icon-message" hasArrow />
          <IconListItem
            title="Mais opções"
            isImageComponent={plusSquare}
            hasArrow
            imageSize="32px"
          />
        </div>
      </PaddingContainer>
    </>
  );
}
