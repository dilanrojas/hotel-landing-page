import styles from './apartments-filter-price.module.css'
import type { PriceRange } from "../../types/filters"
import { useEffect, useId, useState, type KeyboardEvent } from 'react'

interface FilterPriceProps {
  price: PriceRange,
  priceBounds: { min: number, max: number },
  onChange: (price: PriceRange) => void
}

const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') e.currentTarget.blur()
}

const toDraft = (value: number | null) => (value === null ? '' : String(value))
const toNumber = (draft: string) => (draft === '' ? null : Number(draft))
const onlyDigits = (value: string) => value.replace(/\D/g, '')



export const FilterPrice = ({ price, priceBounds, onChange }: FilterPriceProps) => {

  const id = useId()
  const [minDraft, setMinDraft] = useState<string>(toDraft(price.min))
  const [maxDraft, setMaxDraft] = useState<string>(toDraft(price.max))

  useEffect(() => {
    setMinDraft(toDraft(price.min))
    setMaxDraft(toDraft(price.max))
  }, [price])



  const applyDrafts = () => {
    const next = { min: toNumber(minDraft), max: toNumber(maxDraft) }
    if (next.min === price.min && next.max === price.max) return
    onChange(next)
  }


  return (

    <div className={styles.filterPrice} role='group' aria-labelledby={`${id}-label`}>
      <h3 className={styles.title} id={`${id}-label`}>PRICE PER NIGHT</h3>

      <div className={styles.fields}>

        <label className={styles.field}>
          <span className={styles.fieldLabel} aria-hidden='true'>MIN</span>
          <span className={styles.currency} aria-hidden='true'>$</span>
          <input
            className={styles.input}
            type='text'
            autoComplete='off'
            inputMode='numeric'
            value={minDraft}
            placeholder={String(priceBounds.min)}
            onChange={(e) => setMinDraft(onlyDigits(e.currentTarget.value))}
            onBlur={applyDrafts}
            onKeyDown={handleKeyDown}
            aria-label='Minimum price'
          />
        </label>


        <span className={styles.separator} aria-hidden='true'>—</span>


        <label className={styles.field}>
          <span className={styles.fieldLabel} aria-hidden='true'>MAX</span>
          <span className={styles.currency} aria-hidden='true'>$</span>

          <input
            className={styles.input}
            autoComplete='off'
            type='text'
            inputMode='numeric'
            value={maxDraft}
            placeholder={String(priceBounds.max)}
            onChange={(e) => setMaxDraft(onlyDigits(e.currentTarget.value))}
            onBlur={applyDrafts}
            onKeyDown={handleKeyDown}
            aria-label='Maximum price'
          />
        </label>

      </div>
    </div >

  )
}

