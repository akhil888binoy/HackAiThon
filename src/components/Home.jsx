import { Box } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.png"
import "@fontsource/poppins";
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { useEffect , useState} from 'react';
import { ScaleFade } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'







const headingOptions={
    position : "absolute",
    left : "40%",
    top : "30%",
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}


const theme = {
    fonts: {
      body: 'Poppins',
      heading: 'Poppins, sans-sarif',
    },
  };


const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  

    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const [showText, setShowText] = React.useState(true);

  


  return (
    
    <Box>
       
         <Box w="full" h={'full'}>
                 <Image src={img1} h="100vh" w={'full'} objectFit={'cover'}/>
                 <ChakraProvider theme={theme}>
                 <Heading  textColor={"white"}  fontSize={"40px"} {...headingOptions} fontFamily={"heading"}> Welcome to 
                      <Text color={"#c961de"} fontSize={"100px"} > Hack AI Thon</Text> 
                      Code, Collaborate, Conquer 
                </Heading> 

                </ChakraProvider>
                
        </Box>
    <Container>
        <Stack>

        </Stack>
    </Container>

    </Box>
    
  )
  }





export default Home