import PaginationProps from './Pagination.props';
import styles from './Pagination.module.scss';

const Pagination = ({
  currentPage,
  hasNextPage,
  onPrevPage,
  onNextPage
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Предыдущая
      </button>
      <button onClick={onNextPage} disabled={!hasNextPage}>
        Следующая
      </button>
    </div>
  );
};

export default Pagination;
