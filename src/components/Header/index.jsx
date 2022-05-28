import React from 'react'
import { useNavigate, useMatch } from "react-router-dom"
import styles from './styles.module.css'
import { IconView } from "~/common-components/Icon"
import BackTo from '~/assets/images/icons/back.svg'
import UserProfile from '~/assets/images/icons/user-profile.svg'
import Search from '~/assets/images/icons/search.svg'

const Header = () => {
  const isIndex = useMatch('/')
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.left_icon}>
        { isIndex && <IconView Icon={UserProfile} /> }
        { !isIndex && <IconView Icon={BackTo} onClick={() => navigate(-1)} /> }
      </div>
      <div className={styles.right_icon}>
        <IconView Icon={Search} />
      </div>
    </header>
  )
}

export default Header
