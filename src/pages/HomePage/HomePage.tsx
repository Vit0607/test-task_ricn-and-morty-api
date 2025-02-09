import { useGetCharactersQuery } from '@/store/api.slice';
import { useState } from 'react';
import Search from 'components/Search/Search';
import Pagination from 'components/Pagination/Pagination';
import CharactersList from 'components/CharactersList/CharactersList';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const { data, error, isLoading } = useGetCharactersQuery({ page, name });

  const results = data?.results;

  const handleSearchChange = (newName: string) => {
    setName(newName);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setPage(prev => Math.max(prev - 1, 1));
  };

  if (isLoading) return <h2 className={styles.loader}>Загрузка...</h2>;
  if (error)
    return <h2 className={styles.error}>Ошибка при загружке персонажей!</h2>;
  if (!results)
    return <h2 className={styles.undefined}>Персонажи не найдены!</h2>;

  return (
    <div>
      <h1>
        Персонажи
        <br />
        The Rick and Morty
      </h1>
      <Search value={name} onChange={handleSearchChange} />
      <CharactersList characters={results} />
      <Pagination
        currentPage={page}
        hasNextPage={!!data?.info.next}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default HomePage;
