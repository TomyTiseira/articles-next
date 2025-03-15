import React from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './searchbar.module.css';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export const Searchbar = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        type='text'
        placeholder='Buscar...'
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <IoSearch className={styles.searchIcon}/>
    </div>
  );
};




