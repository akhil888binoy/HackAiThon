import React from 'react'
import img1 from "../../../assets/1.png"
import { Box, Image } from '@chakra-ui/react'
import ProjectDetailPage from './ProjectDetailPage'
const ProjectDetail = () => {
  return (
    <Box w="full" h={'full'}>
    <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
    <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
     <ProjectDetailPage></ProjectDetailPage>
         
   
   
</Box>
  )
}

export default ProjectDetail