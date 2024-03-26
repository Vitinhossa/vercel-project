import styled from 'styled-components';
// import HorizontalScroll from 'react-scroll-horizontal';

import { Paragraph } from '@/components/atoms/Text';

export const ContainerContact = styled.div`
  width: 15%;
  heigth: 90px;
  min-width: 100px;
  display: grid;
  grid: 65px 40px / auto;
  grid-gap: 5px;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  p {
    text-align: center;
  }
  &:hover {
    div {
      background-color: #0f3b93;
      color: #00833e;
    }
  }
`;

export const Icon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #edeff0;
  text-align: center;
  color: #34403b;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all;
  margin: auto;
`;

const HorizontalScroll = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: inline-flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactsHorizontalList = ({
  onSelectContact,
  listContacts,
}: {
  onSelectContact: (contact: any) => void;
  listContacts?: any;
}) => {
  const contacts = [
    {
      id: 0,
      sigla: `RX`,
      name: `Diego`,
    },
    {
      id: 1,
      sigla: `AL`,
      name: `Ana`,
    },
    {
      id: 2,
      sigla: `DX`,
      name: `Maria `,
    },
    {
      id: 3,
      sigla: `AL`,
      name: `Ana`,
    },
    {
      id: 4,
      sigla: `MA`,
      name: `Maria`,
    },
  ];

  return (
    <div style={{ width: `100%` }}>
      <Paragraph fontSize="14px" margin="15px 0 10px">
        Contatos frequentes
      </Paragraph>
      <div style={{ height: `100%`, width: `100%` }}>
        <HorizontalScroll>
          {listContacts.map((contact) => (
            <ContainerContact key={contact.id} onClick={(e) => {
              onSelectContact(contact)
            }}>
              <Icon>{contact.owner_name.charAt(0)}</Icon>
              <Paragraph fontSize="10px">{contact.owner_name}</Paragraph>
              <Paragraph fontSize="10px" style={{margin: '2px'}}>({contact.bank})</Paragraph>
            </ContainerContact>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
};
