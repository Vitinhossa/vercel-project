import { HeadingThree, HeadingTwo, Paragraph } from '@/components/atoms/Text';
import FilledButton from '@/components/atoms/FilledButton';
import {
  Badge,
  Container, Content, Filters, Header, Icon, Item, List, Section
} from './style';
import { colors } from '@/utils/colors';

interface Props {
  closeModal: (type: boolean) => void;
}

const filters = {
  types: [
    {
      id: 1,
      selected: true,
      name: 'Todas'
    },
    {
      id: 2,
      selected: false,
      name: 'Receitas'
    },
    {
      id: 3,
      selected: false,
      name: 'Despesas'
    }
  ],
  categories: [
    {
      id: 1,
      selected: true,
      name: 'Todas'
    },
  ],
  accounts: [
    {
      id: 1,
      selected: true,
      name: 'PixLand'
    },
    {
      id: 2,
      selected: true,
      name: 'Santander'
    },
    {
      id: 3,
      selected: true,
      name: 'Banco do Brasil'
    },
    {
      id: 4,
      selected: true,
      name: 'Nubank'
    },
  ],
  period: {
    initial: [
      {
        id: 1,
        selected: false,
        name: 'Hoje'
      },
      {
        id: 2,
        selected: false,
        name: 'Ontem'
      },
      {
        id: 3,
        selected: false,
        name: 'Outros'
      },
    ],
    final: [
      {
        id: 1,
        selected: false,
        name: 'Hoje'
      },
      {
        id: 2,
        selected: false,
        name: 'Ontem'
      },
      {
        id: 3,
        selected: false,
        name: 'Outros'
      },
    ]
  }
};

export default function FilterTransactionContainer({ closeModal }: Props) {
  return (
    <Container>
      <Content>
        <div>
          <Header>
            <HeadingTwo>Filtros</HeadingTwo>
            <Icon className='icon-close' onClick={() => closeModal(false)} />
          </Header>
          <Filters>
            <HeadingThree>Tipo</HeadingThree>
            <List>
              {
                filters.types.map(type => <Badge selected={type.selected} key={type.id}>{type.name}</Badge>)
              }
            </List>
            <HeadingThree>Categoria</HeadingThree>
            <List>
              {
                filters.categories.map(category => <Badge selected={category.selected} key={category.id}>{category.name}</Badge>)
              }
            </List>
            <HeadingThree>Contas</HeadingThree>
            <List>
              {
                filters.accounts.map(account => <Badge selected={account.selected} key={account.id}>{account.name}</Badge>)
              }
            </List>
            <HeadingThree>Período</HeadingThree>
            <Paragraph margin='16px 0 0 0'>Data Inicial</Paragraph>
            <List>
              {
                filters.period.initial.map(period => <Badge selected={period.selected} key={period.id}>{period.name}</Badge>)
              }
            </List>
            <Paragraph>Data Final</Paragraph>
            <List>
              {
                filters.period.final.map(period => <Badge selected={period.selected} key={period.id}>{period.name}</Badge>)
              }
            </List>
          </Filters>
        </div>
        <Section>
          <FilledButton
            text='FILTRAR'
            width='100%'
            height='54px'
            margin='0 0 16px 0'
            bgColor1={colors.verdeDark}
            textColor={colors.branco}
          />
          <FilledButton
            text='CANCELAR'
            width='100%'
            height='54px'
            textColor={colors.verdeDark}
            action={() => closeModal(false)}
          />
        </Section>
      </Content>
    </Container>
  );
}
