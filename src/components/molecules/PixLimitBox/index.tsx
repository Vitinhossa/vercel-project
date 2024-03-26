import styled from 'styled-components';
import { Paragraph } from '@/components/atoms/Text';
import { DisplayFlex } from '@/components/atoms/Alignment';
import FilledButton from '@/components/atoms/FilledButton';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';

const LimitBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px 24px 0;

  border-bottom: 1px solid ${colors.cinzaLightMedium};

  /* &:last-of-type {
    border-bottom: none;
  } */

  button {
    font-size: 12px;
  }
`;

interface iPixLimitBox {
  title: string;
  value?: string;
  subtitle?: string;
  action?: () => any;
}

export default function PixLimitBox({
  title = ``,
  value = ``,
  subtitle = ``,
  action,
}: iPixLimitBox) {
  return (
    <LimitBox>
      <DisplayFlex direction="column">
        <Paragraph
          fontColor={colors.cinzaLightDark}
          fontSize="12px"
          fontFamily={fontFamily.roboto}
        >
          {title}
        </Paragraph>
        {value && (
          <Paragraph
            margin="4px 0 0 0"
            fontFamily={fontFamily.roboto}
            fontSize="12px"
            fontColor={subtitle ? `#495057` : colors.cinzaLightMedium}
          >
            {value}
          </Paragraph>
        )}
        {subtitle && (
          <Paragraph
            margin="8px 0 0 0"
            fontColor={colors.cinzaLightDark}
            fontSize="10px"
            fontFamily={fontFamily.roboto}
          >
            {subtitle}
          </Paragraph>
        )}
      </DisplayFlex>
      <FilledButton
        action={action}
        text="Definir"
        bgColor1={colors.cinzaLight}
        textColor={colors.cinzaLightDark}
        roundedSize="5px"
        width="68px"
        height="32px"
      />
    </LimitBox>
  );
}
