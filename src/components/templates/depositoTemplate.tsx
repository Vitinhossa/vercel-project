import Header from '../molecules/Header/index';
import DepositoContent from '../organisms/DepositoContent';

export default function DepositoTemplate() {
  return (
    <>
      <Header title="Depósito" justifyContent="flex-start" />
      <DepositoContent />
    </>
  );
}
