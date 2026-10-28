import { ALL } from '../../constants/filters'
import styles from './apartments-filter-group.module.css'

interface FilterGroupProps {
  label: string
  filterName: string
  values: string[]
  options: string[]
  onClick: (value: string) => void

}

export const FilterGroup = ({ label, filterName, values, options, onClick }: FilterGroupProps) => {
  const totalOptions = options.length - 1
  const allSelected = values.length === 0 || values.length === totalOptions
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
              aria-pressed={option === ALL
                ? allSelected
                : !allSelected && values.includes(option)
              }
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

