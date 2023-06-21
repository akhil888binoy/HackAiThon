import { Avatar, Box } from '@chakra-ui/react'
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
    top : "17%",
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}
const buttonOptions={
  position : "absolute",
    left : "40%",
    top : "30%",
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}

const cardOptions={
  position : "absolute",
   left:"50%",
    top : "60%",
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
                 <Heading  textColor={"white"}  fontSize={isMobile ? "30px" : "40px"} {...headingOptions} fontFamily={"heading"}> Welcome to 
                      <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={isMobile ? "70px" : "100px"} > Hack AI Thon</Text> 
                      Code, Collaborate, Conquer !
                </Heading> 
      
                    
                      <HStack {...buttonOptions} gap={isMobile ? "10%" : "20%"} verticalAlign={" center"}  h='full'
            alignItems={isMobile ? "flex-start" : "flex-start"}
           
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
          <ChakraProvider>
            
          </ChakraProvider>
          <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
          <Container  minH={"100vh"}  
        maxW={"container.xl"} {...cardOptions} 
         >
            <Stack h='full'
            
            alignItems={isMobile ? "center" : "flex-start"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            direction={["column", "row"]}>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Card  bgColor={"whiteAlpha.200"} width={"1000px"} >
  <CardBody>
    <Center>
    <Heading size='md'>Hackathons For You </Heading>
    </Center>
    <VStack mt='6' spacing='3'>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  bgColor={"whiteAlpha.200"}
  overflow='hidden'
  variant='outline'
  width={"600px"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'> 1 Hackathon</Heading>

      <Text py='2'>
        1st hackathon of HAT.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant={"solid"} bgColor={'#c961de'}>
        Join
      </Button >
      <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={"10"}>
      1000$
      </Button>
      <Button variant='solid'  bgColor={"#1c1c65"}>
      550 hackers
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  bgColor={"whiteAlpha.200"}
  overflow='hidden'
  variant='outline'
  width={"600px"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'> 1 Hackathon</Heading>

      <Text py='2'>
        1st hackathon of HAT.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant={"solid"} bgColor={'#c961de'}>
        Join
      </Button >
      <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={"10"}>
      1000$
      </Button>
      <Button variant='solid'  bgColor={"#1c1c65"}>
      550 hackers
      </Button>
    </CardFooter>
  </Stack>
</Card>


<Card
  direction={{ base: 'column', sm: 'row' }}
  bgColor={"whiteAlpha.200"}
  overflow='hidden'
  variant='outline'
  width={"600px"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'> 1 Hackathon</Heading>

      <Text py='2'>
        1st hackathon of HAT.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant={"solid"} bgColor={'#c961de'}>
        Join
      </Button >
      <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={"10"}>
      1000$
      </Button>
      <Button variant='solid'  bgColor={"#1c1c65"}>
      550 hackers
      </Button>
    </CardFooter>
  </Stack>
</Card>


    </VStack>
  </CardBody>
</Card>

<Card  bgColor={"whiteAlpha.100"} width={"300px"}>
  <CardBody >
    <Center>
            
        <Avatar objectFit="contain" w="150px" h="150px"  borderWidth={"5px"} borderColor={"red"}
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
  _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
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
  <Card
  bgColor={"whiteAlpha.200"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  size={"md"}
  maxH={"100px"}
  _hover={{bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
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
    size={"lg"}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody objectFit={"contain"}>
      <Heading size={"md"}>Akhil Binoy</Heading>
      <Text fontSize={"10px"}>100 points</Text>
    </CardBody>
  </Stack>
  </Card>
  <Card
  bgColor={"whiteAlpha.200"}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  size={"md"}
  maxH={"100px"}
  _hover={{bgGradient:'linear(to-l, #7928CA, #FF0080)' } }
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
    size={"lg"}
    src={img2}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody objectFit={"contain"}>
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