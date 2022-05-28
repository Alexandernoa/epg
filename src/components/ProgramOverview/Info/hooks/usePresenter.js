import { useMemo } from 'react'
import { getProgramTime, getProgramDate } from "~/utils/date"

const usePresenter = ({ program }) => {
  const programStart = useMemo(() => {
    return {
      time: getProgramTime(program.start, program.end),
      date: getProgramDate(program.start)
    }
  }, [program])

  return {
    programStart
  }
}

export default usePresenter
