import { fontWeight, fontSizes } from '@/utils/fonts';
import { colors } from '@/utils/colors';
import { useState } from 'react';
import SearchIcon from '@/assets/svg/search';
import PaddingContainer from '../atoms/PaddingContainer';
import Header from '../molecules/Header';
import BottomMenu from '../organisms/BottomMenu';
import { HeadingTwo } from '../atoms/Text';
import QuestionList from '../molecules/QuestionsList';
import SearchInput from '../atoms/SearchInput';
import IconButton from '../atoms/IconButton';

import SideMenuListItems from '../molecules/SideMenuListItems';

// interface IMenuList {
//   id: number;
//   title: string;
//   subtitle?: string;
//   hasIcon?: boolean;
//   route: string;
// }

export default function FaqTemplate() {
  const [searchOpen, setSearchOpen] = useState(false);
  const questions = [
    {
      id: 0,
      title: `Pergunta 1`,
      answer: `Resposta pergunta 1`,
    },
    {
      id: 1,
      title: `Pergunta 2`,
      answer: `Resposta pergunta 2`,
    },
  ];

  const categories = [
    {
      id: 0,
      title: `Minha Conta Digital`,
      route: `/faq`,
      hasIcon: true,
    },
    {
      id: 1,
      title: `Cartões`,
      route: `/faq`,
      hasIcon: true,
    },
    {
      id: 2,
      title: `Pagamentos`,
      route: `/faq`,
      hasIcon: true,
    },
    {
      id: 3,
      title: `Cobranças`,
      route: `/faq`,
      hasIcon: true,
    },
  ];
  return (
    <>
      <Header title="Fale Conosco" />
      <PaddingContainer padding="42px 21px">
        <HeadingTwo
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.xLarge20}
          color={colors.verdeMedium}
        >
          Perguntas frequentes
        </HeadingTwo>
        <div
          style={{
            position: `absolute`,
            display: `flex`,
            right: `20px`,
            top: `88px`,
          }}
        >
          {searchOpen ? (
            <IconButton
              iconName="icon-close"
              action={() => setSearchOpen(false)}
              width="20px"
              height="15px"
              iconSize="15px"
              margin="4px 0 0 0"
            />
          ) : (
            <>
              <IconButton
                iconComp={SearchIcon}
                action={() => setSearchOpen(true)}
                width="20px"
                margin="0 5px 0 0"
              />
            </>
          )}
        </div>

        {searchOpen && (
          <SearchInput
            placeholderText="Buscar"
            margin="12px 0 0px 0"
            width="90%"
            hasAnim
          />
        )}
        <QuestionList
          questions={questions}
          margin={searchOpen ? `10px 0 62px` : `62px 0`}
        />

        <HeadingTwo
          fontWeight={fontWeight.bold}
          fontSize={fontSizes.xLarge20}
          color={colors.verdeMedium}
        >
          Categorias
        </HeadingTwo>
        <SideMenuListItems menuItems={categories} />
      </PaddingContainer>
      <BottomMenu />
    </>
  );
}
