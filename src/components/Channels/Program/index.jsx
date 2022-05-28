import React from 'react'
import cx from 'classnames'
import usePresenter from "./hooks/usePresenter"
import { Link } from "react-router-dom"
import styles from './styles.module.css'
import styled from 'styled-components'

/**
 * Creating styled element to add dynamic width
 */
const ProgramStyled = styled.div`
  width: ${props => `${Math.round(props.durationInMinutes * process.env.MINUTE_WIDTH_IN_PX)}px`}
`

const Program = ({ program, currentTime }) => {
  const { programTime, durationInMinutes, isLive, link } = usePresenter({ program, currentTime })

  return (
    <ProgramStyled
      durationInMinutes={durationInMinutes}
      className={cx(styles.program, {
        [styles.active]: isLive
      })}
    >
      <Link to={`/program/${link}`} className={styles.title}>{ program.title }</Link>
      <div className={styles.timeline}>{ programTime }</div>
    </ProgramStyled>
  )
}

export default Program
