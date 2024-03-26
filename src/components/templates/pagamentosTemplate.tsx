import Header from '../molecules/Header/index';
import Pagamentos from '../molecules/Pagamentos';

export default function PagamentosTemplate() {
  return (
    <>
      <Header title="Pagamentos" justifyContent="flex-start" />
      <Pagamentos type="cards" />
    </>
  );
}
