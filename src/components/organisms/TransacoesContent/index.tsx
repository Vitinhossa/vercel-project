import BottomMenu from '../BottomMenu';
import PaddingContainer from '@/components/atoms/PaddingContainer';
import TransactionList from '@/components/molecules/TransactionList';
import SearchTransactionContainer from '../SearchTransactionContainer';
import { HeadingThree, Paragraph } from '@/components/atoms/Text';
import {
  ButtonWithIcon,
  Header,
  Icon
} from './style';
import { useState } from 'react';
import FilterTransactionContainer from '../FilterTransactionContainer';
import BackButton from '@/components/atoms/BackButton';
import { DisplayFlex } from '@/components/atoms/Alignment';
import { useRouter } from 'next/router';

export default function TransacoesContent() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const router = useRouter();

  const List = [
    {
      id: 0,
      data: `Hoje`,
      transaction: [
        {
          id: 0,
          title: `Taxi CBW`,
          subtitle: `Compra no débito`,
          price: `R$ 30,00`,
          type: 'out'
        },
        {
          id: 1,
          title: `Transferência Recebida`,
          subtitle: `Transferência`,
          price: `R$ 30,00`,
          type: 'in'
        },
        {
          id: 2,
          title: `Taxi CBW`,
          subtitle: `Compra no débito`,
          price: `R$ 2.000,00`,
          type: 'out'
        },
        {
          id: 3,
          title: `Taxi CBW`,
          subtitle: `Compra no débito`,
          price: `R$ 30,00`,
          type: 'out'
        },
      ],
    },
    {
      id: 1,
      data: `Ontem`,
      transaction: [
        {
          id: 0,
          title: `Transferência Recebida`,
          subtitle: `Transferência`,
          price: `R$ 30,00`,
          type: 'in'
        },
        {
          id: 1,
          title: `Transferência Recebida`,
          subtitle: `Transferência`,
          price: `R$ 30,00`,
          type: 'in'
        },
      ],
    },
    {
      id: 1,
      data: `20 de Julho`,
      transaction: [
        {
          id: 0,
          title: `Transferência Recebida`,
          subtitle: `Transferência`,
          price: `R$ 30,00`,
          type: 'in'
        },
        {
          id: 1,
          title: `Transferência Recebida`,
          subtitle: `Transferência`,
          price: `R$ 30,00`,
          type: 'in'
        },
      ],
    },
  ];

  return (
    <>
      <Header>
        <BackButton marginBottom='0' width='96px' clicked={() => router.back()} />
        <HeadingThree>Transações</HeadingThree>
        <DisplayFlex>
          <ButtonWithIcon onClick={() => setShowSearchModal(true)}>
            <Icon src='./fi_search.svg' />
          </ButtonWithIcon>
          <ButtonWithIcon onClick={() => setShowFilterModal(true)}>
            <Icon src='./fi_filter.svg' />
          </ButtonWithIcon>
        </DisplayFlex>
      </Header>
      <PaddingContainer padding="0" minHeight="calc(100vh - 122px)" style={{ marginTop: '80px' }}>
        {List.map((item) => (
          <div
            key={item.id}
            style={{
              display: `flex`,
              flexDirection: `column`,
              marginTop: `24px`,
              marginLeft: `24px`,
            }}
          >
            <Paragraph fontColor="#212926" fontSize="16px" fontWeight="700">
              {item.data}
            </Paragraph>
            {item.transaction.map((a) => (
              <TransactionList
                key={a.id}
                title={a.title}
                subtitle={a.subtitle}
                price={a.price}
                type={a.type}
              />
            ))}
          </div>
        ))}
      </PaddingContainer>
      <BottomMenu />
      { showSearchModal && <SearchTransactionContainer list={List} closeModal={setShowSearchModal} /> }
      { showFilterModal && <FilterTransactionContainer closeModal={setShowFilterModal} /> }
    </>
  );
}
