import { useState } from 'react';
import { Paragraph } from '@/components/atoms/Text';
import {
  Container,
  TypeList,
  TypeListItem,
  OfferList,
  OfferListItem,
  OfferImage,
  Content,
} from './style';
import Header from '@/components/molecules/Header';
import { useRouter } from 'next/router';

const offersDataTemp = [
  {
    title: 'Cashback',
    image: '/offersImg/cashback-telefonia.png',
    type: 'Start10x',
    id: 1,
  },
  {
    title: 'Uber',
    image: '/offersImg/uber.png',
    type: 'Special',
    id: 2,
  },
  {
    title: 'iFood',
    image: '/offersImg/ifood.png',
    type: 'Special',
    id: 3,
  },
  {
    title: 'Urgência Odonto',
    image: '/offersImg/urgencia-odonto.png',
    type: 'Special',
    id: 4,
  },
  {
    title: 'Biblioteca Digital',
    image: '/offersImg/biblioteca-digital.png',
    type: 'Special',
    id: 5,
  },
  {
    title: 'University',
    image: '/offersImg/10x-university.png',
    type: 'Start10x',
    id: 6,
  },
  {
    title: 'Cashback',
    image: '/offersImg/biblioteca-10x.png',
    type: 'Start10x',
    id: 7,
  },
  {
    title: 'Cashback',
    image: '/offersImg/cashback-recarga.png',
    type: 'Middle',
    id: 8,
  },
  {
    title: 'Cashback',
    image: '/offersImg/ganhe-fotos.png',
    type: 'Middle',
    id: 9,
    
  },
  {
    title: 'Cashback',
    image: '/offersImg/veek.png',
    type: 'Middle',
    id: 10,
    
  },
  {
    title: 'Cashback',
    image: '/offersImg/games.png',
    type: 'Middle',
    id: 11,
    
  },
  {
    title: 'Cashback',
    image: '/offersImg/dyson.png',
    type: 'Middle',
    id: 12,
    
  },
  {
    title: 'P&G',
    image: '/offersImg/pg.png',
    type: 'Special',
    id: 13,
    
  },
  {
    title: 'Pepsi',
    image: '/offersImg/pepsi.png',
    type: 'Special',
    id: 14,
    
  },
];

export default function OffersContent() {
  const [activeType, setActiveType] = useState(0);

  const data = offersDataTemp;

  const offersType = [
    'Todas Ofertas',
    ...new Set(data.map((item) => item.type)),
  ];

  const filter = data.filter((item) => item.type === offersType[activeType]);

  const showData = filter.length > 0 ? filter : data;

  const router = useRouter();

  return (
    <Container>
      <Header title="Ofertas" />

      <Content>
        <TypeList>
          {offersType.map((item, index) => (
            <TypeListItem
              active={index === activeType}
              onClick={() => setActiveType(index)}
            >
              <Paragraph>{item}</Paragraph>
            </TypeListItem>
          ))}
        </TypeList>

        <OfferList>
          {showData.map((item) => {
            return (
              // <OfferListItem onClick={() => router.push('/mail')}>
              <OfferListItem onClick={() => router.push(`/offers/${item.id}`)}>
                <OfferImage src={item.image} />
              </OfferListItem>
            );
          })}
        </OfferList>
      </Content>
    </Container>
  );
}
