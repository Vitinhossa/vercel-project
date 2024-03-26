import Header from '../molecules/Header/index';
import Pagamentos from '../molecules/Pagamentos';

export default function PagamentosQrTemplate() {
  return (
    <>
      <Header title="Leitor de QR Code" justifyContent="flex-start" />
      <Pagamentos type="qrcode" />
    </>
  );
}
