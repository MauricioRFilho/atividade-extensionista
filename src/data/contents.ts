export interface ContentItem {
  id: string;
  title: string;
  url_video: string;
  url_pdf_guia?: string;
  category: 'WhatsApp' | 'Segurança' | 'Serviços Públicos' | 'Básico';
  description: string;
}

export const CONTENTS: ContentItem[] = [
  {
    id: 'whatsapp-localizacao',
    title: 'Como enviar localização no WhatsApp',
    url_video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder, ideal trocar por link real do Cidadão na Rede
    category: 'WhatsApp',
    description: 'Aprenda a avisar sua família onde você está de forma simples e segura.'
  },
  {
    id: 'seguranca-links',
    title: 'Como identificar um link de golpe',
    url_video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Segurança',
    description: 'Dicas para não clicar em mensagens falsas e proteger seus dados.'
  },
  {
    id: 'gov-br-baixar',
    title: 'Como baixar o app Gov.br',
    url_video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Serviços Públicos',
    description: 'Passo a passo para ter acesso aos serviços do governo no seu celular.'
  },
  {
    id: 'seguranca-senhas',
    title: 'Criando senhas fortes',
    url_video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Segurança',
    description: 'Saiba como criar senhas que ninguém consegue adivinhar.'
  }
];
