import React, {useState, useEffect} from 'react'
import { FooterContainer, FooterText } from './footer.styled'
import { client } from '../../client'

const Footer = () => {
  
    const [data, setData] = useState({})
  
  
    useEffect(() => {
      client.getEntries({ content_type: 'homepage' })
        .then((response) => {
          if (response.items.length > 0) {
            const footer = response.items[0].fields.pageFooter
            setData(footer)
          } else {
            console.error('no items found in Contentful response.')
          }
        })
        .catch((error) => {
          console.error('error fetching footerdata from contentful:', error)
        })
    }, [])

      return (
        <FooterContainer>
          <FooterText>{data}</FooterText>
        </FooterContainer>
      )
    }
  
  export default Footer