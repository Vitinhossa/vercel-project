import { useState, useEffect } from 'react';
import SearchIcon from '@/assets/svg/search';
import { fontSizes, fontWeight } from '@/utils/fonts';
import PaddingContainer from '../atoms/PaddingContainer';
import Header from '../molecules/Header';
import ExtractList from '../organisms/ExtractList';
import { extract_template } from '../../utils/interfaces';
import IconButton from '../atoms/IconButton';
import SearchInput from '../atoms/SearchInput';
import CustomModal from '../molecules/CustomModal';
import FilterModalContent from '../organisms/FilterModalContent';
import BottomMenu from '../organisms/BottomMenu';
import { HeadingTwo } from '../atoms/Text';

export default function RecebimentosTemplate() {
  const [extract, setExtract] = useState([...extract_template]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  useEffect(() => {
    setExtract([...extract_template]);
  }, []);

  return (
    <>
      {filterOpen && (
        <CustomModal
          iconClassName="icon-close"
          title="Filtros"
          onClick={() => setFilterOpen(false)}
        >
          <FilterModalContent />
        </CustomModal>
      )}

      <Header title="Recebimentos" />
      <PaddingContainer padding="30px 20px">
        <PaddingContainer padding="0 20px">
          <HeadingTwo fontSize={fontSizes.small14} fontWeight={fontWeight.bold}>
            Veja todos os seus recebimentos de maneira simples e rápida.
          </HeadingTwo>
        </PaddingContainer>
        <div
          style={{
            position: `absolute`,
            display: `flex`,
            right: `25px`,
            top: `100px`,
          }}
        >
          {searchOpen ? (
            <IconButton
              iconName="icon-close"
              action={() => setSearchOpen(false)}
              width="20px"
              height="15px"
              iconSize="15px"
              margin="4px 0 0 0"
            />
          ) : (
            <>
              <IconButton
                iconComp={SearchIcon}
                action={() => setSearchOpen(true)}
                width="20px"
                margin="0 5px 0 0"
              />
              <IconButton
                iconName="icon-filter"
                action={() => setFilterOpen(true)}
                width="22px"
                iconSize="20px"
              />
            </>
          )}
        </div>

        {searchOpen && (
          <SearchInput
            placeholderText="Buscar"
            margin="-20px 0 20px 0"
            width="90%"
            hasAnim
          />
        )}

        <PaddingContainer padding="30px 0">
          <ExtractList extract={extract} />
        </PaddingContainer>
      </PaddingContainer>
      <BottomMenu />
    </>
  );
}
