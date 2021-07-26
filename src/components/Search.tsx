import React, { FC } from 'react';
import TextInput from './shared/text-input';
import styles from '@styles/Search.module.css';

type Props = {
  searchText: string,
  onSearchTextChange: (any)=>void,
  onLanguageChange: (any)=>void,
}

const Search: FC<Props> = (props) => {
  const { searchText, onSearchTextChange } = props;


  return (
    <div className={styles.search}>
      <TextInput
        className={styles.searchInput}
        value={searchText}
        placeholder="Search repo..."
        onChange={(value) => onSearchTextChange(value)}
      />
 
    </div>
  );
};

export default Search;
