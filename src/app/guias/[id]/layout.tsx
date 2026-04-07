import { Metadata } from 'next';
import { GUIDES } from "@/data/contents";

interface GuideLayoutProps {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: GuideLayoutProps): Promise<Metadata> {
  const { id } = await params;
  const guide = GUIDES.find(g => g.id === id);

  return {
    title: guide ? `${guide.title} | Guia do Idoso` : 'Guia de Inclusão Digital',
    description: guide?.description || 'Aprenda o passo a passo de como usar seu celular com facilidade.',
  };
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
