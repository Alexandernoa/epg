import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectors, fetchEPG } from '~/store/epg'
import { currentTimeInMinutes } from "~/utils/date"

const usePresenter = () => {
  const wrapperRef = useRef()
  const timeLineRef = useRef()

  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [currentTime, setCurrentTime] = useState(() => {
    return currentTimeInMinutes()
  })

  useEffect(() => {
    fetchEPG()
  }, [])

  const epg = useSelector(selectors.getEPG)

  useEffect(() => {
    updateScreenPosition()
    updateTimeLinePosition()

    // update the current time every second to automatically update the position of the timeline
    const updateTimelineInterval = setInterval(() => {
      if (new Date().getSeconds() === 0) {
        setCurrentTime(currentTimeInMinutes)
      }
    }, 1000)

    return () => {
      clearInterval(updateTimelineInterval)
    }
  }, [epg])

  const updateScreenPosition = () => {
    const windowCenter = Math.round((window.innerWidth - 60) / 2)
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = currentTime * process.env.MINUTE_WIDTH_IN_PX - windowCenter
    }
  }

  const updateTimeLinePosition = () => {
    const timeLinePosition = Math.round(window.innerWidth / 2) + 30
    if (timeLineRef.current) {
      timeLineRef.current.style.left = `${timeLinePosition}px`
    }
  }

  const mouseDownHandler = (e) => {
    const pageX = e?.pageX || e?.changedTouches[0].pageX

    setIsDown(true)
    setStartX(pageX - wrapperRef.current?.offsetLeft)
    setScrollLeft(wrapperRef.current?.scrollLeft)

    wrapperRef.current.style.userSelect = 'none'
  }

  const mouseLeaveHandler = () => {
    mouseUpHandler()
  }

  const mouseUpHandler = () => {
    if (isDown) {
      setIsDown(false)
    }

    wrapperRef.current.style.removeProperty('user-select')
  }

  const mouseMoveHandler = (e) => {
    if (!isDown) {
      return
    }

    const pageX = e?.pageX || e?.changedTouches[0].pageX
    const currentX = pageX - wrapperRef.current?.offsetLeft
    const walk = currentX - startX

    wrapperRef.current.scrollLeft = scrollLeft - walk
  }

  return {
    epg,
    wrapperRef,
    timeLineRef,
    currentTime,
    updateScreenPosition,
    mouseDownHandler,
    mouseUpHandler,
    mouseLeaveHandler,
    mouseMoveHandler
  }
}

export default usePresenter
