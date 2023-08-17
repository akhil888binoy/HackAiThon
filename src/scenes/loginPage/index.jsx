import { Avatar, Box , 
    ChakraProvider, 
    Center, Image, 
    Heading, Container,  
    Stack, useMediaQuery, 
    Card, CardHeader, 
    CardBody, CardFooter,  
    Text , Button , 
    Divider, HStack, 
    VStack, ButtonGroup } from '@chakra-ui/react'
 import React from 'react'
 import img1 from "../../assets/1.png"
 import "@fontsource/poppins";
 import Form from "./Form.jsx";
 
 
 
 
 
 
 const LoginPage = () => {
   
   
 
 
   
 
 
   return (
     
     <Box>
        
          <Box w="full" h={'full'}>
                  <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
                   <Form ></Form>
                       
                 
                 
         </Box>
        
               
               
 
    </Box>
     
   )
   }
 
 
 
 
 
 export default LoginPage