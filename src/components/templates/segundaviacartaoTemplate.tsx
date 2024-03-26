import router from 'next/router';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';
import { useEffect, useState } from 'react';
import BackButton from '../atoms/BackButton';
import { HeadingTwo, Paragraph } from '../atoms/Text';
import PaddingContainer from '../atoms/PaddingContainer';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import AlertModal from '../molecules/AlertModal';
import ActionCheckCard from '../molecules/ActionCheckCard';

interface ICheckCards {
  id: number;
  title: string;
  selected?: boolean;
}

export default function SegundaViaCartaoTemplate() {
  const [canConfirm, setCanConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const itemsCheck: ICheckCards[] = [
    {
      id: 0,
      title: `Meu cartão foi roubado`,
      selected: false,
    },
    {
      id: 1,
      title: `Perdi meu cartão`,
      selected: false,
    },
    {
      id: 3,
      title: `Meu cartão está danificado`,
      selected: false,
    },
  ];

  const [options, setOptions] = useState(itemsCheck);

  const handleSelectOption = (optionSelected: ICheckCards) => {
    const newOptions: any = [];

    options.forEach((option) => {
      const op = option;
      if (optionSelected.id === option.id) {
        op.selected = !option.selected;
      } else {
        op.selected = false;
      }
      newOptions.push(op);
    });

    setOptions(newOptions);
  };

  useEffect(() => {
    const check = () => {
      let can = false;
      options.forEach((op) => {
        if (op.selected) {
          can = true;
        }
      });
      return can;
    };

    if (check()) setCanConfirm(true);
    if (!check()) setCanConfirm(false);
  }, [options]);

  const buildCheckCards = () =>
    options?.map((check) => (
      <ActionCheckCard
        key={check.id}
        title={check.title}
        iconName="icon-check"
        height="76px"
        hasShadow
        containerMargin="20px 0 20px 0"
        titleSize="14px"
        titleWeight="500"
        iconColor="white"
        iconSize="16px"
        action={() => handleSelectOption(check)}
        bgIconColor={
          check.selected ? colors.verdeLight : colors.cinzaLightMedium
        }
      />
    ));

  return (
    <>
      <PaddingContainer padding="22px">
        <BackButton clicked={() => router.back()} />
        <HeadingTwo
          fontSize={fontSizes.xLarge20}
          fontWeight={fontWeight.bold}
          color={colors.verdeDark}
          margin="24px 0 8px 0"
        >
          2° via de cartão
        </HeadingTwo>
        <Paragraph
          fontColor={colors.cinzaLightDark}
          fontSize={fontSizes.small14}
          lineHeight="22px"
        >
          Confirme abaixo o motivo da solicitação e confirme o pedido:
        </Paragraph>

        <div style={{ margin: `45px 0` }}>{buildCheckCards()}</div>

        <FilledButtonContainer
          btnTextColor={colors.branco}
          btnText="Confirmar"
          height="46px"
          btnRoundedSize="50px"
          btnBgColor1={canConfirm ? colors.verdeLight : colors.cinzaLightMedium}
          btnAction={
            canConfirm ? () => setConfirmed(true) : () => setConfirmed(false)
          }
        />
      </PaddingContainer>

      {confirmed && (
        <AlertModal
          text="Sua solicitação foi enviada com sucesso!"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnText="Voltar"
          btnAction={() => router.push(`/cartoes/configuracao`)}
        />
      )}
    </>
  );
}
