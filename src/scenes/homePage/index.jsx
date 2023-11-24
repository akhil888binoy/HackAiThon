import { Avatar, Box , 
    ChakraProvider, 
    Center, Image, 
    Heading, Container,  
    Stack, useMediaQuery, 
    Card,  
    CardBody, CardFooter,  
    Text , Button ,  HStack, 
    VStack } from '@chakra-ui/react';
 import React from 'react';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
 import img1 from "../../assets/1.png";
 import "@fontsource/poppins";
 import { useEffect , useState} from 'react';
 import img2 from "../../assets/2.png";
 import hackathonData from "../../dupliserver/home.json";
 import img3 from "../../assets/3.png";
 import { Link } from 'react-router-dom';
 import { Tooltip } from '@chakra-ui/react';
 
 
 
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
 
 
 const HomePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hackthonItems, setHackthonItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setHackthonItems(hackathonData);
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const itemsPerPage = 3;
  const totalPages = Math.ceil(hackthonItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleHackathonItems = hackthonItems.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

   return (
     
     <Box>
        
          <Box w="full" h={'full'}>
                  <Image src={img1} h="100vh" w={isMobile? "" :'full'} objectFit={'cover'}/>
                  <ChakraProvider theme={theme}>
                  <Heading  textColor={"white"}  fontSize={isMobile ? "30px" : "40px"} {...headingOptions} top={isMobile ? "13%" : "17%"} fontFamily={"heading"}> Welcome to 
                       <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={isMobile ? "70px" : "100px"} > Hack AI Thon</Text> 
                       Code, Collaborate, Conquer !
                 </Heading> 
       
                     
                       <HStack {...buttonOptions} gap={isMobile ? "10%" : "10%"} verticalAlign={" center"}  h='full'
             alignItems={isMobile ? "center" : "flex-start"} top = {isMobile ? "24%" : "27%"}  ml={isMobile? "2rem":""}         
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
         maxW={"container.xl"} {...cardOptions}  top={isMobile ? "50%" : "60%"}
          >
             <Stack h='full'
             
             alignItems={isMobile ? "center" : "flex-start"}
             flexWrap={isMobile ? "wrap" : "nowrap"}
             direction={["column", "row"]}>
 <Card width={isMobile?  "400px":"550px"} bgColor={"whiteAlpha.100"} mr={isMobile? "30rem" : ""} display={isMobile? "none" : ""}>
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
 
 <Card  bgColor={"whiteAlpha.200"} width={isMobile?"340px" : "1000px"} className='HackathonsCard' mt={isMobile ? "24rem" : "25px"}  >
<CardBody >
<Center>
<Heading size='lg'>Hackathons For You </Heading>
</Center>
<VStack mt='6' spacing='3'>
{visibleHackathonItems.map((hackathon, index) => (

<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
w={isMobile ? "330px" : "650px"} key={index}
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

<CardBody {...hackathonOptions}  ml={isMobile? "7rem" : "10rem"}  mt={isMobile  ? "1rem" : "5rem"} mb={isMobile? "10rem" : ""}>
 
<Heading size={isMobile ? "lg" : "lg"} mt={isMobile?"18rem" : " "}> {hackathon.NameOfHackathon}</Heading>
    
 
    
  <Text  my={isMobile ? "3" : "4"} px={isMobile ? "1" : "2"}  fontWeight={"bold"} fontSize={isMobile ? "15px" : "15px"} borderRadius={"10px"} bgColor={"purple"}>
    {hackathon.date}
  </Text>
  <Text  my={isMobile ? "1" : "4"}  mx={"2"} fontSize={isMobile ? "15px" : "15px"} >
    {hackathon.ConductedBy}
  </Text>
    

</CardBody>

<CardFooter {...hackathonfooterOptions} ml={isMobile? "11rem": "15rem"} mt={isMobile? "3rem":"11rem"} mr={isMobile?"10rem":""} >
  <Button variant={"solid"} bgColor={'#c961de'} size={isMobile ? "sm" : "md"} borderRadius={isMobile ? "20px" : "40px"}  ml={"5"}>
    <Link to={"/hackathondetail"}>Join</Link>
    
  </Button >
  <Button variant='solid' bgGradient={"linear-gradient(315deg, #facc6b 0%, #fabc3c 74%)"} mx={isMobile ? "4" : "9"} size={isMobile ? "sm" : "md"}>
  $1000
  </Button>
  <Button variant='solid'  bgColor={"#1c1c65"} size={isMobile ? "sm" : "md"}  mr="10" >
  {hackathon.NoOfHackers} hackers
  </Button>
  
</CardFooter>
</Stack>
    
  </Stack>

</Card>
))}




</VStack>
<HStack gap={"30rem"} mt={"1rem"}>
<Button onClick={handlePrevPage} disabled={currentPage === 1} bgColor={"violet"}>
            Prev
          </Button>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages} bgColor={"violet"}>
            Next
          </Button>
         
        </HStack>
</CardBody>
</Card>
 
 <Card  bgColor={"whiteAlpha.100"}w={"300px"} mx={isMobile ? "100" : ""} display={isMobile? "none":""}>
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
 
 
 
 
 
 export default HomePage