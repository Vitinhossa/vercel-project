/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { colors } from '@/utils/colors';
import { fontWeight, fontFamily, fontSizes } from '@/utils/fonts';
import { useRouter } from 'next/router';
import {
  HeaderContainer,
  ImageContainer,
  IconContainer,
  MenuIconContainer,
} from './style';
import LogoBranco from '../../../../public/logo10xBank-branco.png';
import { Paragraph } from '../../atoms/Text';

interface IHeader {
  isMainHeader?: boolean;
  isExtractHeader?: boolean;
  hasBackButton?: boolean;
  title?: string;
  bgColor?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  hasMenuIcon?: boolean;

  mainHasBackBtn?: boolean;

  menuClicked?: () => void;
  arrowClicked?: () => void;
}
export default function Header({
  isMainHeader,
  title,
  bgColor,
  height,
  menuClicked,
  arrowClicked,
  mainHasBackBtn = false,
  hasMenuIcon = true,
}: IHeader) {
  const router = useRouter();
  return (
    <HeaderContainer
      bgColor={bgColor}
      height={height}
      isMainHeader={isMainHeader}
    >
      {isMainHeader ? (
        <>
          {mainHasBackBtn && (
            <IconContainer onClick={arrowClicked || (() => router.back())}>
              <i
                className="icon-arrow-left"
                style={{
                  color: colors.branco,
                  fontSize: fontSizes.medium17,
                  lineHeight: `15px`,
                }}
              />
            </IconContainer>
          )}
          <ImageContainer>
            <Image src={LogoBranco} alt="10xBank" />
          </ImageContainer>
          {hasMenuIcon && (
            <MenuIconContainer onClick={menuClicked}>
              <i
                className="icon-hamburger-menu"
                style={{
                  fontSize: fontSizes.large18,
                  lineHeight: `15px`,
                  display: `flex`,
                }}
              />
            </MenuIconContainer>
          )}
        </>
      ) : (
        <>
          <IconContainer onClick={arrowClicked || (() => router.back())}>
            <i
              className="icon-arrow-left"
              style={{
                color: colors.cinza800,
                fontSize: fontSizes.medium17,
                lineHeight: `15px`,
              }}
            />
          </IconContainer>
          <Paragraph
            fontColor={colors.cinza800}
            fontWeight={fontWeight.semibold}
            fontFamily={fontFamily.montserrat}
            fontSize={fontSizes.large18}
            lineHeight="22px"
          >
            {title}
          </Paragraph>
        </>
      )}
      {!isMainHeader && (
        <button
          style={{
            position: `absolute`,
            right: `22px`,
            border: 0,
            backgroundColor: `transparent`,
            paddingTop: `3px`,
            cursor: `pointer`,
          }}
          onClick={() => router.push(`/home`)}
        >
          <img src="/logo_10xbank.svg" alt="" />
        </button>
      )}
    </HeaderContainer>
  );
}
