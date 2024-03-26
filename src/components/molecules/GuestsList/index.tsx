import { Paragraph } from '@/components/atoms/Text';
import Image from 'next/image';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import { List, ListItem, ImageTitleContent, ImageContainer } from './style';

interface IGuest {
  id: number;
  name: string;
  accountDate: string;
  accountPlan: string;
  imageSrc: string;
}
interface IGuestsList {
  guests?: Array<IGuest>;
}

export default function GuestsList({ guests = [] }: IGuestsList) {
  return (
    <List>
      {guests.map((guest) => (
        <ListItem key={guest.id}>
          <ImageTitleContent>
            <ImageContainer>
              <Image
                src={guest.imageSrc}
                width={53}
                height={53}
                alt={guest.name}
              />
            </ImageContainer>
            <Paragraph
              fontWeight={fontWeight.bold}
              fontSize={fontSizes.medium17}
              fontFamily={fontFamily.roboto}
            >
              {guest.name}
            </Paragraph>
          </ImageTitleContent>
          <Paragraph
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.small14}
            fontColor={colors.cinzaLightDark}
            margin="0 0 4px 0"
          >
            Data de abertura da conta: {guest.accountDate}
          </Paragraph>
          <Paragraph
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.small14}
            fontColor={colors.cinzaLightDark}
          >
            Plano atual: {guest.accountPlan}
          </Paragraph>
        </ListItem>
      ))}
    </List>
  );
}
