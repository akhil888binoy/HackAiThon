import React from 'react'
import {  Box, Card, theme, Stack, VStack, HStack,   CardBody , ChakraProvider, Heading} from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react';
import img2 from "../../assets/2.png";
import { Text } from '@chakra-ui/react';

import {  
   
     Image, 
      
     useMediaQuery, 
     CardFooter,  
     Button  
     } from '@chakra-ui/react';
 import img1 from "../../assets/1.png";
 import "@fontsource/poppins";
 import { useEffect , useState} from 'react';
 import hackathonData from "../../dupliserver/home.json";
 import img3 from "../../assets/3.png";
 
const headingOptions={
    position : "absolute",
    left : "50%",
    transform : "translate(-50%, -50%)",
    p:"2",
    top:"19rem",
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
  const locationOptions={
    position : "absolute",
     left:"90%",
      top : "12%",
      transform : "translate(-50%, -50%)",
      px:"4"
  }
  
  const hackathonfooterOptions={
    position : "absolute",
     left:"70%",
      top : "82%",
      transform : "translate(-50%, -50%)",
      p:"4",
      size:"4x1",
  }


const ProfilePage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const [hackthonItems, setHackthonItems] = useState([]);
   useEffect(() => {
     setHackthonItems(hackathonData);
   }, []);
 
   useEffect(() => {
     setIsOpen(true);
   }, []);
  return (
    <Box  {...headingOptions} backdropFilter='auto' backdropBlur='8px'  mt={"20rem"} >
      
      
    <ChakraProvider theme={theme} >
    <Card  bgColor={"whiteAlpha.100"}  width={isMobile? "30rem ":"70rem"} className='SignUpForm' mt={"2rem"} >
      <CardBody>
        <Stack direction={"column"}>
            <HStack gap={isMobile ? "2rem": "20%"} ml={isMobile ? "20%": ""} mt={isMobile? "20rem":""}>
            <Avatar objectFit="contain" w={isMobile ? "150px": "150px"} h="150px"  borderWidth={"5px"} borderColor={"purple"}
         src={img2}
       alt='Green double couch with wooden legs'     
     />
     <VStack>
     <Heading > Sophie Fortune</Heading>
     <HStack >
        <Text>100 followers</Text>
        <Text> 100 following</Text>
     </HStack>
     </VStack>

            </HStack>
        <VStack>
            <Card bgColor={"whiteAlpha.100"} width={ isMobile? "30rem" :"65rem"} mt={"2rem"}  >
                <CardBody>
                    <VStack >
                        <Heading size={"lg"}  >Bio</Heading>
                    <Text textAlign={"left"}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                    </VStack>
                    
                   

                </CardBody>
            </Card>
            <Stack direction={isMobile? "column": "row"}>
                    <Card className='Project' bgColor={"blueviolet"} width={ isMobile? "":"40rem"} mt={"2rem"}>
                        <CardBody>
                            <VStack>
                                <Heading size={"lg"}>Project Submitted</Heading>
                                <VStack mt='6' spacing='3'>
     {hackthonItems.map((hackathon, index) => (
 
 <Card
   direction={{ base: 'column', sm: 'row' }}
   overflow='hidden'
   variant='outline'
   w={isMobile? "450px":"600px"} key={index}
  
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
    
     <Heading size={isMobile ? "sm" : "md"}> {hackathon.NameOfHackathon}</Heading>
         
      
         
       
       <Text  my={isMobile ? "1" : "4"}  mx={"2"} fontSize={isMobile ? "10px" : "15px"} >
         {hackathon.ConductedBy}
       </Text>
         
 
     </CardBody>
 
     
   </Stack>
 </Card>
 ))}
 
 
 
 
     </VStack>
                            </VStack>
                        </CardBody>
                    </Card>
                    <Card className='Achievements' bgColor={"blueviolet"} width={"400px"} mt={"2rem"} ml={isMobile? "3rem":" "}>
                        <CardBody>
                            <VStack>
                                <Heading size={"lg"}>Achievements</Heading>
                                <Card
 mt={"3"}
   bgColor={"whiteAlpha.200"}
   direction={{ base: 'column', sm: 'row' }}
   overflow='hidden'
   variant='outline'
   size={"md"}
   maxH={"100px"}
   w={"23rem"}
   
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
       <Heading size='md'>MASTER</Heading>
       <Text fontSize={"10px"}>won 20 hackathons</Text>
     </CardBody>
   </Stack>
   </Card>
                            </VStack>

                        </CardBody>
                    </Card>

                   </Stack>
        </VStack>
            
        </Stack>      
      
     
    </CardBody>

    </Card>



    
    </ChakraProvider>
    
    
  </Box>

  )
}

export default ProfilePage