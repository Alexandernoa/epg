import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectors, fetchProgram } from '~/store/programs'
import { currentTimeInMinutes, getTimeInMinutes } from "~/utils/date"

const usePresenter = ({ programId }) => {
  useEffect(() => {
    fetchProgram(programId)
  }, [])

  const program = useSelector((state) => selectors.getProgram(state, programId))
  const [isLive, setIsLive] = useState(false)

  /**
   * Check if a program is active
   * I don't use "useEffect", because it`s unnecessary operations for us
   */
  if (program && !isLive) {
    const currentTime = currentTimeInMinutes()
    const { start, end } = getTimeInMinutes(program.start, program.end)

    if (start <= currentTime && end > currentTime) {
      setIsLive(true)
    }
  }

  const cast = program?.meta.cast.map(actor => actor.name).join(', ')
  const creators = program?.meta.creators.map(creator => creator.name).join(', ')

  return {
    program,
    isLive,
    cast,
    creators
  }
}

export default usePresenter
