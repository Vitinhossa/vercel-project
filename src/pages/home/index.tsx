import HomeTemplate from '@/components/templates/homeTemplate';
import ContentContainer from '@/components/atoms/ContentContainer';

export default function Home() {
  const menuItems = [
    { title: `Meus dados`, route: `/meusdados` },
    { title: `Meus convidados`, route: `/seusconvidados`, href: `https://www.pixland.com.br/para-voce` },
    { title: `Convidar amigos`, route: `/convideseusamigos` },
    { title: `Taxas, Tarifas e Comissões`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
    { title: `Conselho consultivo`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
    { title: `Acordos, Políticas e Termos`, route: `/acordospoliticastermos` },
    {
      title: `Dúvidas frequentes`, collapseItems: [
        { title: `Tutorial`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
        { title: `Fale conosco`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
        { title: `Sobre o PixLand`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
      ]
    },
    {
      title: `Configurações`, collapseItems: [
        { title: `Criar novo PIN`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
        { title: `Trocar senha de acesso`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
        { title: `Autenticação de 2 fatores`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
        { title: `Contas Agregadas (conectadas)`, route: `/convideseusamigos`, href: `https://www.pixland.com.br/para-voce` },
      ]
    },
    { title: `Sair`, route: `/` },
  ];
  return (
    <ContentContainer>
      <HomeTemplate
        userName="USER"
        userImage="logo_sa.png"
        userAccount="43534534"
        userAgency="00000     Cobranças"
        userBank="003 - PixLand S.A"
        menuItems={menuItems}
      />
    </ContentContainer>
  );
}

// A imagem talvez não vá
