import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { FlexContainer, TitleContainer, InfoContainer } from './style';

interface ImodalInfoList {
  infoList: {
    id: number;
    title: string;
    content: {
      id: number;
      title: string;
      description: string;
    }[];
  }[];
}

export default function ModalListInfo({ infoList }: ImodalInfoList) {
  return (
    <FlexContainer flexDirection="column">
      {infoList?.map((item) => (
        <>
          <TitleContainer key={item.id}>
            <Paragraph
              fontSize="14px"
              lineHeight="20px"
              fontWeight="700"
              fontColor={colors.cinzaMedium}
            >
              {item.title}
            </Paragraph>
          </TitleContainer>
          {item?.content.map((info) => (
            <InfoContainer key={info.id}>
              <Paragraph
                fontSize="12px"
                lineHeight="16px"
                fontWeight="400"
                fontColor={colors.cinzaLightDark}
              >
                {info.title}
              </Paragraph>
              <Paragraph
                fontSize="12px"
                lineHeight="16px"
                fontWeight="400"
                fontColor={colors.cinzaMediumDark}
              >
                {info.description}
              </Paragraph>
            </InfoContainer>
          ))}
        </>
      ))}
    </FlexContainer>
  );
}
