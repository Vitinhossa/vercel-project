/* eslint-disable @next/next/no-img-element */
// import HorizontalScroll from 'react-scroll-horizontal';
import NextLink from 'next/link';
import { useState } from 'react';
import { Container } from '@/components/atoms/PaddingContainer/style';
import Header from '@/components/molecules/Header';
import styled from 'styled-components';
import DataModal from '@/components/molecules/DataModal';

const LinkContainer = styled.a`
  display: grid;
  grid: 65px auto / auto;
  margin-right: 15px;
  flex-direction: column;
  width: 100px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: 0.4s all;
  div {
    margin: auto;
    width: 65px;
    height: 65px;
    background-color: #edeff0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  p {
    font-size: 1rem;
    color: rgba(52, 64, 59, 1);
    margin-top: 10px;
    text-align: center;
  }
  &:hover {
    transform: scale(0.9);
  }
`;

const ListContainer = styled.li`
  list-style: none;
  a {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    cursor: pointer;
    i {
      transition: 0.4s all;
    }
    div {
      display: grid;
      grid: auto / 18px 1fr;
      grid-gap: 10px;
    }
    span {
      font-size: 1rem;
      font-weight: 700;
      color: rgba(73, 80, 87, 1);
    }
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(173, 181, 189, 1);
  }
  &:hover {
    i {
      transform: translateX(10px);
    }
  }
`;

const HorizontalScroll = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
  display: inline-flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const KeyList = styled.ul`
  list-style: none;
  width: 100%;
`;

export default function Pix() {
  const [showHelpModal, setShowHelpModal] = useState(false);

  const links = [
    {
      id: `transfer`,
      link: `/pix/transferencia`,
      name: `Transferir`,
      icon: `/pix/transfer.svg`,
    },
    {
      id: `copy_and_paste`,
      link: `/pix/copia-cola`,
      name: `Pix Copia e Cola`,
      icon: `/pix/copy-paste.svg`,
    },
    {
      id: `qrcode_reader`,
      link: `/pix/qrcode`,
      name: `Ler QR code`,
      icon: `/pix/qr-code.svg`,
    },/*
    {
      id: `withdraw`,
      link: `/pix/cobrar`,
      name: `Cobrar`,
      icon: `/pix/wallet.svg`,
    },*/
    {
      id: `deposit`,
      link: `/pix/depositar`,
      name: `Depositar`,
      icon: `/pix/deposit.svg`,
    },
  ];

  return (
    <div>
      <Header title="PIX" justifyContent="flex-start" />
      <Container
        padding="20px"
        minHeight="calc(100vh - 120px)"
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <h2 className="title">Minha área Pix</h2>
          <p className="paragraph">
            Tudo o que você precisa para pagar, transferir ou cobrar.
          </p>
          <div style={{ height: `120px`, marginTop: `20px` }}>
            <HorizontalScroll>
              {links.map((link) => (
                <LinkContainer key={link.id} href={link.link}>
                  <div>
                    <img src={link.icon} alt={link.name} />
                  </div>
                  <p>{link.name}</p>
                </LinkContainer>
              ))}
            </HorizontalScroll>
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <ListContainer>
                <NextLink href="/pix/minhaschaves">
                  <a>
                    <div>
                      <img src="/pix/pix.svg" alt="" />
                      <span>Minhas chaves</span>
                    </div>

                    <i className="icon-chevron-right" />
                  </a>
                </NextLink>
              </ListContainer>
              <ListContainer>
                <NextLink href="/pix/alterarlimite">
                  <a>
                    <div>
                      <img src="/pix/settings.svg" alt="" />
                      <span> Meu limite Pix</span>
                    </div>

                    <i className="icon-chevron-right" />
                  </a>
                </NextLink>
              </ListContainer>
              <ListContainer>
                <a onClick={() => setShowHelpModal(true)}>
                  <div>
                    <img src="/pix/fi_help-circle.svg" alt="" />
                    <span>Ajuda</span>
                  </div>

                  <i className="icon-chevron-right" />
                </a>
              </ListContainer>
            </ul>
          </nav>
        </div>
      </Container>
      {
        showHelpModal && (
          <DataModal closeAction={() => setShowHelpModal(false)}>
            <KeyList>
              <ListContainer>
                <a href='mailto:support@pixland.com.br'>
                    <div>
                      <img src="/pix/fi_mail.svg" alt="" />
                      <span>Atendimento via e-mail</span>
                    </div>

                    <i className="icon-chevron-right" />
                </a>
              </ListContainer>
              <ListContainer>
                <a href='https://www.bcb.gov.br/acessoinformacao/registrar_reclamacao' target="_blank">
                    <div>
                      <img src="/pix/banco-central.svg" alt="" />
                      <span>Banco central</span>
                    </div>

                    <i className="icon-chevron-right" />
                </a>
              </ListContainer>
            </KeyList>
          </DataModal>
        )
      }
    </div>
  );
}
