import React from 'react'
import styles from './styles.module.css'

const Cast = ({ cast }) => {
  return (
    <div className={styles.cast}>
      Cast:{ cast }
    </div>
  )
}

export default Cast
