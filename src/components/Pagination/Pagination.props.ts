interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export default PaginationProps;
