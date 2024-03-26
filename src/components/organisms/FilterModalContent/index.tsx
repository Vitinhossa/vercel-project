/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Paragraph, HeadingTwo } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight, fontFamily } from '@/utils/fonts';

import FilledButtonContainer from '@/components/molecules/FilledButtonContainer';
import { DisplayFlex } from '@/components/atoms/Alignment';
import Input from '@/components/atoms/Input';
import { Content, TypesContainer, DateContainer, Date } from './style';

interface IType {
  id: number;
  text: string;
  selected: boolean;
}

interface IFilterModal {
  btnAction?: () => void;
  cancelAction?: () => void;
}
export default function FilterModal({ btnAction, cancelAction }: IFilterModal) {
  const typesContent = [
    {
      id: 0,
      text: `Todas`,
      selected: false,
    },
    {
      id: 1,
      text: `Pagamentos`,
      selected: false,
    },
    {
      id: 2,
      text: `Transferências`,
      selected: false,
    },
  ];

  const [types, setTypes] = useState<IType[]>([]);

  useEffect(() => {
    setTypes(typesContent);
  }, []);

  const handleTypeSelect = (typeSelected: IType) => {
    const newTypes: IType[] = [];

    types.forEach((type) => {
      const aux = type;
      if (type.id === typeSelected.id) {
        aux.selected = !aux.selected;
      }

      newTypes.push(aux);
    });
    setTypes(newTypes);
  };
  return (
    <Content>
      <HeadingTwo fontSize={fontSizes.small14} fontWeight={fontWeight.bold}>
        Tipo
      </HeadingTwo>
      <TypesContainer>
        {types.map((type) => (
          <FilledButtonContainer
            key={type.id}
            btnText={type.text}
            btnBgColor1={type.selected ? colors.verdeLight : colors.branco}
            btnTextColor={type.selected ? colors.branco : colors.verdeLight}
            btnIsRounded
            hasBorder
            width="fit-content"
            padding="10px 15px"
            btnRoundedSize="40px"
            fontFamily={fontFamily.roboto}
            fontWeight={fontWeight.regular}
            border={`2px solid ${colors.verdeLight}`}
            btnAction={() => handleTypeSelect(type)}
          />
        ))}
      </TypesContainer>
      <HeadingTwo
        fontSize={fontSizes.small14}
        fontWeight={fontWeight.bold}
        margin="10px 0 15px 0"
      >
        Período
      </HeadingTwo>
      <DateContainer>
        <Date>
          <Paragraph
            fontSize={fontSizes.xSmall12}
            fontColor={colors.cinzaDark}
            fontFamily={fontFamily.roboto}
          >
            Data inicial
          </Paragraph>
          <Input inputType="date" inputFormat="normal" />
        </Date>
        <Date>
          <Paragraph
            fontSize={fontSizes.xSmall12}
            fontColor={colors.cinzaDark}
            fontFamily={fontFamily.roboto}
          >
            Data final
          </Paragraph>
          <Input inputType="date" inputFormat="normal" />
        </Date>
      </DateContainer>

      <FilledButtonContainer
        btnText="Filtrar"
        btnBgColor1={colors.verdeLight}
        btnTextColor={colors.branco}
        height="46px"
        btnRoundedSize="50px"
        btnAction={btnAction}
      />
      <DisplayFlex align="center" justify="center">
        <Paragraph
          fontSize={fontSizes.medium16}
          color={colors.cinzaDark}
          fontWeight={fontWeight.bold}
          margin="10px 0 0 0"
          onClick={cancelAction}
        >
          Cancelar
        </Paragraph>
      </DisplayFlex>
    </Content>
  );
}
