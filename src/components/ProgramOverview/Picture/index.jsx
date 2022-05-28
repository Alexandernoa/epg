import React from 'react'
import { IconView } from "~/common-components/Icon"
import styles from './styles.module.css'
import MainDesktopImage from '~/assets/images/programs/dummy_program_id/main_desktop.jpg'
import MainMobileImage from '~/assets/images/programs/dummy_program_id/main_mobile.jpg'
import Play from '~/assets/images/icons/play.svg'

const Picture = ({ title, isLive }) => {
  return (
    <div className={styles.picture}>
      <picture>
        <source srcSet={MainDesktopImage} media="(min-width: 620px)" />
        <img src={MainMobileImage} alt={title} title={title} />
      </picture>

      { isLive && (
        <div className={styles.play}>
          <IconView Icon={Play} />
        </div>
      )}
    </div>
  )
}

export default Picture
