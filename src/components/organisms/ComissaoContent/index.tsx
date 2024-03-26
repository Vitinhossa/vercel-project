import { fontWeight, fontSizes, fontFamily } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import { Paragraph } from '@/components/atoms/Text';
import { DisplayFlex } from '@/components/atoms/Alignment';
import {
  List,
  ListItem,
  Content,
  TitleContainer,
  CardContainer,
} from './style';

export default function ComissaoContent() {
  const specialColor = colors.verdeLight;
  const startColor = colors.cinzaLightMedium;
  const middleColor = colors.cinzaDark;
  const premierColor = colors.amareloMedium;
  const eliteColor = colors.amareloLight;

  return (
    <List>
      {/* PLANO SPECIAL 10X */}
      <ListItem>
        <Content>
          <TitleContainer>
            <Paragraph
              fontSize={fontSizes.small14}
              fontColor={specialColor}
              fontFamily={fontFamily.roboto}
            >
              Plano
            </Paragraph>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontColor={specialColor}
              fontSize={fontSizes.small15}
              fontFamily={fontFamily.roboto}
            >
              <i> Special 10x</i>
            </Paragraph>
          </TitleContainer>

          <CardContainer color={specialColor} />
        </Content>

        <Content>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão total
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              2%
            </Paragraph>
          </DisplayFlex>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão em níveis
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              3 níveis
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão distribuida
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
            >
              Direta: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
            </Paragraph>
          </DisplayFlex>
        </Content>
      </ListItem>

      {/* PLANO START 10X */}
      <ListItem>
        <Content>
          <TitleContainer>
            <Paragraph
              fontSize={fontSizes.small14}
              fontColor={startColor}
              fontFamily={fontFamily.roboto}
            >
              Plano
            </Paragraph>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontColor={startColor}
              fontSize={fontSizes.small15}
              fontFamily={fontFamily.roboto}
            >
              <i> Start 10x</i>
            </Paragraph>
          </TitleContainer>

          <CardContainer color={startColor} />
        </Content>

        <Content>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão total
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              5%
            </Paragraph>
          </DisplayFlex>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão em níveis
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              3 níveis
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão distribuida
            </Paragraph>
            <DisplayFlex direction="column" align="flex-end">
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Direta: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Segunda: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Terceira: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
            </DisplayFlex>
          </DisplayFlex>
        </Content>
      </ListItem>

      {/* PLANO MIDDLE 10X */}
      <ListItem>
        <Content>
          <TitleContainer>
            <Paragraph
              fontSize={fontSizes.small14}
              fontColor={middleColor}
              fontFamily={fontFamily.roboto}
            >
              Plano
            </Paragraph>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontColor={middleColor}
              fontSize={fontSizes.small15}
              fontFamily={fontFamily.roboto}
            >
              <i> Middle 10x</i>
            </Paragraph>
          </TitleContainer>

          <CardContainer color={middleColor} />
        </Content>

        <Content>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão total
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              5%
            </Paragraph>
          </DisplayFlex>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão em níveis
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              3 níveis
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão distribuida
            </Paragraph>
            <DisplayFlex direction="column" align="flex-end">
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Direta: <b style={{ fontSize: fontSizes.xSmall12 }}> 4% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Segunda: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Terceira: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Quarta: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
            </DisplayFlex>
          </DisplayFlex>
        </Content>
      </ListItem>

      {/* PLANO PREMIER 10X */}
      <ListItem>
        <Content>
          <TitleContainer>
            <Paragraph
              fontSize={fontSizes.small14}
              fontColor={premierColor}
              fontFamily={fontFamily.roboto}
            >
              Plano
            </Paragraph>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontColor={premierColor}
              fontSize={fontSizes.small15}
              fontFamily={fontFamily.roboto}
            >
              <i> Premier 10x</i>
            </Paragraph>
          </TitleContainer>

          <CardContainer color={premierColor} />
        </Content>

        <Content>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão total
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              10%
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão em níveis
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              5 níveis
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão distribuida
            </Paragraph>
            <DisplayFlex direction="column" align="flex-end">
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Direta: <b style={{ fontSize: fontSizes.xSmall12 }}> 5% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Segunda: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Terceira: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Quarta: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Quinta: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
            </DisplayFlex>
          </DisplayFlex>
        </Content>
      </ListItem>

      {/* PLANO ELITE 10X */}
      <ListItem>
        <Content>
          <TitleContainer>
            <Paragraph
              fontSize={fontSizes.small14}
              fontColor={eliteColor}
              fontFamily={fontFamily.roboto}
            >
              Plano
            </Paragraph>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontColor={eliteColor}
              fontSize={fontSizes.small15}
              fontFamily={fontFamily.roboto}
            >
              <i> Elite 10x</i>
            </Paragraph>
          </TitleContainer>

          <CardContainer color={eliteColor} />
        </Content>

        <Content>
          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão total
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              12%
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão em níveis
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.xSmall12}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaDark}
              fontWeight={fontWeight.bold}
            >
              6 níveis
            </Paragraph>
          </DisplayFlex>

          <DisplayFlex direction="column" align="flex-end">
            <Paragraph
              fontSize={fontSizes.xSmall10}
              fontFamily={fontFamily.roboto}
              fontColor={colors.cinzaMedium}
            >
              Comissão distribuida
            </Paragraph>
            <DisplayFlex direction="column" align="flex-end">
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Direta: <b style={{ fontSize: fontSizes.xSmall12 }}> 5% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Segunda: <b style={{ fontSize: fontSizes.xSmall12 }}> 2% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Terceira: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Quarta: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall10}
                fontFamily={fontFamily.roboto}
                fontColor={colors.cinzaDark}
              >
                Quinta: <b style={{ fontSize: fontSizes.xSmall12 }}> 1% </b>
              </Paragraph>
            </DisplayFlex>
          </DisplayFlex>
        </Content>
      </ListItem>
    </List>
  );
}
