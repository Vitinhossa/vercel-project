import Header from '../molecules/Header/index';
import DepositoTransferenciaContent from '../organisms/DepositoTransferenciaContent';

export default function DepositoTemplate() {
  return (
    <>
      <Header title="Depósito por Transferencia" justifyContent="flex-start" />
      <DepositoTransferenciaContent />
    </>
  );
}
