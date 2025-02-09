import CharacterCardProps from './CharacterCard.props';
import styles from './CharacterCard.module.scss';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  favoritesActions,
  selectFavoritesItems
} from '@/store/favorites.slice';
import React from 'react';
import { AppDispatch } from '@/store/store';
import { useLocation } from 'react-router';
import { toast } from 'sonner';

const CharacterCard = ({ character }: CharacterCardProps) => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/character/');
  const dispatch = useDispatch<AppDispatch>();
  const favoritesItems = useSelector(selectFavoritesItems);
  const isFavoritesPage = location.pathname === '/favorites';

  const data = character;

  const { id, name } = character;

  const isFavorite = favoritesItems.find(i => i.id === id);

  const remove = () => {
    dispatch(favoritesActions.delete(id));
    toast.warning('Персонаж удалён из избранного!');
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(favoritesActions.delete(id));
      toast.warning('Персонаж удалён из избранного!');
    } else {
      dispatch(favoritesActions.add(data));
      toast.success('Персонаж добавлен в избранное!');
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavoritesPage && isFavorite) {
      remove();
    } else {
      toggleFavorite();
    }
  };

  const cardContent = (
    <div className={styles.card}>
      <img src={character.image} alt={name} />
      <div className={styles.name}>{name}</div>

      {isDetailPage && (
        <div className={styles.status}>
          <span
            className={
              character.status === 'Alive' ? styles.alive : styles.dead
            }
          >
            {character.status}
          </span>
        </div>
      )}

      <button
        onClick={handleButtonClick}
        className={isFavorite ? styles.favorite : styles.notFavorite}
      >
        {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );

  return (
    <>
      {isDetailPage ? (
        <div className={styles.cardWrapper}>{cardContent}</div>
      ) : (
        <Link to={`/character/${id}`} className={styles.link}>
          {cardContent}
        </Link>
      )}
    </>
  );
};

export default CharacterCard;
