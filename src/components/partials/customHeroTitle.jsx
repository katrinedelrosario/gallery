import React from 'react'
import { HeroTitle, LeftHalf, RightHalf } from './hero.styled'

const CustomHeroTitle = ({ title }) => {

  if (typeof title !== 'string' || !title) {
    return null 
  }
 
  const titleParts = title.split('  ')
  

  if (titleParts.length !== 2) {
    return null
  }

  return (
    <HeroTitle>
      <LeftHalf>{titleParts[0]}</LeftHalf>
      <RightHalf>{titleParts[1]}</RightHalf>
    </HeroTitle>
  )
}



export default CustomHeroTitle