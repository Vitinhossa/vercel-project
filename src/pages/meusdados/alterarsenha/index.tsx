/* eslint-disable react-hooks/exhaustive-deps */
import ContentContainer from '@/components/atoms/ContentContainer';

import AtivarCartaoTemplate from '@/components/templates/alterarsenhaTemplate';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CartoesRouter() {
  const router = useRouter();
  const { type } = router.query;

  const paramError = () => router.push(`/cartoes`);


      return (
        <ContentContainer>
          <AtivarCartaoTemplate />
        </ContentContainer>
      );


}
