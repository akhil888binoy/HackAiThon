import React from 'react'
import {Box , 
    ChakraProvider, 
    Center, Image, 
    Heading, Container,  
    Stack, useMediaQuery, 
    Card, 
    CardBody, CardFooter,  
    Text , Button , 
    Divider, HStack, Input,
    VStack, ButtonGroup, theme, Radio, RadioGroup, AbsoluteCenter } from '@chakra-ui/react'
 import img1 from "../../assets/1.png"
 import "@fontsource/poppins";
 import { useEffect , useState} from 'react';
 import img2 from "../../assets/2.png"
 import hackathonData from "../../dupliserver/home.json"
 import img3 from "../../assets/3.png"
 import { Link } from 'react-router-dom';
import HackathonDetail from '../hackathonDetail/HackathonDetailPage';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
const cardOptions={
  position : "absolute",
   left:"50%",
    
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}

const hackathonOptions={
  position : "absolute",
    transform : "translate(-50%, -50%)",
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
  
    top : "82%",
    transform : "translate(-50%, -50%)",
    p:"4",
    size:"4x1",
}



const HackathonPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isOpenn, setIsOpen] = React.useState(false);
   const [hackthonItems, setHackthonItems] = useState([]);
   useEffect(() => {
     setHackthonItems(hackathonData);
   }, []);
 
   useEffect(() => {
     setIsOpen(true);
   }, []);
   
 
     const [isMobile] = useMediaQuery("(max-width: 768px)");
     const [showText, setShowText] = React.useState(true);
     
 
   
  return (
    
    <Box w={"full"} h={"full"} >
      <Image src={img1} h={isMobile ? "1500px" : "full"} w={'full'} objectFit={'strech'}/>
      {
        isMobile&&(
          <Image src={img1} h={isMobile ? "1500px" : "full"} w={'full'} objectFit={'strech'}/>
        )
      }
      <ChakraProvider theme={theme}></ChakraProvider>

      
      <Container  minH={"100vh"}  backdropFilter='auto' backdropBlur='8px'
    maxW={"container.xl"} {...cardOptions}  top={isMobile ? "30%" : "40%"}
     >
     
      <Center>
      <Input variant='filled' placeholder='Search' maxW={"300px"} maxH={"100px"}  ml={isMobile ? "7px" : ""} mt={isMobile ? "7px" : "6rem"}/>


      </Center>
        <Stack h='full'
        
        alignItems={isMobile ? "center" : "flex-start"}
        flexWrap={isMobile ? "wrap" : "nowrap"}
        direction={["column", "row"]}>
          //isMobile
          {
            isMobile&&(
              <>
            <Button ref={btnRef}  color='white' padding={ "5"} borderRadius={"25"} fontSize={isMobile ? "md" : "lg"} fontWeight={"bold"} width={ isMobile ? "10rem" : "25rem"}  h={"3rem"} bgColor="#6617cb"   ml={isMobile ? "" : " "} mt={isMobile ? "2rem" : ""} mb={isMobile ? "3rem": ""}
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }} onClick={onOpen}>
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"whiteAlpha.200"} backdropFilter='auto' backdropBlur='8px' >
          <DrawerCloseButton />
          <DrawerBody >
          <Container className='SideButtons' mt="3rem"   >
                                <VStack  >
                                <Card width={"300px"} bgColor={""} >
<CardBody>
<Center>
<Heading size='md' textColor={"white"}>Sort </Heading>
</Center>

<VStack mt='6' spacing='3'>

<Button colorScheme='white' variant='ghost'>
    Most Relevant 
  </Button>
  <Button colorScheme='white' variant='ghost'>
   Submission Date
  </Button>
  <Button colorScheme='white' variant='ghost'>
    Recently added
  </Button>
  <Button colorScheme='white' variant='ghost'>
    Prize Amount
  </Button>




  <Card  bgColor={""} w={"300px"} mt={"1rem"} >
<CardBody >
<Center>
<Heading size='md' mt={"4"}>Filters
</Heading>

</Center>


<VStack mt='6' spacing='3'>
  <Heading size='md'>Location</Heading>
  <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='column'>
    <Radio  value='1'>
     Offline
    </Radio>
    <Radio  value='2'>
      Hybrid
    </Radio>
    <Radio  value='3'>
      Online
    </Radio>
  </Stack>
</RadioGroup>
<Heading size={"md"}> Interested Tags</Heading>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Tags
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Buttontag
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm'  borderRadius={"20px"} >
    Button
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>

  </Stack>
  

</VStack>
</CardBody>

</Card>


</VStack>
</CardBody>
</Card>

                               

                                </VStack>
                            
                            </Container>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>

              
              </>
            )
          }

 //Sorting           
<Card width={"300px"} bgColor={"whiteAlpha.100"} display={isMobile ? "none" : ""}>
<CardBody>
<Center>
<Heading size='md' textColor={"white"}>Sort </Heading>
</Center>

<VStack mt='6' spacing='3'>

<Button colorScheme='white' variant='ghost'>
    Most Relevant 
  </Button>
  <Button colorScheme='white' variant='ghost'>
   Submission Date
  </Button>
  <Button colorScheme='white' variant='ghost'>
    Recently added
  </Button>
  <Button colorScheme='white' variant='ghost'>
    Prize Amount
  </Button>






</VStack>
</CardBody>
</Card>

//Hackathons

<Card  bgColor={"whiteAlpha.200"} width={isMobile?"340px" : "1000px"} className='HackathonsCard' mt={isMobile ? "" : "25px"} >
<CardBody >
<Center>
<Heading size='lg'>Hackathons For You </Heading>
</Center>
<VStack mt='6' spacing='3'>
{hackthonItems.map((hackathon, index) => (

<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
w={isMobile ? "330px" : "700px"} key={index}
h={isMobile ? "30rem" : ""}

>
  <Stack direction={isMobile? "column":"row"} gap={"none"}>

  <Image
objectFit='cover'
w={isMobile ? "30rem" : "220px"}
src={img2}
alt='Caffe Latte'

/>

<Stack >
<Image
objectFit="cover"
src={img3}
alt='Caffe Latte'
h={isMobile ? "20rem" : ""}
w={isMobile ? "" : "50rem"}
/>
<Text   fontSize={isMobile ? "15px" : "15px"}  borderRadius={"10px"} {...locationOptions} bgColor={"teal"} textAlign={"center"} mb={isMobile? "5%" : ""} >
    {hackathon.location}
</Text>

<CardBody {...hackathonOptions}  ml={"7rem"} mt={isMobile  ? "" : "13%"} mb={isMobile? "10%" : ""}>
 
<Heading size={isMobile ? "lg" : "lg"} mt={isMobile?"18rem" : " "} > {hackathon.NameOfHackathon}</Heading>
    
 
    
  <Text  my={isMobile ? "3" : "4"} px={isMobile ? "5" : "2"}  fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
    {hackathon.date}
  </Text>
  <Text  my={isMobile ? "1" : "4"}  mx={"2"} fontSize={isMobile ? "15px" : "15px"} >
    {hackathon.ConductedBy}
  </Text>
    

</CardBody>

<CardFooter {...hackathonfooterOptions} ml={isMobile? "50%": "38%"} mt={isMobile? "3rem":""} mr={isMobile?"10rem":""}>
  <Button variant={"solid"} bgColor={'#c961de'} size={isMobile ? "sm" : "lg"} borderRadius={isMobile ? "20px" : "40px"}  ml={"5"}>
    <Link to={"/hackathondetail"}>Join</Link>
    
  </Button >
  <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={isMobile ? "sm" : "lg"}>
  $1000
  </Button>
  <Button variant='solid'  bgColor={"#1c1c65"} size={isMobile ? "sm" : "lg"}  mr="10">
  {hackathon.NoOfHackers} hackers
  </Button>
  
</CardFooter>
</Stack>
    
  </Stack>

</Card>
))}




</VStack>
</CardBody>
</Card>

//Filters
<Card  bgColor={"whiteAlpha.100"}w={"300px"} display={isMobile ? "none" : ""}>
<CardBody >
<Center>
<Heading size='md' mt={"4"}>Filters
</Heading>

</Center>


<VStack mt='6' spacing='3'>
  <Heading size='md'>Location</Heading>
  <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='column'>
    <Radio  value='1'>
     Offline
    </Radio>
    <Radio  value='2'>
      Hybrid
    </Radio>
    <Radio  value='3'>
      Online
    </Radio>
  </Stack>
</RadioGroup>
<Heading size={"md"}> Interested Tags</Heading>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Tags
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Buttontag
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm'  borderRadius={"20px"} >
    Button
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"} >
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>

  </Stack>
  <Stack direction={"row"}>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>
  <Button colorScheme='teal' textColor="white" size='sm' borderRadius={"20px"}>
    Button
  </Button>

  </Stack>
  

</VStack>
</CardBody>

</Card>

  
        </Stack>
        <Button borderRadius={"20px"} color={"purple"}> 
=        </Button>
      </Container>
    </Box>
          
          


    
  )
}

export default HackathonPage