export const tutoriais = [
  // {
  //   image: './tutorial/deposito.svg',
  //   text: 'Deposito',
  //   route: 'deposito'
  // },
  // {
  //   image: './tutorial/retirada.svg',
  //   text: 'Retirada',
  //   route: 'retirada'
  // },
  {
    image: './tutorial/abrir-conta.png',
    text: 'Abrir sua conta',
    route: 'cadastro'
  },
  // {
  //   image: './tutorial/tipos-de-conta.svg',
  //   text: 'Tipos de contas',
  //   route: 'conectar'
  // },
  {
    image: './tutorial/convide.svg',
    text: 'Convide amigos',
    route: 'convide'
  },
  {
    image: './tutorial/conectar-conta.svg',
    text: 'Agregação',
    route: 'outraConta'
  },
  {
    image: './tutorial/conselho.svg',
    text: 'Conselho',
    route: 'conselho'
  },
  // {
  //   image: './tutorial/mentor.png',
  //   text: 'Tenha seu mentor',
  //   route: 'mentoria'
  // },
  {
    image: './tutorial/esqueceu-senha.svg',
    text: 'Esqueceu a senha',
    route: 'recuperarSenha'
  },
  // {
  //   image: './tutorial/alterar-senha.svg',
  //   text: 'Alterar senha de segurança',
  //   route: 'alterarSenha'
  // },
  // {
  //   image: './tutorial/criar-pin.svg',
  //   text: 'Criar novo PIN',
  //   route: 'pin'
  // },
  // {
  //   image: './tutorial/dois-fatores.png',
  //   text: 'Autenticador de dois fatores (2FA)',
  //   route: 'doisFatores'
  // },
  // {
  //   image: './tutorial/desabilitar-dois-fatores.png',
  //   text: 'Desativar Autenticação',
  //   route: 'desabilitar-dois-fatores'
  // },
]

export const tutoriaisTypes = {
  retirada: {
    title: 'Como Fazer uma Retirada',
    steps: [
      {
        image: '../tutorial/retirada/1.svg',
        text: 'Retirar o valor que precisa é simples e rápido. basta seguir o passo a passo intuitivo e retirar o valor que precisar.',
      },
      {
        image: '../tutorial/retirada/2.svg',
        text: 'Escolha ou digite o valor que necessita retirar, confirme e clique na tela para avançar.',
      },
      {
        image: '../tutorial/retirada/3.svg',
        text: 'Escolha qual banco agregado a sua conta PixLand você deseja fazer a retirada do valor. ',
      },
      {
        image: '../tutorial/retirada/4.svg',
        text: 'Nesta tela, confira todo o descritivo da operação, estando tudo ok, confirme e clique na seta para avançar.',
      },
      {
        image: '../tutorial/retirada/5.svg',
        text: 'Agora é hora de usar seu PIN. Dessa forma, sua transação está segura. Insira o PIN, confirme e clique na seta para avançar.',
      },
      {
        image: '../tutorial/retirada/6.svg',
        text: 'Sua retirada foi concluída com total sucesso e segurança, velocidade e simplicidade. E sempre no melhor estilo.',
      },
    ]
  },
  deposito: {
    title: 'Como fazer um deposito',
    steps: [
      {
        image: '../tutorial/deposito/1.svg',
        text: 'Faça quantos depósitos precisar direto em sua conta. Use boleto ou transferência bancária. Seguro, rápido e fácil.'
      },
      {
        image: '../tutorial/deposito/2.svg',
        text: 'Escolhendo a opção BOLETO, você adiciona o valor que quiser. Em seguida gere o BOLETO com o valor desejado.'
      },
      {
        image: '../tutorial/deposito/3.svg',
        text: 'Pronto, pague com o código de barra ou gere o arquivo em PDF para pagar com a leitura automática do código de barras.'
      },
      {
        image: '../tutorial/deposito/4.svg',
        text: 'Ao escolher a opção TRANSFERÊNCIA, insira o valor desejado para o depósito. Clique em continuar.'
      },
      {
        image: '../tutorial/deposito/5.svg',
        text: 'Em seguida confira os dados da conta que receberá o valor a ser transferido. Tudo ok? Clique em ENVIAR COMPROVANTE'
      },
      {
        image: '../tutorial/deposito/6.svg',
        text: 'Após nosso sistema confirmar todos os dados da transação, será gerado um comprovante para posterior conferência. Excelente, depósito realizado com sucesso.'
      },
    ]
  },
  cadastro: {
    title: 'Como abrir uma conta',
    steps: [
      {
        image: '../tutorial/cadastro/1.svg',
        text: 'Parabéns, você recebeu um CÓDIGO CONVITE para ser membro do PixLand, preencha os 5 caracteres do seu código no espaço acima e clique na seta para avançar'
      },
      {
        image: '../tutorial/cadastro/2.svg',
        text: 'No PixLand você pode ter até 3 tipos de conta: Para você, Para sua empresa ou Para sua Startup. Escolha o tipo de conta e clique na seta para avançar.'
      },
      {
        image: '../tutorial/cadastro/3.svg',
        text: 'Excelente, ótima escolha. Agora preencha com todas as informações necessárias para completar o seu cadastro de membro. Certifique-se das informações corretas e clique na seta para avançar.'
      },
      {
        image: '../tutorial/cadastro/4.svg',
        text: 'Para realizar a verificação de sua conta, escolha o tipo de documento e realize a foto/selfie para validar o processo. Clique na seta para concluir.'
      },
      {
        image: '../tutorial/cadastro/5.svg',
        text: 'Obrigado. Agora é só aguardar nossa análise interna, é bem rápido. Fique atento a sua caixa de e-mails, pois em breve você receberá um e-mail resposta da nossa equipe de membros. PixLand, você no melhor estilo.'
      },
    ]
  },
  conectar: {
    title: 'Como conectar uma conta',
    steps: [
      {
        image: '../tutorial/conectar/1.svg',
        text: 'Com sua conta de membro aberta, é só ir no site na opção CONEXÃO e procurar o nome do seu banco, preencher as informações e pronto,'
      },
      {
        image: '../tutorial/conectar/2.svg',
        text: 'a partir desse momento você tem a disposição nossa tecnologia Open Banking que vai facilitar suas operações financeiras em quantos bancos for cliente, tudo isso apenas através do nosso site e aplicativo, (Bradesco, Santander, Banco Brasil, Itaú, Nubank, Caixa, BTG, Mercado Pago e Modal+).'
      },
      {
        image: '../tutorial/conectar/3.svg',
        text: 'Todas as suas informações com sigilo e segurança, porém com a velocidade que você necessita para realizar compras, pagamentos, depósitos, transferências, emitir relatórios e viabilizar suas transações e otimizar seu tempo.'
      },
    ]
  },
  outraConta: {
    title: 'Como conectar outra conta',
    steps: [
      {
        image: '../tutorial/outra-conta/1.svg',
        text: 'Com sua conta de membro aberta, é só ir no site na opção CONEXÃO e procurar o nome do seu banco, preencher as informações e pronto,'
      },
      {
        image: '../tutorial/outra-conta/2.svg',
        text: 'a partir desse momento você tem a disposição nossa tecnologia Open Banking que vai facilitar suas operações financeiras em quantos bancos for cliente, tudo isso apenas através do nosso site e aplicativo, (Bradesco, Santander, Banco Brasil, Itaú, Nubank, Caixa, BTG, Mercado Pago e Modal+).'
      },
      {
        image: '../tutorial/outra-conta/3.svg',
        text: 'Todas as suas informações com sigilo e segurança, porém com a velocidade que você necessita para realizar compras, pagamentos, depósitos, transferências, emitir relatórios e viabilizar suas transações e otimizar seu tempo.'
      },
    ]
  },
  convide: {
    title: 'Como convidar um amigo',
    steps: [
      {
        image: '../tutorial/convide/1.svg',
        text: 'Estamos construindo uma comunidade de membros que interage e agrega valores entre si. Ao indicar um amigo, considere como esse(a) poderá ajudar a comunidade? Suas habilidades, expertises e o quanto pode trazer de contribuição intelectual, técnica e emocional. Combinado? Clique na seta para avançar.'
      },
      {
        image: '../tutorial/convide/2.svg',
        text: 'Copie seu código exclusivo de membro e envie por WhatsApp ou e-mail. Seu indicado receberá o código convite, após o cadastro e efetivação como membro da comunidade, você receberá sua comissão direto em sua conta pela indicação. Indique quantos amigos quiser.'
      },
    ]
  },
  conselho: {
    title: 'Conselho consultivo',
    steps: [
      {
        image: '../tutorial/conselho/1.svg',
        text: 'Ajude o PixLand a crescer com suas expertises. Somos uma comunidade de membros acima de qualquer coisa. Valorizamos e reconhecemos líderes, talentos e a visão e ação disruptivas dos membros que têm a capacidade de trazer crescimento para os membros: equipe, membros pessoa e membro empresas.'
      },
      {
        image: '../tutorial/conselho/2.svg',
        text: 'Ajude o PixLand a crescer com suas expertises. Somos uma comunidade de membros acima de qualquer coisa. Valorizamos e reconhecemos líderes, talentos e a visão e ação disruptivas dos membros que têm a capacidade de trazer crescimento para os membros: equipe, membros pessoa e membro empresas.'
      },
    ]
  },
  recuperarSenha: {
    title: 'Como Recuperar a Senha',
    steps: [
      {
        image: '../tutorial/recuperar-senha/1.svg',
        text: 'Esqueceu a senha e não anotou? Tudo bem, nós podemos te ajudar. Mas desta vez, anote sua nova senha em um lugar seguro. Clique na seta para avançar.'
      },
      {
        image: '../tutorial/recuperar-senha/2.svg',
        text: 'Insira seu email, o mesmo que cadastrou na abertura de sua conta, enviaremos um código de recuperação para recuperar sua senha. Clique em RECUPERAR e depois na seta para avançar.'
      },
      {
        image: '../tutorial/recuperar-senha/3.svg',
        text: 'Pronto, verifique seu email, sua senha foi recuperada.'
      },
    ]
  },
  pin: {
    title: 'Como criar PIN',
    steps: [
      {
        image: '../tutorial/pin/1.svg',
        text: 'O PixLand investe para que seus membros tenham total segurança em suas transações com a tecnologia de ponta BlockChain que garante a máxima segurança de toda a plataforma. Crie seu novo PIN para realizar qualquer operação com tranquilidade. Clique na seta para avançar.'
      },
      {
        image: '../tutorial/pin/2.svg',
        text: 'Anote sua escolha e guarde em segurança. Digite os 6 caracteres nos campos acima, em seguida confirme e clique na seta para avançar. É importante que anote o PIN escolhido, mas se caso necessitar, faça um novo por aqui.'
      },
      {
        image: '../tutorial/pin/3.svg',
        text: 'Ótimo, PIN cadastrado. Esse código é único, pessoal e intransferível. Com ele você poderá realizar transações com segurança. Lembre-se de digitá-lo corretamente quando solicitado na operação. Obrigado.'
      },
    ]
  },
  doisFatores: {
    title: 'Configurar autenticação de dois fatores',
    steps: [
      {
        image: '../tutorial/dois-fatores/1.svg',
        text: 'Fazer a autenticação de 2 fatores de sua conta é essencial para que só você possa ter acesso a todas funções do seu APP. Clique na seta para avançar.'
      },
      {
        image: '../tutorial/dois-fatores/2.svg',
        text: 'Baixe na sua loja de aplicativos e baixe o autenticador padrão do Google. Copie o código gerado na tela e clique na seta para avançar.'
      },
      {
        image: '../tutorial/dois-fatores/3.svg',
        text: 'Em seguida, confirme a autenticação de 2 fatores. Excelente, sua autenticação de 2 fatores foi realizada com sucesso. Suas transações seguras no melhor estilo.'
      },
    ]
  },
  alterarSenha: {
    title: 'Alterar a senha de segurança',
    steps: [
      {
        image: '../tutorial/alterar-senha/1.svg',
        text: 'Para alterar sua senha de segurança, siga o passo a passo preenchendo os dados com atenção.'
      },
      {
        image: '../tutorial/alterar-senha/2.svg',
        text: 'Escolha a nova senha de 6 caracteres, e sem seguida confirme a senha. Lembre-se de anotá-la em lugar seguro. Pronto sua nova senha foi ativada com sucesso.'
      },
    ]
  },
  mentoria: {
    title: 'Mentoria',
    steps: [
      {
        image: '../tutorial/mentoria/1.svg',
        text: 'Ter um mentor exclusivo para ajudar você ou seu negócio. Pensando sempre em você e inovando, escolha o mentor que mais atenda às suas necessidades. Digita a especialidade que procura.'
      },
      {
        image: '../tutorial/mentoria/2.svg',
        text: 'Veja as opções e o currículo detalhado de cada mentor que está a sua disposição. Faça uma sessão experimental e depois escolha o plano ideal de mentoria. Clique na seta para avançar.'
      },
      {
        image: '../tutorial/mentoria/3.svg',
        text: 'Após escolher seu mentor ou mentora ideal, selecione o melhor dia para que o pagamento da mentoria seja debitado direto de sua conta. Lembra que você pode parcelar o valor total. Confirme.'
      },
      {
        image: '../tutorial/mentoria/4.svg',
        text: 'Insira seu PIN, confirme e pronto, seu plano de mentoria foi agendado com sucesso.'
      },
    ]
  },
}
