import PixRegistrarChavesTemplate from '@/components/templates/pixregistrarchavesTemplate';
import ContentContainer from '@/components/atoms/ContentContainer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Registrar() {
  const [selectedType, setSelectedType] = useState<string>(``);
  const router = useRouter();
  const { type } = router.query;

  const paramError = () => router.push(`/pix`);

  useEffect(() => {
    if (type) {
      setSelectedType(type.toString());

      if (type !== `email` && type !== `celular` && type !== `cpf` && type !== `cnpj` && type !== `aleatoria`) {
        paramError();
      }
    }
  }, [type]);
  return (
    <ContentContainer>
      <PixRegistrarChavesTemplate pageType={selectedType} />
    </ContentContainer>
  );
}
