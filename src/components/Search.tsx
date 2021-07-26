import React, { FC } from 'react';
import TextInput from './shared/text-input';
import Select from './shared/select';
import LANGUAGES from '@src/config/languages';
import styles from '@styles/Search.module.css';

type Props = {
  language: any,
  searchText: string,
  onSearchTextChange: (any)=>void,
  onLanguageChange: (any)=>void,
}

const Search: FC<Props> = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: '', label: 'All' }, ...LANGUAGES];

  return (
    <div className={styles.search}>
      <TextInput
        className={styles.searchInput}
        label="Repo Search"
        value={searchText}
        placeholder="Search repo..."
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        className={styles.languageSelect}
        label="Language"
        value={language}
        options={languages}
        placeholder="Select Language..."
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  );
};

export default Search;
