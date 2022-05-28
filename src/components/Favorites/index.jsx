import React from 'react'
import { IconView } from "~/common-components/Icon"
import styles from './styles.module.css'
import Star from '~/assets/images/icons/star.svg'

const Favorites = () => {
  const clickHandler = () => {
    alert('No animations or other features...')
  }

  return (
    <div className={styles.star} onClick={clickHandler}>
      <IconView Icon={Star} />
    </div>
  )
}

export default Favorites
