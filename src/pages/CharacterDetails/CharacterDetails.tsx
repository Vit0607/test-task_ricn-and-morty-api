import { useGetCharacterByIdQuery } from '@/store/api.slice';
import { Link, useParams } from 'react-router';
import styles from './CharacterDetails.module.scss';
import CharacterCard from 'components/CharacterCard/CharacterCard';

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetCharacterByIdQuery(Number(id));

  const character = data;

  console.log('data: ', data);
  console.log('character: ', data);

  if (isLoading) return <h2 className={styles.loader}>Загрузка...</h2>;
  if (error)
    return <h2 className={styles.error}>Ошибка при загружке персонажа!</h2>;

  if (!character) {
    return <h2>Персонаж не найден</h2>;
  }

  const { status, species, gender, origin, location, episode } = character;

  return (
    <>
      <h1>Детальная страница персонажа</h1>
      <Link to={'/'} className={styles.link}>
        Вернуться на главную страницу
      </Link>
      <div className={styles.detailContent}>
        <div className={styles.cardContainer}>
          <CharacterCard character={character} />
        </div>
        <div className={styles.detailInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Статус:</span>
            <span className={styles.infoValue}>{status}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Раса:</span>
            <span className={styles.infoValue}>{species}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Пол:</span>
            <span className={styles.infoValue}>{gender}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Происхождение:</span>
            <span className={styles.infoValue}>{origin?.name}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Локация:</span>
            <span className={styles.infoValue}>{location?.name}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Появился в эпизодах:</span>
            <span className={styles.infoValue}>{episode?.length || 0}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
