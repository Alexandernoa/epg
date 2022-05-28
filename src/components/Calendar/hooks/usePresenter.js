/**
 * Get a list of days in a month
 * @param month
 * @param year
 * @return {*[]}
 */
const getDaysInMonth = (month, year) => {
  let date = new Date(year, month, 1)
  const days = []

  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
}

/**
 * Make an array with days for calendar
 * @return {*[]}
 */
const getDaysList = () => {
  const fullYear = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const fullMonth = month < 10 ? `0${month}` : month

  const daysInMonth = getDaysInMonth(month, fullYear)
  const daysFormatted = []

  daysInMonth.forEach((day) => {
    daysFormatted.push({
      name: day.toLocaleDateString('EN', { weekday: 'short' }),
      date: `${day.getDate()}.${fullMonth}.`
    })
  })

  return daysFormatted
}

const swiperConfig = {
  slidesPerView: 'auto',
  centeredSlides: true,
  slideToClickedSlide: true,
  initialSlide: new Date().getDate() - 1
}

const usePresenter = () => {
  return {
    daysList: getDaysList(),
    swiperConfig
  }
}

export default usePresenter
