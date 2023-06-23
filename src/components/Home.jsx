import { Avatar, Box } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.png"
import img3 from "../assets/3.png"
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
import { HStack, VStack } from '@chakra-ui/react';
import { useEffect , useState} from 'react';
import { ScaleFade } from '@chakra-ui/react';
import { ChakraProvider, Center } from '@chakra-ui/react';
import img2 from "../assets/2.png"
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
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}
const buttonOptions={
  position : "absolute",
    left : "40%",
    
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}

const cardOptions={
  position : "absolute",
   left:"50%",
    
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}

const hackathonOptions={
  position : "absolute",
   left:"55%",
    top : "38%",
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}

const hackathonfooterOptions={
  position : "absolute",
   left:"70%",
    top : "82%",
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
                 <Heading  textColor={"white"}  fontSize={isMobile ? "30px" : "40px"} {...headingOptions} top={isMobile ? "12%" : "17%"} fontFamily={"heading"}> Welcome to 
                      <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={isMobile ? "70px" : "100px"} > Hack AI Thon</Text> 
                      Code, Collaborate, Conquer !
                </Heading> 
      
                    
                      <HStack {...buttonOptions} gap={isMobile ? "10%" : "10%"} verticalAlign={" center"}  h='full'
            alignItems={isMobile ? "flex-start" : "flex-start"} top = {isMobile ? "21%" : "27%"}           
            >
                        <Button color='white' padding={isMobile ? "10" : "10"} borderRadius={"20"} width={isMobile ? "100px" : "200px"} size='lg' bgColor="#6617cb"
                            bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                            sx={{
                              "&:hover > *": {
                                color: "white",
                              },
                            }}> 
                          Discover
                        </Button>
                        <Button colorScheme='teal' padding={"10"} width={isMobile ? "100px" : "200px"} borderRadius={"20"} size='lg' bgColor="#6617cb"
                            bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                            sx={{
                              "&:hover > *": {
                                color: "white",
                              },
                            }}>
                          Host
                        </Button>
                        <Button colorScheme='teal' padding={"10"}  borderRadius={"20"} width={isMobile ? "100px" : "200px"} size='lg' bgColor="#6617cb"
                            bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                            sx={{
                              "&:hover > *": {
                                color: "white",
                              },
                            }}>
                          Builders
                        </Button>
                      </HStack>
                      
                </ChakraProvider>
                
        </Box>
        <Box w={"full"} h={"full"}>
          <Image src={img1} h={isMobile ? "1500px" : "full"} w={'full'} objectFit={'strech'}/>
          <ChakraProvider></ChakraProvider>
          <Container  minH={"100vh"}  
        maxW={"container.xl"} {...cardOptions}  top={isMobile ? "50%" : "55%"}
         >
            <Stack h='full'
            
            alignItems={isMobile ? "center" : "flex-start"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]}>
<Card width={"550px"} bgColor={"whiteAlpha.100"}>
  <CardBody>
    <Center>
    <Heading size='md' textColor={"white"}>Themes for Hackathon</Heading>
    </Center>
    <HStack mt={"8"} spacing={"4"} mx={isMobile ? "10" : ""}>
    <Text color='white' fontWeight={"bold"} fontSize={"17px"}>
        Hackathons
      </Text>
      <Text color='white' fontWeight={"bold"}  fontSize={"17px"}>
        Top Themes
      </Text>
      <Text color='white' fontWeight={"bold"}  fontSize={"17px"}>
        Total prices
      </Text>
    </HStack>
    <VStack mt='6' spacing='3'>
    
    <Card
    mt={"3"}
  bgColor={"whiteAlpha.200"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  h={"80px"}
   w={"350px"}
  _hover={{ bgGradient:'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)' }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}
        >

<HStack   mx="7" spacing={"7"} alignItems={"center"}>

    <Text size='md' fontWeight={"bold"}>100</Text>
    <Text size='md' fontWeight={"bold"}>Beginner friendly</Text>
    <Text size='md' fontWeight={"bold"}>$40,000</Text>
</HStack>
      
  
  </Card>


  




    </VStack>
  </CardBody>
</Card>

<Card  bgColor={"whiteAlpha.200"} width={"1000px"} >
  <CardBody>
    <Center>
    <Heading size='lg'>Hackathons For You </Heading>
    </Center>
    <VStack mt='6' spacing='3'>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW={"600px"}
>
  <Image
    objectFit='cover'
    maxW={isMobile ? "140px" : "200px"}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack >
    <Image
    objectFit="cover"
    src={img3}
    alt='Caffe Latte'
  />
    <CardBody {...hackathonOptions}  >
    <Stack direction={"row"} spacing={isMobile ? "2" : "5"}> 
    <Heading size={isMobile ? "sm" : "md"}> 1 Hackathon</Heading>
        <Text  px={isMobile ? "2" : "2"} fontSize={isMobile ? "10px" : "15px"} borderRadius={"10px"} bgColor={"teal"}>
        Online
      </Text>
      </Stack>
     
        
      <Text  my={isMobile ? "2" : "4"} px={isMobile ? "1" : "2"} fontWeight={"bold"} fontSize={isMobile ? "10px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
        23 June 2023 - 25 June 2023
      </Text>
      <Text  my={isMobile ? "1" : "4"}  mx={"2"} fontSize={isMobile ? "10px" : "15px"} >
        IIT Kanpur
      </Text>
        

    </CardBody>

    <CardFooter {...hackathonfooterOptions}>
      <Button variant={"solid"} bgColor={'#c961de'} size={isMobile ? "sm" : "sm"} borderRadius={isMobile ? "20px" : "40px"}  ml={"5"}>
        Join
      </Button >
      <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={"sm"}>
      $1000
      </Button>
      <Button variant='solid'  bgColor={"#1c1c65"} size={"sm"}  mr="10">
      550 hackers
      </Button>
      
    </CardFooter>
  </Stack>
</Card>





    </VStack>
  </CardBody>
</Card>

<Card  bgColor={"whiteAlpha.100"}w={"300px"} mx={isMobile ? "100" : ""}>
  <CardBody >
    <Center>
            
        <Avatar objectFit="contain" w="150px" h="150px"  borderWidth={"5px"} borderColor={"purple"}
        src={img2}
      alt='Green double couch with wooden legs'     
    />
      
    </Center>
    <Center>
    <Heading size='md' mt={"4"}>Akhil Binoy
</Heading>
    
    </Center>
    <Center>
    <Text size={"md"}>25 points</Text>
    </Center>
    
    <VStack mt='6' spacing='3'>
      <Heading size='md'>Top Builders</Heading>
<Card
mt={"3"}
  bgColor={"whiteAlpha.200"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  size={"md"}
  maxH={"100px"}
  _hover={{ bgGradient:'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)' }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}
>
  <Avatar
    mx={"3"}
    mt={"3"}
    objectFit='cover'
    size={'lg'}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody objectFit={"contain"} >
      <Heading size='md'>Akhil Binoy</Heading>
      <Text fontSize={"10px"}>100 points</Text>
    </CardBody>
  </Stack>
  </Card>
  
    </VStack>
  </CardBody>
  
</Card>

      
            </Stack>
          </Container>
        </Box>
              
              

    </Box>
    
  )
  }





export default Home