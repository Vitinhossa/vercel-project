import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import UserMeetings from '../molecules/UserMeetings';
import SideMenuListItems from '../molecules/SideMenuListItems';
import Skeleton from 'react-loading-skeleton'
import {useAuth} from '@/contexts/auth';
import { colors } from '@/utils/colors';
import MenuListItem from '@/components/atoms/MenuListItem';
import { fontSizes } from '@/utils/fonts';
import React  from 'react';
import { useAlert } from 'react-alert';

interface IMenuList {
  id: number;
  title: string;
  subtitle?: string;
  hasIcon?: boolean;
  route: string;
}

interface IHomeTemplate {
  userImage?: string;
  userName?: string;

  menuItems?: Array<IMenuList>;
}

export default function MeusDadosTemplate({
  userImage,
  userName = ``,
  menuItems,
}: IHomeTemplate) {

  const { user, loading }:any = useAuth();

  if(loading) return <Skeleton height={300} count={1} />;
  console.log(user)
  if(user.meus_dados.foto_perfil.length > 10)
  userImage = user.meus_dados.foto_perfil;
  else
  userImage = "/"+userImage;

  const hiddenFileInput = React.useRef(null);
  const alert = useAlert();

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleFile = async (event: any) => {
    const file = event;

    if (typeof window !== "undefined") {
      var form = new FormData();
      form.append("file", file);

      const res = await fetch(
        "https://api-operacao-sarmento.pixland.com.br/cdn/documentos/upload/perfil/" +
          user.meus_dados.token,
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      if(data.done)
                        {
                          const alerta = alert.show(data.message, {
                            timeout: 8000,
                            type: 'success'
                          })
                          router.reload();
                        }
                        else{
                          const alerta = alert.show(data.message, {
                            timeout: 8000,
                            type: 'error'
                          })
                        }

      console.log(data);
    }
  }
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <>
      <PaddingContainer
        minHeight="calc(100vh - 122px)"
        padding="0 20px 0 20px"
      >
        <Header title="Meus Dados" bgColor="#141414"  />
        <UserMeetings
          hasGreetings={false}
          token={user.meus_dados.token}
          userName={user.meus_dados.nome}
          src={`${userImage}` || ``}
          alt={userName}
          user={user}
        />
        <SideMenuListItems menuItems={menuItems} />
        <MenuListItem
            key="90"
            title="Alterar foto"
            hasBorderBottom={true}
            titleInCenter={false}
            action={() => {
              handleClick()
            }}
            titleSize={fontSizes.medium16}
            titleColor='#303030'
            subtitle={""}
            iconName={`icon-chevron-right`}
            itemHeight='55px'
          />
          <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
          />
      </PaddingContainer>
    </>
  );
}
