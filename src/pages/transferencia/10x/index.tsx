// src/pages/transferencia/10x/index.tsx
import React from 'react';
import ContentContainer from '@/components/atoms/ContentContainer';
// Importa o template de transferência usando o alias @
import Transferencia10xTemplate from '@/components/templates/transferencia10xTemplate';

export default function Transferencia10x() {
  return (
    <ContentContainer>
      {/* Utiliza o template importado no seu componente */}
      <Transferencia10xTemplate />
    </ContentContainer>
  );
}
