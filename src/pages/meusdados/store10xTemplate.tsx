import React, { useState } from 'react';

import Header from '../../components/molecules/Header';
import PaddingContainer from '../../components/atoms/PaddingContainer';
import HeadTitleBtn from '../../components/molecules/HeadTitleBtn';
import CardsButtonDisplay from '../../components/organisms/CardsButtonDisplay';

interface IStore10xTemplate {
  cardsContent?: any;
  headTitle?: string;
}
export default function Store10xTemplate({
  cardsContent,
  headTitle,
}: IStore10xTemplate) {
  const [listView, setListView] = useState(false);
  const [listModel, setListModel] = useState<number>(0);
  const [isLightView, setIsLightView] = useState(false);

  const handleChangeView = (type: string) => {
    const number = listModel;
    if (type === `list`) {
      if (listModel === 1) {
        setIsLightView(true);
        setListModel(number - 1);
      } else {
        setIsLightView(false);
        setListModel(number + 1);
      }

      setListView(true);
    } else if (type === `grid`) {
      setListModel(0);
      setIsLightView(false);
      setListView(false);
    }
  };

  return (
    <>
      <Header title="Store PixLand" />
      <PaddingContainer padding="24px 30px">
        <HeadTitleBtn
          text={headTitle}
          hasIcon
          isList={listView}
          iconAction={(e) => handleChangeView(e)}
        />
        <CardsButtonDisplay
          padding="16px 0"
          isListView={listView}
          cardsContent={cardsContent}
          isLightView={isLightView}
        />
      </PaddingContainer>
    </>
  );
}
