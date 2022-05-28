import React from 'react'
import usePresenter from "./hooks/usePresenter"
import HoursTimeLine from "./HoursTimeLine"
import Program from "./Program"
import styles from './styles.module.css'

const Channels = () => {
  const {
    epg,
    wrapperRef,
    timeLineRef,
    currentTime,
    updateScreenPosition,
    mouseDownHandler,
    mouseUpHandler,
    mouseLeaveHandler,
    mouseMoveHandler
  } = usePresenter()

  if (!epg.length) {
    return
  }

  return (
    <div className={styles.channels}>
      <div className={styles.logo}>
        { epg.map((channel) => (
          <div key={`${channel.id}_title`}>{ channel.title }</div>
        )) }
      </div>

      <div className={styles.channel__schedule}
           ref={wrapperRef}
           onMouseDown={mouseDownHandler}
           onMouseUp={mouseUpHandler}
           onMouseLeave={mouseLeaveHandler}
           onMouseMove={mouseMoveHandler}
           onTouchStart={mouseDownHandler}
           onTouchEnd={mouseUpHandler}
           onTouchMove={mouseMoveHandler}
      >
        <HoursTimeLine />

        { epg.map((channel) => (
          <div className={styles.programs} key={channel.id}>
            { channel?.schedules.map((program) => (
              <Program
                program={program}
                currentTime={currentTime}
                key={`${program.title}_${program.start}`}
              />
            )) }
          </div>
        )) }
      </div>

      <div className={styles.timeline} ref={timeLineRef} />
      <div className={styles.now_handler} onClick={updateScreenPosition}>now</div>
    </div>
  )
}

export default Channels
