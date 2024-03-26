import styled from 'styled-components';
import { Paragraph } from '@/components/atoms/Text';

export const ContainerContact = styled.div`
  display: grid;
  grid: auto / 65px 1fr;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
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
`;

export const ContactsList = ({
  onSelectContact,
  listContacts
}: {
  onSelectContact: (contact: any) => void;
  listContacts?: any;
}) => {
  const contacts = [
    {
      id: 0,
      sigla: `RX`,
      name: `Diego Ângelos Xavier`,
    },
    {
      id: 1,
      sigla: `AL`,
      name: `Ana Luisa da Silva`,
    },
    {
      id: 2,
      sigla: `DX`,
      name: `Maria Ana Pereira`,
    },
    {
      id: 3,
      sigla: `AL`,
      name: `Ana Luisa da Silva`,
    },
    {
      id: 4,
      sigla: `MA`,
      name: `Maria Ana Pereira`,
    },
  ];

  return (
    <div>
      <Paragraph fontSize="14px" margin="15px 0 10px">
        Todos os contatos
      </Paragraph>
      {listContacts.map((contact) => (
        <ContainerContact key={contact.id} onClick={(e) => {
          onSelectContact(contact)
        }}>
          <Icon>{contact.owner_name.charAt(0)}</Icon>
          <Paragraph fontSize="12px">{contact.owner_name} ({contact.bank})</Paragraph>
        </ContainerContact>
      ))}
    </div>
  );
};
