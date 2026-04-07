import { Metadata } from 'next';

interface CategoryLayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: CategoryLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  
  const categoryLabels: Record<string, string> = {
    'basico': 'Módulo Básico',
    'whatsapp': 'Módulo WhatsApp',
    'seguranca': 'Segurança Digital',
    'social-financas': 'Social & Finanças'
  };

  const label = categoryLabels[slug] || 'Vídeos';

  return {
    title: `${label} | Inclusão Digital`,
    description: `Aprenda tudo sobre ${label.toLowerCase()} com nossos vídeos simples e práticos para idosos.`,
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
