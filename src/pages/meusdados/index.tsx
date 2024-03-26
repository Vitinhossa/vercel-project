import ContentContainer from '@/components/atoms/ContentContainer';
import MeusDadosTemplate from '@/components/templates/meusdadosTemplate';

export default function MeusDados() {
  const menuItems = [
    {
      id: 4,
      title: `Meu Estilo`,
      subtitle: `Start`,
      route: `/meuplano`,
      hasIcon: true,
    },
    {
      id: 0,
      title: `Alterar nome`,
      route: `/meusdados/alterarnome`,
      hasIcon: true,
    },
    {
      id: 1,
      title: `Alterar senha`,
      route: `/meusdados/alterarsenha`,
      hasIcon: true,
    },
    // {
    //   id: 2,
    //   title: `Alterar pin`,
    //   route: `/meusdados/alterarpin`,
    //   hasIcon: true,
    // },
    {
      id: 3,
      title: `Alterar dados`,
      //route: `/meusdados/alterardados`,
      hasIcon: true,
    },
    {
      id: 5,
      title: `Alterar foto`,
      //route: `/meusdados/alterardados`,
      hasIcon: true,
    },
    {
      id: 6,
      title: `Encerrar conta`,
      //route: `/meusdados/alterardados`,
      hasIcon: true,
    },
  ];

  return (
    <ContentContainer>
      <MeusDadosTemplate
        userName="Fulano"
        userImage="smallLogoPixLand.svg"
        menuItems={menuItems}
      />
    </ContentContainer>
  );
}