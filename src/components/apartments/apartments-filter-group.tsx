import styles from './apartments-filter-group.module.css'

interface FilterGroupProps {
  label: string
  filterName: string
  value: string
  options: string[]
  onClick: (value: string) => void

}

export const FilterGroup = ({ label, filterName, value, options, onClick }: FilterGroupProps) => {
  return (
    <nav className={styles.group} aria-label={`${filterName} filters`}>

      <h3 className={styles.title} id={`${label}-label`}>
        {label}
      </h3>

      <ul className={styles.options} aria-labelledby={`${label} label`}>

        {options.map((option) => (
          <li key={option} className={styles.option}>

            <button
              type='button'
              className={styles.optionButton}
              aria-pressed={value === option}
              onClick={() => onClick(option)}
            >
              {option}
            </button>

          </li>


        ))}
      </ul>


    </nav>
  )
}

