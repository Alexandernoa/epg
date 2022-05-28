import React from 'react'
import usePresenter from "./hooks/usePresenter"
import styles from './styles.module.css'

const Description = ({ description }) => {
  const {
    isDescriptionAnimated,
    animatedDescription,
    showFullDescription,
    toggleDescription
  } = usePresenter({ description })

  return (
    <div className={styles.description}>
      { !isDescriptionAnimated && description }
      { isDescriptionAnimated && (
        <div>
          { animatedDescription.firstPart }
          { showFullDescription ? animatedDescription.secondPart : '...' }
          <span className={styles.toggle} onClick={toggleDescription}>
            { showFullDescription ? 'less' : 'more' }
          </span>
        </div>
      )}
    </div>
  )
}

export default Description
