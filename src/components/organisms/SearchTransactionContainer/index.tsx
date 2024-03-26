import Header from '@/components/molecules/Header';
import {
  Container, Content
} from './style';
import Input from '@/components/atoms/Input';
import PaddingContainer from '@/components/atoms/PaddingContainer';
import { Paragraph } from '@/components/atoms/Text';
import TransactionList from '@/components/molecules/TransactionList';

interface Props {
  list: {
          id: number;
          data: string;
          transaction: {
              id: number;
              title: string;
              subtitle: string;
              price: string;
              type: string;
          }[];
        }[];
  closeModal: (type: boolean) => void;
}

export default function SearchTransactionContainer({ list, closeModal }: Props) {
  return (
    <Container>
        <Header title="Buscar" arrowClicked={() => closeModal(false)} />
        <Content>
          <Input placeholder='Pesquisar' />
        </Content>
        <PaddingContainer padding="0" minHeight="calc(100vh - 122px)" style={{ marginTop: '120px' }}>
        {list.map((item) => (
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
    </Container>
  );
}
