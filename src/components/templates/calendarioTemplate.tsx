import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import BottomMenu from '../organisms/BottomMenu';

export default function CalendarioTemplate() {
  return (
    <>
      <Header title="Calendário Financeiro" />
      <PaddingContainer padding="0" minHeight="calc(100vh - 122px)" />
      <BottomMenu />
    </>
  );
}
