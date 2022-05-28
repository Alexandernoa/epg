export const getTimeWithZeroes = (time) => {
  return time < 10 ? `0${time}` : time
}

export const getProgramDate = (start) => {
  return new Date(start).toLocaleString('en-TT', { day: 'numeric', month:'short' })
}

export const currentTimeInMinutes = () => {
  return new Date().getHours() * 60 + new Date().getMinutes()
}

export const getProgramTime = (start, end) => {
  const startDate = new Date(start)
  const startHour = getTimeWithZeroes(startDate.getHours())
  const startMinute = getTimeWithZeroes(startDate.getMinutes())

  const endDate = new Date(end)
  const endHour = getTimeWithZeroes(endDate.getHours())
  const endMinute = getTimeWithZeroes(endDate.getMinutes())

  return `${startHour}:${startMinute} - ${endHour}:${endMinute}`
}

export const getTimeInMinutes = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  return {
    start: startDate.getHours() * 60 + startDate.getMinutes(),
    end: endDate.getHours() * 60 + endDate.getMinutes()
  }
}

export const getDurationInMinutes = (start, end) => {
  const duration = new Date(end).valueOf() - new Date(start).valueOf()

  return duration / 60 / 1000
}
