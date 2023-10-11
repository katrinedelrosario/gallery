import styled from "styled-components"

export const HeroContainer = styled.div`
  position: relative;
  max-width: 100%; 
`


export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.8;
  filter: brightness(50%);
`

export const HeroTitle = styled.h1`
  position: absolute;
  top: 10%; 
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  font-size: 5em;
  //color: #FFFDFA;
  color: #98d7f6;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-family: 'Passion One', sans-serif;
`
export const LeftHalf = styled.span`
  position: absolute;
  top: 0;
  left: 4%;
  width: 50%;
  text-align: left;
`

export const RightHalf = styled.span`
  position: absolute;
  top: 0;
  right: 4%;
  width: 50%;
  text-align: right;
`

export const Description = styled.p`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  margin: 0;
`