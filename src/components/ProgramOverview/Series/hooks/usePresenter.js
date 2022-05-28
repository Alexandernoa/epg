import { useEffect, useState } from 'react'

const usePresenter = ({ series }) => {
  const [activeSeason, setActiveSeason] = useState(0)
  const [episodes, setEpisodes] = useState(series[activeSeason].episodes)

  useEffect(() => {
    setEpisodes(series[activeSeason].episodes)
  }, [activeSeason])

  return {
    episodes,
    activeSeason,
    setActiveSeason
  }
}

export default usePresenter
