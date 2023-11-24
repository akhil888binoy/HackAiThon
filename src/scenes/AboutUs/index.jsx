import React from 'react'
import img1 from "../../assets/1.png"
import { Box, Image } from '@chakra-ui/react'
import AboutUsPage from './AboutUsPage'
const AboutUs = () => {
  return (
    <Box w="full" h={'full'}>
    <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
    <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
     <AboutUsPage></AboutUsPage>
         
   
   
</Box>
  )
}

export default AboutUs