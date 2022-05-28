import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconView } from '~/common-components/Icon'
import usePresenter from "./hooks/usePresenter"
import styles from './styles.module.css'

const BottomMenu = () => {
  const { navList, activeClassName } = usePresenter()

  return (
    <footer className={styles.menu}>
      { navList.map((item) => (
        <NavLink to={item.link} className={activeClassName} key={item.link}>
          <IconView Icon={item.icon} />
        </NavLink>
      )) }
    </footer>
  )
}

export default BottomMenu
