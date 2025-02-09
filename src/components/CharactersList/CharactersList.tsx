import styles from './CharactersList.module.scss';
import { CharacterType } from 'types/characters';
import CharactersListProps from './CharactersList.props';
import CharacterCard from 'components/CharacterCard/CharacterCard';

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <div>
      <div className={styles.list}>
        {characters.map((character: CharacterType) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
