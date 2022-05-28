import React from 'react'
import styles from './styles.module.css'

const Creators = ({ creators }) => {
  return (
    <div className={styles.creators}>
      Creators: { creators }
    </div>
  )
}

export default Creators
