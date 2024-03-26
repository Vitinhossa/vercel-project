/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import CardButton from '../../molecules/CardButton';
import { CardsContainer } from './style';

interface ICard {
  id: number;
  title: string;
  subtitle: string;
  iconPath?: string;
  iconComp?: any;
  bgColor1: string;
  bgColor2: string;
  url: string;
}
interface ICardsButtonDisplay {
  cardsContent?: Array<ICard>;

  isListView?: boolean;
  padding?: string;
  height?: string;
  spacement?: string;
  isLightView?: boolean;
}

export default function CardsButtonDisplay({
  cardsContent = [],
  isListView = false,
  padding,
  height,
  isLightView,
}: ICardsButtonDisplay) {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(cardsContent);
    console.log(cardsContent);
  }, [cardsContent]);

  const buildCards = () =>
    cards.map((card) => (
      <CardButton
        key={card.id}
        bgColor1={card.bgColor1}
        bgColor2={card.bgColor2}
        title={card.title}
        subtitle={card.subtitle}
        iconPath={card.iconPath}
        iconComp={card.iconComp}
        inLineView={isListView}
        isLightView={isLightView}
        width={isListView ? `100%` : `calc(50% - 5px)`}
        height={isListView ? `88px` : `160px`}
        url={card.url}
      />
    ));
  return (
    <CardsContainer isListView={isListView} height={height} padding={padding}>
      {buildCards()}
    </CardsContainer>
  );
}
