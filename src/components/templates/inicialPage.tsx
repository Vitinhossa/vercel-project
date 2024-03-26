import React from 'react';
import Image from 'next/image';
import { colors } from '@/utils/colors';
import { fontWeight } from '@/utils/fonts';
import logoVerde from '../../../public/logo_sa.png';
import inicialPagePhone from '../../../public/inicialPagePhone.svg';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import PaddingContainer from '../atoms/PaddingContainer';
import Link from '../atoms/Link';
import { HeadingTwo, Legend, Paragraph } from '../atoms/Text';
import { DisplayFlex } from '../atoms/Alignment';

interface IInicialPage {
  title?: string;
  description?: string;
  buttonText?: string;
  aboveButtonText?: string;
  linkText?: string;
  contentPadding?: string;
  linkAction?: () => any;
  buttonAction?: () => any;
}

export default function inicialPage({
  title,
  description,
  buttonText,
  aboveButtonText,
  linkText,
  contentPadding,
  linkAction,
  buttonAction,
}: IInicialPage) {
  return (
    <>
      <div
        style={{
          width: `100%`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          marginBottom: `24px`,
        }}
      >
        <div style={{ width: `152px`, margin: `32px 0 40px` }}>
          <Image src={logoVerde} alt="" />
        </div>

        <Image src={inicialPagePhone} alt="" />
      </div>

      <PaddingContainer padding={contentPadding}>
        <HeadingTwo
          color={colors.verdeDark}
          fontWeight={fontWeight.bold}
          margin="24px 0 8px 0"
          lineHeight="32px"
        >
          {title}
        </HeadingTwo>
        <Legend lineHeight="20px" color={colors.cinzaDark} margin="0 0 24px 0">
          {description}
        </Legend>
        <FilledButtonContainer
          height="46px"
          btnText={buttonText}
          btnBgColor1={colors.verdeLight}
          btnIsRounded
          btnRoundedSize="50px"
          btnTextColor={colors.branco}
          btnAction={buttonAction}
        />
        <DisplayFlex direction="column" align="center" justify="center">
          <Paragraph margin="16px 0 4px 0" lineHeight="22px">
            {aboveButtonText}
          </Paragraph>
          <Link text={linkText} clicked={linkAction} />
        </DisplayFlex>
      </PaddingContainer>
    </>
  );
}
