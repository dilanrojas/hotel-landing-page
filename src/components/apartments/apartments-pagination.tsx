import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./apartments-pagination.module.css"

interface PaginationProps {
  currentPage: number,
  totalPages: number,
  pages: number[]
  onPrevious: () => void,
  onNext: () => void,
  onPageChange: (currentPage: number) => void;

}
export const Pagination = ({ currentPage, totalPages, pages, onPrevious, onNext, onPageChange }: PaginationProps) => {
  return (
    <nav aria-label="Pagination" className={styles.nav}>
      <button
        type="button"
        aria-label="Previous page"
        onClick={onPrevious}
        disabled={currentPage <= 1}
      >
        <ChevronLeft size={16} strokeWidth={2}></ChevronLeft>
      </button>

      <ul className={styles.navList} >
        {pages.map(page => (
          <li key={page}>
            <button
              className={styles.navButton}
              type="button"
              aria-current={page === currentPage ? 'page' : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Previous page"
        onClick={onNext}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight size={16} strokeWidth={2}></ChevronRight>
      </button>




    </nav>
  )
}

