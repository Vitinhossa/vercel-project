import { useState } from 'react';
import { Paragraph } from '@/components/atoms/Text';
import FilledButton from '@/components/atoms/FilledButton';
import { colors } from '@/utils/colors';
import Input from '@/components/atoms/Input';
import { ContainerNullish } from './style';
import { FlexContainer } from '../CustomModal/style';

export default function Charge() {
  const [price, setPrice] = useState(`0,00`);

  return (
    <ContainerNullish>
      <Paragraph
        fontWeight="400"
        fontSize="14px"
        lineHeight="22px"
        margin="20px"
      >
        Quanto você quer cobrar?
      </Paragraph>
      <FlexContainer
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <FlexContainer
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{ width: `50%` }}
        >
          <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px">
            R$
          </Paragraph>
        </FlexContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Input
            inputType="text"
            value={price}
            inputFormat="without-bg"
            leftText="R$"
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </FlexContainer>
      </FlexContainer>
      <FilledButton
        text="Enviar"
        textColor="white"
        bgColor1={
          price !== `0,00` ? colors.verdeLight : colors.cinzaLightMedium
        }
        height="46px"
        width="90%"
        roundedSize="25px"
        margin="30px auto"
      />
    </ContainerNullish>
  );
}
