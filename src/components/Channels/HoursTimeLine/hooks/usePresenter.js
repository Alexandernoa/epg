const usePresenter = () => {
  const hours = []
  for (let i = 0; i < 24; i++) {
    const hour = i < 10 ? `0${i}:00` : `${i}:00`
    hours.push(hour)
  }

  return {
    hours
  }
}

export default usePresenter
