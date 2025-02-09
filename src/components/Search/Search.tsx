import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

const Search = ({ value, onChange }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      className={styles.search}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Search;
