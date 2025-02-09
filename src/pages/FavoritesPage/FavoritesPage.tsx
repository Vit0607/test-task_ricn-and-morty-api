import { selectFavoritesItems } from '@/store/favorites.slice';
import { useSelector } from 'react-redux';
import styles from './FavoritesPage.module.scss';
import CharactersList from 'components/CharactersList/CharactersList';
import { Link } from 'react-router';

const FavoritesPage = () => {
  const items = useSelector(selectFavoritesItems);

  return !items.length ? (
    <div className={styles['empty-text']}>
      <h2>Список избранных пуст. Добавьте персонажей с главной страницы!</h2>
      <Link to={'/'} className={styles.link}>
        <button>Вернуться на главную страницу</button>
      </Link>
    </div>
  ) : (
    <div>
      <h1>Избранные персонажи</h1>
      <CharactersList characters={items} />
    </div>
  );
};

export default FavoritesPage;
