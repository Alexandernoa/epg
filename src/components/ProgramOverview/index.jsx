import React from 'react'
import Picture from './Picture'
import Info from "./Info"
import Description from "./Description"
import Cast from "./Cast"
import Creators from "./Creators"
import Series from "./Series"
import usePresenter from './hooks/usePresenter'
import styles from './styles.module.css'

const ProgramOverview = ({ programId }) => {
  const { program, isLive, cast, creators } = usePresenter({ programId })

  if (!program) {
    return
  }

  return (
    <div className={styles.program}>
      <Picture
        title={program.title}
        isLive={isLive}
      />

      { isLive && <div className={styles.live_status}>live</div> }

      <div className={styles.content}>
        <Info program={program} />

        { program.description && <Description description={program.description} /> }

        { cast.length > 0 && <Cast cast={cast} /> }

        { creators.length > 0 &&  <Creators creators={creators} /> }

        { program.series.length > 0 && <Series series={program.series} /> }
      </div>
    </div>
  )
}

export default ProgramOverview
