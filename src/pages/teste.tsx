/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { ModalRelease } from '@/components/organisms/ModalRelease';

const Teste = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>open</button>
      <ModalRelease
        visible={openModal}
        onSave={() => setOpenModal(false)}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Teste;
