import { Search } from 'lucide-react';
import Input from '../ui/input.tsx';
import styles from './apartments-search-bar.module.css';

interface SearchBarProps {
  value: string,
  placeholder?: string,
  handleOnChange: (value: string) => void;
}


export default function SearchBar({ value, handleOnChange, placeholder }: SearchBarProps) {
  return (
    <div className={styles.searchBar} role='search'>

      <Search
        size={18}
        strokeWidth={2}
        aria-hidden='true'
        className={styles.icon}

      />
      <Input
        type='search'
        aria-label='Search Apartments'
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        autoComplete='off'
        spellCheck={false}
      />


    </div>





  )
}

