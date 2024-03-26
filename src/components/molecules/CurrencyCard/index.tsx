import { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontSizes, fontFamily, fontWeight } from '@/utils/fonts';
import { Paragraph } from '../../atoms/Text';
import {
  ContainerAmount,
  ContainerHeaderAmount,
  ContainerPrice,
  PriceValue,
  ValueContent,
  HideContainer,
  IconButton,
} from './style';

// interface ICurrencyCard {
//   currencies: [{ name: string; amount: string; code: string }];
// }

export default function CurrencyCard({user}) {
  const [actualCurrency, setActualCurrency] = useState(0);
  const [contentHide, setContentHide] = useState(false);
  const [hideIcon, setHideIcon] = useState(`icon-eye`);

  let currencies = [
    {
      name: `Reais`,
      amount: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(user.meus_dados.saldo),
      code: `real`,
    },
    // {
    //   name: `Euro`,
    //   amount: user.meus_dados.saldo_euro,
    //   code: `euro`,
    // },
    // {
    //   name: `Dólar`,
    //   amount: user.meus_dados.saldo_dolar,
    //   code: `dolar`,
    // },
  ];
  user.agregacao.map((country) => {
    currencies.push({name: country.bank_name,amount: country.pre_balance,code: country.bank_name});
  });

  const changeCurrency = () => {
    if (currencies.length - 1 === actualCurrency) {
      setActualCurrency(0);
      return;
    }

    setActualCurrency((old) => old + 1);
  };

  const handleHideContent = () => {
    setContentHide(!contentHide);

    if (hideIcon === `icon-eye`) {
      setHideIcon(`icon-close-eye`);
    } else {
      setHideIcon(`icon-eye`);
    }
  };

  return (
    <ContainerAmount>
      <ContainerHeaderAmount>
        <div style={{ marginBottom: `5px` }}>
          <Paragraph
            fontColor={colors.cinzaLightDark}
            fontFamily={fontFamily.roboto}
            fontSize={fontSizes.xSmall12}
            lineHeight="14px"
          >
            Saldo em
          </Paragraph>
          <Paragraph
            color={colors.cinzaMediumDark}
            fontSize={fontSizes.medium16}
            fontWeight={fontWeight.bold}
            lineHeight="22px"
            margin="0px 0px 0px"
          >
            {currencies[actualCurrency].name}
          </Paragraph>
        </div>

        <IconButton>
          <i className="icon-chevron-right" style={{ fontSize: `14px` }} />
        </IconButton>
      </ContainerHeaderAmount>
      <ContainerPrice>
        <PriceValue>
          <ValueContent>
            <HideContainer isValueHide={contentHide} />
            {currencies[actualCurrency].amount}
          </ValueContent>
          <IconButton onClick={() => handleHideContent()}>
            <i className={hideIcon} />
          </IconButton>
        </PriceValue>
        {/* <IconButton onClick={changeCurrency}>
          <i className="icon-change-2" />
        </IconButton> */}
      </ContainerPrice>
    </ContainerAmount>
  );
}
