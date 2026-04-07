export interface ContentItem {
  id: string;
  title: string;
  url_video: string;
  url_pdf_guia?: string;
  category: 'WhatsApp' | 'Segurança' | 'Serviços Públicos' | 'Básico' | 'Social' | 'Finanças';
  description: string;
}

export interface GuideStep {
  text: string;
  image_url: string;
}

export interface GuideItem {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: GuideStep[];
}

export const CONTENTS: ContentItem[] = [
  {
    id: 'aula-basica-android',
    title: 'Aula Básica de Android',
    url_video: 'https://www.youtube.com/embed/MfLT6WHQ0GQ',
    category: 'Básico',
    description: 'Introdução aos botões, ícones e gestos básicos na tela.'
  },
  {
    id: 'instalar-aplicativos',
    title: 'Como Instalar Aplicativos',
    url_video: 'https://www.youtube.com/embed/FLeh5suShkQ',
    category: 'Básico',
    description: 'Tutorial sobre como usar a Play Store com segurança para baixar novos apps.'
  },
  {
    id: 'whatsapp-golpes',
    title: 'WhatsApp e Prevenção de Golpes',
    url_video: 'https://www.youtube.com/embed/oR2YCrVpReY',
    category: 'WhatsApp',
    description: 'Dicas cruciais para não cair em fraudes e proteger as conversas.'
  },
  {
    id: 'passo-a-passo-pix',
    title: 'Passo a Passo do Pix',
    url_video: 'https://www.youtube.com/embed/xQOHrGDzVuU',
    category: 'Finanças',
    description: 'Explicação visual de como fazer pagamentos e transferências rápidas.'
  },
  {
    id: 'aumentar-letras',
    title: 'Aumentar Letras e Visibilidade',
    url_video: 'https://www.youtube.com/embed/ysKUYLO9cNM',
    category: 'Básico',
    description: 'Configurações de acessibilidade para facilitar a leitura no celular.'
  },
  {
    id: 'entrando-facebook',
    title: 'Entrando no Facebook',
    url_video: 'https://www.youtube.com/embed/DDqGxeqsEhY',
    category: 'Social',
    description: 'Guia para iniciantes que querem ver fotos de amigos e familiares.'
  },
  {
    id: 'celular-adaptado',
    title: 'Celular Adaptado (Interface Simples)',
    url_video: 'https://www.youtube.com/embed/nVcZsCfg9CM',
    category: 'Básico',
    description: 'Como deixar o sistema com ícones gigantes e apenas o essencial.'
  },
  {
    id: 'seguranca-privacidade',
    title: 'Segurança Digital e Privacidade',
    url_video: 'https://www.youtube.com/embed/TrRrp6HaD1M',
    category: 'Segurança',
    description: 'Orientações sobre cuidados ao clicar em links e navegar na internet.'
  },
  {
    id: 'noticias-falsas',
    title: 'Verificador de Notícias Falsas',
    url_video: 'https://www.youtube.com/embed/8PbqbnMKP0I',
    category: 'Segurança',
    description: 'Apresentação de ferramentas que ajudam a checar se uma mensagem é real.'
  },
  {
    id: 'escolher-celular',
    title: 'Como Escolher um Novo Celular',
    url_video: 'https://www.youtube.com/embed/2qt8XvorXkQ',
    category: 'Básico',
    description: 'O que observar na hora da compra para não levar um aparelho difícil de usar.'
  }
];

export const GUIDES: GuideItem[] = [
  {
    id: 'enxergar-melhor',
    title: 'Como Enxergar Melhor',
    description: 'Aumente o tamanho das letras e cores do seu celular.',
    category: 'Acessibilidade',
    steps: [
      {
        text: '1. No menu principal do seu celular, procure e toque na "Engrenagem" de Configurações.',
        image_url: '/mao_clicando_configuracoes.png'
      },
      {
        text: '2. Agora, toque na opção "Visor" ou "Tela" (tem um desenho de sol).',
        image_url: '/mao_clicando_visor.png'
      },
      {
        text: '3. Procure por "Tamanho da Fonte" e arraste a bolinha para a direita para a letra ficar GIGANTE.',
        image_url: '/alavanca_fonte_maxima.png'
      }
    ]
  },
  {
    id: 'pix-seguro',
    title: 'Guia do Pix Seguro',
    description: 'Aprenda a fazer transferências sem medo de errar ou cair em golpes.',
    category: 'Finanças',
    steps: [
      {
        text: '1. No aplicativo do seu banco, procure pelo botão com o desenho do PIX (o X verde e branco).',
        image_url: '/clicando_no_pix.png'
      },
      {
        text: '2. O PASSO MAIS IMPORTANTE: Antes de colocar a senha, confira se o NOME da pessoa está correto.',
        image_url: '/conferir_nome_pix.png'
      },
      {
        text: '3. LEMBRE-SE: O banco NUNCA liga pedindo sua senha. Se alguém pedir por telefone, desligue na hora!',
        image_url: '/aviso_seguranca_pix.png'
      }
    ]
  },
  {
    id: 'whatsapp-protegido',
    title: 'WhatsApp Protegido',
    description: 'Crie uma senha secreta para ninguém roubar sua conta.',
    category: 'Segurança',
    steps: [
      {
        text: '1. No seu WhatsApp, toque nos "Três Pontinhos" no alto e depois em "Configurações".',
        image_url: '/whatsapp_configuracoes.png'
      },
      {
        text: '2. Vá em "Conta" e toque em "Confirmação em duas etapas". Crie um código de 6 números que você não esqueça.',
        image_url: '/whatsapp_pin.png'
      },
      {
        text: '3. DICA DE OURO: Escreva esses 6 números em um papel e guarde em uma gaveta segura na sua casa.',
        image_url: '/whatsapp_papel_pin.png'
      }
    ]
  },
  {
    id: 'gov-br-acesso',
    title: 'Gov.br Fácil',
    description: 'Entre no Gov.br para ver sua Carteira de Trabalho, SUS e INSS.',
    category: 'Serviços Públicos',
    steps: [
      {
        text: '1. Digite seu CPF e a sua Senha Única. Lembre-se: esta senha serve para quase tudo do Governo.',
        image_url: '/gov_br_login.png'
      },
      {
        text: '2. O SEGREDO DA FOTO: Para fazer o reconhecimento facial, fique em um lugar bem iluminado e tire o óculos.',
        image_url: '/gov_br_foto.png'
      },
      {
        text: '3. NÍVEIS PRATA E OURO: Conseguir essas "medalhas" é bom para ter mais segurança e acessar mais serviços.',
        image_url: '/gov_br_medalhas.png'
      }
    ]
  },
  {
    id: 'teclado-emojis',
    title: 'Teclado e Emojis',
    description: 'Aprenda a escrever mensagens e usar as carinhas (emojis).',
    category: 'WhatsApp',
    steps: [
      {
        text: '1. Toque na barra branca onde se escreve. O teclado vai subir sozinho.',
        image_url: '/mao_clicando_teclado.png'
      },
      {
        text: '2. Para as carinhas, toque no rosto sorridente no canto do teclado.',
        image_url: '/teclado_emoji_click.png'
      },
      {
        text: '3. DICA: Se errar uma letra, toque na tecla com um "X" para apagar.',
        image_url: '/teclado_backspace.png'
      }
    ]
  },
  {
    id: 'limpar-celular',
    title: 'Limpar o Celular',
    description: 'Apague fotos repetidas e "bom dia" para o celular não travar.',
    category: 'Básico',
    steps: [
      {
        text: '1. Procure pelo aplicativo "Galeria" ou "Fotos" onde ficam suas imagens.',
        image_url: '/app_galeria.png'
      },
      {
        text: '2. Toque e segure o dedo em cima da foto que quer apagar até aparecer um "reminho" ou lixeira.',
        image_url: '/selecionar_foto_lixeira.png'
      },
      {
        text: '3. IMPORTANTE: Depois de apagar, vá na "Lixeira" para excluir de vez e ganhar espaço.',
        image_url: '/limpando_lixeira.png'
      }
    ]
  },
  {
    id: 'chamada-video',
    title: 'Chamada de Vídeo',
    description: 'Veja seus netos e amigos enquanto conversa pelo WhatsApp.',
    category: 'WhatsApp',
    steps: [
      {
        text: '1. Abra a conversa com a pessoa e olhe lá no alto: tem um desenho de uma filmadora.',
        image_url: '/whatsapp_icon_video.png'
      },
      {
        text: '2. Toque na filmadora e espere a pessoa atender. Coloque o celular na altura do rosto.',
        image_url: '/posicao_chamada_video.png'
      },
      {
        text: '3. PARA DESLIGAR: Toque no botão vermelho com um desenho de telefone para baixo.',
        image_url: '/whatsapp_desligar.png'
      }
    ]
  },
  {
    id: 'enviar-localizacao',
    title: 'Mandar Localização',
    description: 'Diga onde você está para que alguém possa te buscar ou te encontrar.',
    category: 'WhatsApp',
    steps: [
      {
        text: '1. Toque no desenho de um "Clipe de papel" no WhatsApp e escolha "Localização".',
        image_url: '/whatsapp_clipe_id.png'
      },
      {
        text: '2. Toque em "Localização atual" (tem uma bolinha azul que diz onde você está).',
        image_url: '/whatsapp_mandar_local.png'
      },
      {
        text: '3. PRONTO: A pessoa receberá um mapa mostrando exatamente onde você está.',
        image_url: '/whatsapp_mapa_enviado.png'
      }
    ]
  },
  {
    id: 'ler-qr-code',
    title: 'Ler o QR Code',
    description: 'Aprenda a ler os quadradinhos pretos que aparecem na TV ou no banco.',
    category: 'Básico',
    steps: [
      {
        text: '1. Abra o aplicativo da Câmera do seu celular, como se fosse tirar uma foto.',
        image_url: '/abrir_camera.png'
      },
      {
        text: '2. Aponte a câmera para o quadradinho preto (QR Code) e espere aparecer um link.',
        image_url: '/apontando_qr_code.png'
      },
      {
        text: '3. Toque no link amarelo ou azul que apareceu na tela para abrir o conteúdo.',
        image_url: '/clicando_link_qr.png'
      }
    ]
  },
  {
    id: 'google-lens',
    title: 'Lupa do Google',
    description: 'Use o celular para ler letras miúdas de remédios ou traduzir textos.',
    category: 'Acessibilidade',
    steps: [
      {
        text: '1. Procure pelo ícone que parece uma camera colorida do Google (Google Lens).',
        image_url: '/google_lens_icon.png'
      },
      {
        text: '2. Aponte para um texto pequeno e toque em "Texto" ou "Pesquisar".',
        image_url: '/lens_apontando.png'
      },
      {
        text: '3. O celular vai iluminar as letras e você pode até pedir para ele ler em voz alta!',
        image_url: '/lens_lendo_alto.png'
      }
    ]
  },
  {
    id: 'brilho-e-som',
    title: 'Brilho e Som',
    description: 'Deixe a tela mais clara e o toque do celular mais alto.',
    category: 'Básico',
    steps: [
      {
        text: '1. Deslize o dedo do topo da tela para baixo, duas vezes, até ver uma barra com um sol.',
        image_url: '/deslizar_topo_brilho.png'
      },
      {
        text: '2. Arraste a barra do sol para a direita para a tela ficar bem brilhante.',
        image_url: '/ajustar_brilho.png'
      },
      {
        text: '3. Para o SOM: Use os botões do lado do celular e aperte para cima até ficar no máximo.',
        image_url: '/botão_volume_fisico.png'
      }
    ]
  },
  {
    id: 'links-falsos',
    title: 'Links de Golpes',
    description: 'Como saber se uma mensagem de prêmio ou banco é mentira.',
    category: 'Segurança',
    steps: [
      {
        text: '1. DESCONFIE: Se a mensagem diz que você ganhou um sorteio que não participou, é golpe.',
        image_url: '/print_golpe_sorteio.png'
      },
      {
        text: '2. OLHE O LINK: Se o endereço for estranho (cheio de letras e números sem sentido), não clique.',
        image_url: '/link_suspeito_exemplo.png'
      },
      {
        text: '3. NA DÚVIDA: Não clique em nada. Pergunte para um neto ou filho antes de abrir.',
        image_url: '/perguntar_ajuda.png'
      }
    ]
  }
];
