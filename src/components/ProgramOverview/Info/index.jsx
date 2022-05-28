import React from 'react'
import styles from './styles.module.css'
import usePresenter from "./hooks/usePresenter"

const Info = ({ program }) => {
  const { programStart } = usePresenter({ program })
  const { year, genres } = program.meta

  return (
    <div className={styles.info}>
      <div>
        <div className={styles.channel_title}>{ program.channelTitle }</div>
        <div className={styles.time_line}>
          { programStart.time }
          <span>{ programStart.date }</span>
        </div>
      </div>
      <div className={styles.program_title}>{ program.title }</div>
      <div className={styles.meta}>
        <div>{ year }</div>
        { genres.length > 0 && genres.map(genre => <div key={genre}>{genre}</div>) }
      </div>
    </div>
  )
}

export default Info
