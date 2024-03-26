import Tab from '@/components/atoms/Tab';
import { ContainerNullish } from './style';
import ExtractList from '../../organisms/ExtractList';

interface IExtractProps {
  extract: {
    id: number;
    date: string;
    content: {
      id: number;
      type: string;
      title: string;
      subTitle: string;
      price: string;
    }[];
  }[];
  tabs: {
    id: number;
    text: string;
    isActive: boolean;
  }[];
  tabClick: (id: number) => void;
  // onClickTransaction: (e: {
  //   type: string;
  //   name: string;
  //   amount: string;
  //   date: string;
  // }) => void;
  containerClick: (e: string) => void;
}

export default function Extract({
  extract,
  tabs,
  tabClick,
  containerClick,
}) {
  return (
    <>
      <ContainerNullish style={{ marginBottom: `20px` }}>
        {tabs.map((tab) => (
          <Tab
            text={tab.text}
            tabWidth="120px"
            tabClick={() => tabClick(tab.id)}
            isActive={tab.isActive}
            type={2}
            key={tab.id}
          />
        ))}
      </ContainerNullish>
      <ExtractList extract={extract} containerClick={containerClick} />
    </>
  );
}
