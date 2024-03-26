import { colors } from '@/utils/colors';
import { fontFamily, fontSizes } from '@/utils/fonts';
import { Paragraph } from '@/components/atoms/Text';
import Image from 'next/dist/client/image';
import FilledButtonContainer from '../FilledButtonContainer';
import {
  ListItem,
  List,
  ListHead,
  ListHeadImage,
  InfoContent,
  BodyContent,
  MainContent,
} from './style';

interface IConquer {
  id: number;
  name: string;
  premio: string;
  cidade: string;
  tickets: number;
  date: string;
  mainText: string;
  imageUrl: string;
  linkUrl?: string;
}

interface IConquerList {
  conquers?: Array<IConquer>;
}

export default function ConquerList({ conquers = [] }: IConquerList) {
  return (
    <List>
      {conquers.map((conquer) => (
        <ListItem key={conquer.id}>
          {/* head */}
          <ListHead>
            {/* image */}
            <ListHeadImage>
              {conquer.imageUrl && (
                <Image
                  src={conquer.imageUrl}
                  width={53}
                  height={53}
                  alt={conquer.name}
                />
              )}
            </ListHeadImage>

            {/* infos */}
            <InfoContent>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
                margin="0 0 2px"
              >
                Conquistador: <b> {conquer.name} </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
                margin="0 0 2px"
              >
                Prêmio: <b> {conquer.premio} </b>
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
              >
                Cidade: <b> {conquer.cidade} </b>
              </Paragraph>
            </InfoContent>
          </ListHead>

          {/* body */}
          <BodyContent>
            <Paragraph
              fontSize={fontSizes.small14}
              fontFamily={fontFamily.roboto}
              margin="0 0 4px"
            >
              Quantidade de tickets da conquista: <b> {conquer.tickets} </b>
            </Paragraph>
            <Paragraph
              fontSize={fontSizes.small14}
              fontFamily={fontFamily.roboto}
            >
              Data da experiência: <b> {conquer.date} </b>
            </Paragraph>

            {/* main text */}
            <MainContent>
              <Paragraph
                fontSize={fontSizes.small14}
                fontFamily={fontFamily.roboto}
                margin="0 0 5px 0"
              >
                Veja como tudo aconteceu:
              </Paragraph>
              <Paragraph
                fontSize={fontSizes.xSmall12}
                fontFamily={fontFamily.roboto}
                lineHeight="17px"
              >
                {conquer.mainText}
              </Paragraph>
            </MainContent>

            {conquer.linkUrl && (
              <FilledButtonContainer
                btnText="Ver mais"
                btnBgColor1={colors.verdeLight}
                btnTextColor={colors.branco}
                height="46px"
                width="142px"
                btnRoundedSize="50px"
                btnAction={() =>
                  conquer.linkUrl ? window.open(conquer.linkUrl, `_blank`) : {}
                }
              />
            )}
          </BodyContent>
        </ListItem>
      ))}
    </List>
  );
}
