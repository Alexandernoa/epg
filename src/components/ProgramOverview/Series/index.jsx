import React from 'react'
import cx from 'classnames'
import usePresenter from './hooks/usePresenter'
import { IconView } from '~/common-components/Icon'
import styles from './styles.module.css'
import PlayEpisode from '~/assets/images/icons/play_episode.svg'

const Series = ({ series }) => {
  const { episodes, activeSeason, setActiveSeason } = usePresenter({ series })

  return (
    <div className={styles.series}>
      <div className={styles.tabs}>
        { series.map((season, index) => (
          <div
            key={season.title}
            onClick={() => setActiveSeason(index)}
            className={cx({
              [styles.active]: activeSeason === index
            })}
          >
            { season.title }
          </div>
        )) }
      </div>

      <div className={styles.episodes}>
        { episodes.length > 0 && episodes.map((episode) => (
          <div key={`${episode.title}`}>
            <div>{episode.title}</div>
            <IconView Icon={PlayEpisode} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Series
