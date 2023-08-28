import {  Box ,  Image,  } from '@chakra-ui/react'
 import React from 'react'
 import img1 from "../../assets/1.png"
 import "@fontsource/poppins";
 import ProfilePage from './ProfilePage';
 
 
 
 
 
 
 const HackerProfilePage = () => {
   
   
 
 
   
 
 
   return (
     
     <Box>
        
          <Box w="full" h={'full'}>
                  <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
                  <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
                  <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>

                       <ProfilePage></ProfilePage>
                 
                 
         </Box>
        
               
               
 
    </Box>
     
   )
   }
 
 
 
 
 
 export default HackerProfilePage