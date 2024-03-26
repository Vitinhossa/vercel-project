import { HeadingOne, Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import {
  ModalContainer,
  IconButton,
  TitleContainer,
  FlexContainer,
} from './style';

interface ICustomModal {
  children?: React.ReactNode;
  iconClassName: string;
  onClick?: () => any;
  title?: string;
  hasCurrency?: boolean;
  hasPaymentContent?: boolean;
  PaymentContentTitle?: string;
  PaymentContentValue?: string;
  PaymentContentMoney?: string;
  subtitleCurrency?: string;
  titleCurrency?: string;
  paymentType?: string;
}

export default function CustomModal({
  children,
  iconClassName,
  onClick,
  title,
  hasCurrency,
  hasPaymentContent,
  PaymentContentTitle = 'Código de Barras',
  PaymentContentValue = 'ENDTOEND',
  PaymentContentMoney = 'R$ 1.500',
  titleCurrency,
  subtitleCurrency,
  paymentType = `Pagamento de boleto`,
}: ICustomModal) {
  return (
    <ModalContainer>
      <TitleContainer>
        <Paragraph
          fontWeight="700"
          fontSize="18px"
          lineHeight="24px"
          fontColor={colors.cinzaMediumDark}
        >
          {title}
        </Paragraph>
        <IconButton onClick={onClick}>
          <i className={iconClassName} />
        </IconButton>
      </TitleContainer>
      {hasCurrency && (
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="32px"
        >
          {titleCurrency && (
            <Paragraph
              fontSize="12px"
              lineHeight="16px"
              fontWeight="400"
              margin="0 0 12px 0"
              fontColor={colors.cinzaLightDark}
            >
              {titleCurrency}
            </Paragraph>
          )}
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
          >
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
            >
              
            </Paragraph>
            <HeadingOne
              fontWeight="700"
              fontSize="20px"
              lineHeight="28px"
              color={colors.cinzaMediumDark}
              margin="0 0 0 12px"
            >
              {PaymentContentMoney}
            </HeadingOne>
          </FlexContainer>
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
          >
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="12px 0 20px 0"
            >
              {subtitleCurrency}
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
      )}
      {hasPaymentContent && (
        <>
          <FlexContainer
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
          >
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="12px 0 0 0"
            >
              {PaymentContentTitle}
            </Paragraph>
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaMediumDark}
              margin="12px 0 0 0"
            >
              {PaymentContentValue}
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
          >
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaLightDark}
              margin="12px 0 0 0"
            >
              Tipo de transação
            </Paragraph>
            <Paragraph
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              fontColor={colors.cinzaMediumDark}
              margin="12px 0 0 0"
            >
              {paymentType}
            </Paragraph>
          </FlexContainer>
        </>
      )}
      {children}
    </ModalContainer>
  );
}
