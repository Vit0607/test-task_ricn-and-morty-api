import HeartIcon from 'assets/icons/heart-icon.svg?react';
import styles from './FavoritesLink.module.scss';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { selectFavoritesItems } from '@/store/favorites.slice';
import cn from 'classnames';
import { useEffect, useState } from 'react';

const FavoritesLink = () => {
  const [favoritesCount, setFavoritesCount] = useState<number>();
  const favoritesItems = useSelector(selectFavoritesItems);
  const count = favoritesItems.length;

  useEffect(() => {
    setFavoritesCount(count);
  }, [favoritesItems]);

  console.log(`favoritesItems: ${favoritesItems}`);
  console.log(`favoritesCount: ${favoritesCount}`);

  return (
    <Link to={'/favorites'} className={styles['favorites-link']}>
      <span
        className={cn(styles['badge'], {
          [styles['invisible']]: favoritesCount === 0
        })}
      >
        {favoritesCount}
      </span>
      <HeartIcon
        className={cn(styles['heart-icon'], {
          [styles['active']]: favoritesCount !== 0
        })}
      />
    </Link>
  );
};

export default FavoritesLink;
