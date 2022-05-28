import React from 'react'
import usePresenter from "./hooks/usePresenter"
import styles from './styles.module.css'
import styled from 'styled-components'

/**
 * Creating styled element to add dynamic width
 */
const Hour = styled.div`
  width: ${60 * process.env.MINUTE_WIDTH_IN_PX}px;
`

const HoursTimeLine = () => {
  const { hours } = usePresenter()

  return (
    <div className={styles.hours}>
      { hours.map((hour) => (
        <Hour className={styles.hour} key={hour}>
          <div>{ hour }</div>
        </Hour>
      )) }
    </div>
  )
}

export default HoursTimeLine
