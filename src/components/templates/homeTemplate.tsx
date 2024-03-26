/* eslint-disable */

import { useState } from 'react';
import UserMeetings from '../molecules/UserMeetings';
import Header from '../molecules/Header';
import SideMenu from '../organisms/SideMenu';
import PaddingContainer from '../atoms/PaddingContainer';
import CurrencyCard from '../molecules/CurrencyCard';
import { DisplayFlex } from '../atoms/Alignment';
import ButtonsTable from '../molecules/ButtonsTable';
import { useAuth } from '@/contexts/auth';
import Skeleton from 'react-loading-skeleton'
import { useAlert } from 'react-alert';
import { IMenuList } from '../molecules/SideMenuListItems';

interface IHomeTemplate {
  userImage?: string;
  userName?: string;
  userBank?: string;
  userAccount?: string;
  userAgency?: string;

  menuItems?: Array<IMenuList>;
}
export default function HomeTemplate({
  userImage,
  userName,
  userBank,
  userAgency,
  userAccount,
  menuItems,
}: IHomeTemplate) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const alert = useAlert();

  const { user, loading }: any = useAuth();
  if (loading) return <Skeleton height={300} count={1} />;

  if (user.meus_dados.foto_perfil.length > 10)
    userImage = user.meus_dados.foto_perfil;
  else
    userImage = "/" + userImage;
  console.log(user)

  let sua_conta = `Sua conta na PixLand:
  Banco: 509 - PixLand S.A / Powered by Celcoin S.A
  Agência: ${user.meus_dados.branch}
  Conta Digital: ${user.meus_dados.account}
  `;

  let chave_pix = '';

  if (user.chaves_pix.length)
    chave_pix = user.chaves_pix[0].key_pix;

  return (
    <>
      <PaddingContainer>
        <Header bgColor='#141414' isMainHeader menuClicked={() => setIsSideMenuOpen(true)} />

        <SideMenu
          fadeClick={() => setIsSideMenuOpen(false)}
          copyClick={() => {
            navigator.clipboard.writeText(sua_conta);
            const alerta = alert.show('Conta copiada com sucesso!', {
              timeout: 8000, // custom timeout just for this one alert
              type: 'success',
            });

          }}
          userImage={`${userImage}` || `/logo_sa.png`}
          userName={user.meus_dados.nome}
          userBank={`003 - PixLand S.A`}
          userAgency={user.meus_dados.branch}
          userAccount={user.meus_dados.account}
          userPix={chave_pix}
          menuItems={menuItems}
          isVisible={isSideMenuOpen}
        />
        <DisplayFlex align="center" justify="center">
          <UserMeetings
            src={`${userImage}` || ``}
            alt={userName || ``}
            userName={user.meus_dados.nome}
            user={user}
          />
          {/* icone notificação */}
          {/* <i /> */}
        </DisplayFlex>
        <CurrencyCard user={user} />

        <ButtonsTable />
      </PaddingContainer>
    </>
  );
}
