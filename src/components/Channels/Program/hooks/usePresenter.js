import { useMemo, useState } from 'react'
import { getProgramTime, getTimeInMinutes, getDurationInMinutes } from "~/utils/date"

const usePresenter = ({ program, currentTime }) => {
  const [isLive, setIsLive] = useState(false)
  const link = isLive ? 'program_live_id' : program.id

  const durationInMinutes = useMemo(() => {
    return getDurationInMinutes(program.start, program.end)
  }, [program])

  const programTime = useMemo(() => {
    const { start, end } = getTimeInMinutes(program.start, program.end)

    if (start <= currentTime && end > currentTime) {
      setIsLive(true)
    }

    return getProgramTime(program.start, program.end)
  }, [program])

  return {
    durationInMinutes,
    programTime,
    isLive,
    link
  }
}

export default usePresenter
