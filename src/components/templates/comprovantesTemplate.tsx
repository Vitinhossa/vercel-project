import { useState, useEffect } from 'react';
import SearchIcon from '@/assets/svg/search';
import PaddingContainer from '../atoms/PaddingContainer';
import Header from '../molecules/Header';
import ExtractList from '../organisms/ExtractList';
import { extract_template } from '../../utils/interfaces';
import IconButton from '../atoms/IconButton';
import SearchInput from '../atoms/SearchInput';
import CustomModal from '../molecules/CustomModal';
import FilterModalContent from '../organisms/FilterModalContent';

export default function ComprovantesTemplate() {
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
      <Header title="Comprovantes" />
      <PaddingContainer padding="30px 20px">
        <div
          style={{
            position: `absolute`,
            display: `flex`,
            right: `25px`,
            top: `20px`,
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

        <ExtractList extract={extract} />
      </PaddingContainer>
    </>
  );
}
