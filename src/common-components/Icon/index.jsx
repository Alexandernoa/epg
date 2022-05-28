import React, { memo } from 'react'
import styles from './styles.module.css'

const Component = ({ Icon, ...props }) => {
  if (!Icon) {
    return null
  }

  return <Icon className={ styles.icon } { ...props } />
}

export const IconView = memo(Component)
