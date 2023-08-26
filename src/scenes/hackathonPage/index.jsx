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
    VStack, ButtonGroup, theme, Radio, RadioGroup } from '@chakra-ui/react'
 import img1 from "../../assets/1.png"
 import "@fontsource/poppins";
 import { useEffect , useState} from 'react';
 import img2 from "../../assets/2.png"
 import hackathonData from "../../dupliserver/home.json"
 import img3 from "../../assets/3.png"
 import { Link } from 'react-router-dom';
import HackathonDetail from '../hackathonDetail/HackathonDetailPage';
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



const HackathonPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
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
      <ChakraProvider theme={theme}></ChakraProvider>
      
      <Container  minH={"100vh"}  backdropFilter='auto' backdropBlur='8px'
    maxW={"container.xl"} {...cardOptions}  top={isMobile ? "40%" : "40%"}
     >
      <Center>
      <Input variant='filled' placeholder='Search' maxW={"300px"} maxH={"100px"} mb={isMobile ? "15px" : ""} ml={isMobile ? "7px" : ""}/>


      </Center>
        <Stack h='full'
        
        alignItems={isMobile ? "center" : "flex-start"}
        flexWrap={isMobile ? "wrap" : "nowrap"}
        direction={["column", "row"]}>

 //Sorting           
<Card width={"300px"} bgColor={"whiteAlpha.100"} ml={isMobile ? " 80px" : ""}>
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

<Card  bgColor={"whiteAlpha.200"} width={"1000px"} className='HackathonsCard' mt={"25px"}>
<CardBody>
<Center>
<Heading size='lg'>Hackathons For You </Heading>
</Center>
<VStack mt='6' spacing='3'>
{hackthonItems.map((hackathon, index) => (

<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
maxW={"700px"} key={index}
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
<Text  fontSize={isMobile ? "10px" : "15px"} borderRadius={"10px"} {...locationOptions} bgColor={"teal"} textAlign={"center"}>
    {hackathon.location}
</Text>
<CardBody {...hackathonOptions}  >

<Heading size={isMobile ? "sm" : "md"}> {hackathon.NameOfHackathon}</Heading>
    
 
    
  <Text  my={isMobile ? "2" : "4"} px={isMobile ? "1" : "2"} fontWeight={"bold"} fontSize={isMobile ? "10px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
    {hackathon.date}
  </Text>
  <Text  my={isMobile ? "1" : "4"}  mx={"2"} fontSize={isMobile ? "10px" : "15px"} >
    {hackathon.ConductedBy}
  </Text>
    

</CardBody>

<CardFooter {...hackathonfooterOptions}>
  <Button variant={"solid"} bgColor={'#c961de'} size={isMobile ? "sm" : "sm"} borderRadius={isMobile ? "20px" : "40px"}  ml={"5"}>
    <Link to={"/hackathondetail"}>Join</Link>
    
  </Button >
  <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={"sm"}>
  $1000
  </Button>
  <Button variant='solid'  bgColor={"#1c1c65"} size={"sm"}  mr="10">
  {hackathon.NoOfHackers} hackers
  </Button>
  
</CardFooter>
</Stack>
</Card>
))}




</VStack>
</CardBody>
</Card>

//Filters
<Card  bgColor={"whiteAlpha.100"}w={"300px"} mx={isMobile ? "100" : ""}>
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