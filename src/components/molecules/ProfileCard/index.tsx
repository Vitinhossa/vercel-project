/* eslint-disable @next/next/no-img-element */
import { fontSizes, fontWeight, fontFamily } from '@/utils/fonts';
import Image from "next/image";
import { colors } from '@/utils/colors';
import {
  ImageContainer,
  CardContainer,
  InfoContainer,
  InfoList,
  ListItem,
  Title,
  IconContainer,
} from './style';
import { HeadingTwo, Paragraph } from '../../atoms/Text';
import { FlexCon } from '@/components/atoms/ContainerFlex/style';

interface IProfileCard {
  userName?: string;
  imageProfile?: string;
  bank?: string;
  document?: string;
  type?: string;
  agency?: string;
  account?: string;
  chavepix?: string;
  copyClick?: () => void;
  fadeClick?: () => void;

  padding?: string;
}

export default function ProfileCard({
  userName,
  imageProfile,
  account,
  chavepix,
  agency,
  bank,
  document,
  type,
  copyClick,
  fadeClick,
  padding,
}: IProfileCard) {
  return (
    <CardContainer padding={padding}>
      <IconContainer justifyContent="flex-start" width="100%" margin='20px 0px 5px 24px'>
        <i
          onClick={fadeClick}
          className="icon-arrow-left"
          style={{
            color: colors.cinza800,
            fontSize: fontSizes.medium17,
            lineHeight: `15px`,
          }}
        />
      </IconContainer>

      <FlexCon margin='10px 0px 20px 0px' width='100%'>
        {imageProfile && (
          <>

            <ImageContainer>

              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '54px', height: '54px' }}>
                <Image
                  src={imageProfile}
                  objectFit="fill"
                  width="50px"
                  height="50px"
                  placeholder={userName}
                />
              </div>
            </ImageContainer>

          </>

        )}
        <FlexCon flexDirection='column'>
          <Paragraph color={colors.cinza800} fontSize={fontSizes.small14} margin='5px 0px 5px 0px'>Olá,</Paragraph>
          <HeadingTwo
            fontWeight={fontWeight.bold}
            fontSize={fontSizes.small14}
          >
            {userName}
          </HeadingTwo>
        </FlexCon>
      </FlexCon>
      <InfoContainer>
        <InfoList>
          {bank && (
            <ListItem>
              <Title> Banco </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {bank}
              </Paragraph>
            </ListItem>
          )}

          {agency && (
            <ListItem>
              <Title> Agência </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {agency}
              </Paragraph>
            </ListItem>
          )}

          {account && (
            <ListItem>
              <Title> Conta </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {account}
              </Paragraph>
            </ListItem>
          )}
          {chavepix && (
            <ListItem>
              <Title> Chave PIX </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {chavepix}
              </Paragraph>
            </ListItem>
          )}
          {document && (
            <ListItem>
              <Title> Documento </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {document}
              </Paragraph>
            </ListItem>
          )}
          {type && (
            <ListItem>
              <Title> Tipo </Title>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                {type}
              </Paragraph>
            </ListItem>
          )}
        </InfoList>
        <IconContainer onClick={copyClick}>
          <i
            className="icon-copy"
            style={{ color: colors.verdeLight, fontSize: fontSizes.xLarge24 }}
          />
        </IconContainer>
      </InfoContainer>
    </CardContainer>
  );
}
