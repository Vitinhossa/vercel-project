import { HeadingTwo, Paragraph, HeadingThree } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import styled from 'styled-components';
import EmailIcon from '@/assets/svg/email';
import CelularIcon from '@/assets/svg/celular';
import DocumentoIcon from '@/assets/svg/documento';
import ShieldIcon from '@/assets/svg/shiedIcon';
import { fontFamily } from '@/utils/fonts';
import { useState } from 'react';
import { useRouter } from 'next/router';
import DotsMenuIcon from '@/assets/svg/dots-menu';
import UploadIcon from '@/assets/svg/upload';
import QrcodeIcon from '@/assets/svg/qrcode';
import TrashIcon from '@/assets/svg/trash';
import Header from '../molecules/Header/index';
import PaddingContainer from '../atoms/PaddingContainer';
import Link from '../atoms/Link';
import DataModal from '../molecules/DataModal';
import { DisplayFlex } from '../atoms/Alignment';
import FilledButton from '../atoms/FilledButton';
import ShareDataModal from '../molecules/ShareDataModal';
import {useAuth} from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'

import Cookies from 'js-cookie'
import api from '@/services/api';
import { useAlert } from 'react-alert';

const LinkContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.cinzaLightMedium};
  /* padding: 20px 24px; */
`;

const KeyList = styled.ul`
  list-style: none;
  width: 100%;
`;

const Key = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const KeyOptionBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotateZ(90deg);
  }
`;

const ModalKey = styled.li`
  display: flex;
  width: 100%;

  span {
    margin-right: 8px;
  }

  p {
    color: ${colors.black};
    font-weight: bold;
    font-family: ${fontFamily.roboto};
  }

  a {
    padding: 7.5px 0;
  }
`;

const OpenModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  font-size: 14px;

  i {
    color: ${colors.verdeMedium};
    font-weight: bold;
  }
`;

const OptionList = styled.ul`
  list-style: none;
  width: 100%;
`;

const OptionListItem = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  margin: 5px 0;
  &:last-of-type {
    margin: 0;
  }
`;

export default function PixMinhasChavesTemplate() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [openKey, setOpenKey] = useState(Array);
  const [optionModalOpen, setOptionModalOpen] = useState(false);
  const [optionModalContent, setOptionModalContent] = useState(-1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const alert = useAlert();
  const [openShareModal, setOpenShareModal] = useState(false);
  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;
  const pixKeys = [
    {
      id: 0,
      type: `email`,
      key: `email@gmail.com`,
    },
    {
      id: 1,
      type: `phone`,
      key: `(99) 99999-9999`,
    },
  ];

  const getTitle = (type: string) => {
    let title = ``;
    switch (type) {
      case `EMAIL`:
        title = `E-mail`;
        break;
      case `PHONE`:
        title = `Celular`;
        break;
      case `CPF`:
        title = `CPF`;
        break;
      case `CNPJ`:
        title = `CNPJ`;
        break;
      case `EVP`:
        title = `Chave aleatória`;
        break;
      default:
        break;
    }
    return title;
  };
  const getIcon = (type: string) => {
    let icon;
    switch (type) {
      case `EMAIL`:
        icon = EmailIcon;
        break;
      case `PHONE`:
        icon = CelularIcon;
        break;
      case `CPF`:
        icon = DocumentoIcon;
        break;
      case `CNPJ`:
        icon = DocumentoIcon;
        break;
      case `random`:
        icon = ShieldIcon;
        break;
      default:
        icon = ShieldIcon;
        break;
    }
    return icon;
  };
  const buildOptionModalHead = (selectedOption: any) => {
    const title = getTitle(selectedOption.type);
    console.log(selectedOption);
    return (
      <div style={{ width: `100%`, marginBottom: `35px` }}>
        <DisplayFlex direction="column" align="center" justify="center">
          <HeadingThree
            margin="0 0 4px 0"
            fontFamily={fontFamily.roboto}
            fontSize="20px"
            fontWeight="bold"
            lineHeight="28px"
            color={colors.black}
          >
            {title}
          </HeadingThree>
        </DisplayFlex>
        <Paragraph fontColor={colors.cinzaLightMedium} fontSize="17px" textAlign='center'>
          {selectedOption.key_pix}
        </Paragraph>
      </div>
    );
  };

  return (
    <>
      <Header title="PIX" mainHasBackBtn />
      <PaddingContainer padding="20px 20px 16px 20px">
        <HeadingTwo
          fontWeight="bold"
          fontSize="20px"
          color={colors.black}
          fontFamily={fontFamily.roboto}
          margin="0 0 5px 0"
        >
          Minhas chaves
        </HeadingTwo>
        <Paragraph
          fontSize="17px"
          lineHeight="24px"
          fontFamily={fontFamily.roboto}
          fontColor={colors.cinzaLightMedium}
        >
          Gerencie suas chaves para receber transferências pelo Pix.
        </Paragraph>
      </PaddingContainer>
      <LinkContainer>
        <OpenModalButton onClick={() => setModalOpen(true)}>
          <p style={{ color: colors.verdeMedium, fontWeight: `bold` }}>
            Registrar chave
          </p>
          <i className="icon-add" />
        </OpenModalButton>
      </LinkContainer>
      <PaddingContainer padding="20px 20px">
        <HeadingThree fontSize="14px" margin="0 0 16px 0" color={colors.black}>
          {user.chaves_pix.length} de 5 chaves
        </HeadingThree>
        <KeyList>
          {user.chaves_pix.map((pixKey, indx) => {
            const iconClass = ``;
            const IconSvg = getIcon(pixKey.type);
            const title = getTitle(pixKey.type);

            return (
              <Key key={pixKey.id}>
                <div style={{ marginRight: `8px` }}>
                  {iconClass !== `` && <i className={iconClass} />}
                  {IconSvg && IconSvg()}
                </div>
                <div>
                  <HeadingThree
                    fontWeight="bold"
                    margin="0 0 8px 0"
                    color={colors.black}
                    fontSize="14px"
                  >
                    {title}
                  </HeadingThree>
                  <Paragraph fontSize="14px" color={colors.cinzaLightMedium}>
                    {pixKey.key_pix}
                  </Paragraph>
                </div>
                <KeyOptionBtn
                  onClick={() => {
                    setOptionModalOpen(true);
                    setOptionModalContent(indx);
                    setOpenKey(pixKey);
                  }}
                >
                  {DotsMenuIcon()}
                </KeyOptionBtn>
              </Key>
            );
          })}
        </KeyList>
      </PaddingContainer>

      {modalOpen && (
        <DataModal closeAction={() => setModalOpen(false)}>
          <KeyList>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/email"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
              >
                <span>{EmailIcon()}</span>
                <Paragraph>E-mail</Paragraph>
              </Link>
              </ModalKey>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/celular"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
              >
                <span>{CelularIcon()}</span>
                <Paragraph>Celular</Paragraph>
              </Link>
              </ModalKey>
              <ModalKey>
                <Link
                  url="/pix/minhaschaves/registrar/cpf"
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `flex-start`,
                    width: `100%`,
                  }}
                >
                  <span>{ShieldIcon()}</span>
                  <Paragraph>CPF</Paragraph>
                </Link>
            </ModalKey>
            <ModalKey>
                <Link
                  url="/pix/minhaschaves/registrar/cnpj"
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `flex-start`,
                    width: `100%`,
                  }}
                >
                  <span>{ShieldIcon()}</span>
                  <Paragraph>CNPJ</Paragraph>
                </Link>
            </ModalKey>
            <ModalKey>
              <Link
                url="/pix/minhaschaves/registrar/aleatoria"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                }}
              >
                <span>{ShieldIcon()}</span>
                <Paragraph>Chave aleatória</Paragraph>
              </Link>
            </ModalKey>
          </KeyList>
        </DataModal>
      )}

      {optionModalOpen && (
        <DataModal closeAction={() => setOptionModalOpen(false)}>
          {buildOptionModalHead(openKey)}
          <OptionList>
            <OptionListItem onClick={() => setOpenShareModal(true)}>
              {UploadIcon()}
              <Paragraph
                margin="0 0 0 8px"
                fontWeight="bold"
                fontColor={colors.black}
                fontFamily={fontFamily.roboto}
              >
                Compartilhar chave
              </Paragraph>
            </OptionListItem>
            <OptionListItem
              onClick={() => router.push(`/pix/depositar`)}
            >
              {QrcodeIcon()}
              <Paragraph
                fontWeight="bold"
                margin="0 0 0 8px"
                fontColor={colors.black}
                fontFamily={fontFamily.roboto}
              >
                Criar QR code
              </Paragraph>
            </OptionListItem>
            <OptionListItem onClick={() => setDeleteModalOpen(true)}>
              {TrashIcon()}
              <Paragraph
                fontWeight="bold"
                margin="0 0 0 8px"
                fontColor={colors.black}
                fontFamily={fontFamily.roboto}
              >
                Excluir chave
              </Paragraph>
            </OptionListItem>
          </OptionList>
        </DataModal>
      )}

      {deleteModalOpen && (
        <DataModal closeAction={() => setDeleteModalOpen(false)}>
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `100%`,
            }}
          >
            <HeadingThree> Você quer mesmo excluir essa chave? </HeadingThree>
          </div>
          <div
            style={{ width: `100%`, marginTop: `28px`, marginBottom: `40px` }}
          >
            <Key>
              <div style={{ marginRight: `8px` }}>
                {getIcon(openKey.type)()}
              </div>
              <div>
                <HeadingThree
                  fontWeight="bold"
                  margin="0 0 8px 0"
                  color={colors.black}
                  fontSize="14px"
                >
                  {getTitle(openKey.type)}
                </HeadingThree>
                <Paragraph fontSize="14px" color={colors.cinzaLightMedium}>
                  {openKey.key_pix}
                </Paragraph>
              </div>
            </Key>
          </div>
          <div style={{ width: `100%`, padding: `0 25px` }}>
            <DisplayFlex>
              <FilledButton
                text="Não"
                bgColor1={colors.cinzaLight}
                textColor={colors.black}
                margin="0 16px 0 0"
                action={() => setDeleteModalOpen(false)}
              />
              <FilledButton
                text="Sim, excluir"
                bgColor1={colors.vermelho}
                textColor={colors.branco}
                action={() => {
                  setDeleteModalOpen(false);
                  setOptionModalOpen(false);
                  const token = Cookies.get('token')
                  if (token) {

                      console.log("Got a token in the cookies, let's see if it is valid")
                      api.defaults.headers.Authorization = `PixLand ${token}`

                      api.post('pix/chave/dict/delete', { key:openKey.key_pix })
                      .then((response) => {

                        if(response.data['success'])
                        {
                          const alerta = alert.show(response.data['message'], {
                            timeout: 8000,
                            type: 'success'
                          })
                          router.reload();
                        }
                        else{
                          const alerta = alert.show(response.data['message'], {
                            timeout: 8000,
                            type: 'error'
                          })
                        }

                      })
                      .catch((err) => {
                        const alerta = alert.show('Erro ao excluir chave PIX', {
                          timeout: 8000,
                          type: 'error'
                        })
                      })



                }
                }}
              />
            </DisplayFlex>
          </div>
        </DataModal>
      )}

      {openShareModal && (
        <ShareDataModal
          closeAction={() => setOpenShareModal(false)}
          title="Compartilhar Chave"
          textShare={openKey.key_pix}
        />
      )}
    </>
  );
}
