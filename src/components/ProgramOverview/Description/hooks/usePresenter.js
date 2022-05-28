import { useState } from 'react'

const usePresenter = ({ description }) => {
  const sliceLimit = 200
  const isDescriptionAnimated = description.length > sliceLimit

  const animatedDescription = isDescriptionAnimated ? {
    firstPart: description.slice(0, sliceLimit),
    secondPart: description.slice(sliceLimit, description.length)
  } : null

  const [showFullDescription, setShowFullDescription] = useState(false)

  const toggleDescription = () => {
    setShowFullDescription((prevState => !prevState))
  }

  return {
    isDescriptionAnimated,
    animatedDescription,
    showFullDescription,
    toggleDescription
  }
}

export default usePresenter
