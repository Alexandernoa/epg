import stylesIcon from '~/common-components/Icon/styles.module.css'
import Home from '~/assets/images/icons/home.svg'
import TV from '~/assets/images/icons/tv.svg'
import Epg from '~/assets/images/icons/epg.svg'
import Replay from '~/assets/images/icons/replay.svg'
import Book from '~/assets/images/icons/book.svg'

const usePresenter = () => {
  const navList = [
    { link: '/home', icon: Home },
    { link: '/tv', icon: TV },
    { link: '/', icon: Epg },
    { link: '/replay', icon: Replay },
    { link: '/book', icon: Book }
  ]

  const activeClassName = ({ isActive }) => isActive ? stylesIcon.active : ''

  return {
    navList,
    activeClassName
  }
}

export default usePresenter
