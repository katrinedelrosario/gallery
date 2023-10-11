import React, {useState, useEffect} from 'react'
import {client}  from '../../client.js'
import { Description, HeroContainer, HeroImage } from './hero.styled.js'
import CustomHeroTitle from './customHeroTitle.jsx'
import {doctumentToReactComponents} from '@contentful/rich-text-react-renderer'

const Hero = () => {


  const [data, setData] = useState({})
  
  useEffect(() => {
    client.getEntries({ content_type: 'homepage' })
      .then((response) => {
        if (response.items.length > 0) {
          const image = response.items[0].fields.heroImage.file.url
          const title = response.items[0].fields.heroTitle
          const description = response.items[0].fields.heroDescription

          setData({image, title, description})
        } else {
          console.error('no items found in contentful response.')
        }
      })
      .catch((error) => {
        console.error('error fetching herodata from contentful:', error)
      })
  }, [])


  return (
    <HeroContainer>
      <HeroImage src= {data.image} alt="heroimage"/>
      <CustomHeroTitle title = {data.title} />
      <Description>{data.description}</Description>
    </HeroContainer>
  )
}

export default Hero
