import { Box } from '@chakra-ui/react'
import React from 'react'
import { Card, CardBody,Container, HStack, VStack, Heading } from '@chakra-ui/react'
import img2 from "../../assets/2.png"
import { Avatar, Button , Text} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
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
const headingOptions={
    position : "absolute",
    
    transform : "translate(-50%, -50%)",
    p:"2",
    top:"35rem",
    size:"4x1",
    
}

const HackathonDetailPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <Box {...headingOptions} backdropFilter='auto'  width={isMobile ? "50rem" : "120rem"} backdropBlur='8px'  h={isMobile ? " 55rem" : "55rem"} ml={isMobile ? " 4rem" : "22%"} >
        <Container>
            <Card  bgColor={"whiteAlpha.100"}  width={isMobile ? "28rem" : "75rem"} className='main'  h={isMobile ? " 60rem" : "55rem"} ml={ isMobile ? " 12rem" : "2%"} >
                <CardBody >
                    <VStack>
                        <HStack gap={isMobile ? "5rem" : "15rem"} mr={isMobile ? "10rem" : " "}>
                            <Avatar src={img2} size={isMobile ? "lg" : "2xl"} ml={isMobile ? "20rem" : " "} mb={isMobile ? "10rem" : " "}></Avatar>
                            <VStack mr={"14rem"}  >
                            <Heading size={isMobile ? "lg" : "lg"} mr={isMobile ? "3rem" : " "} textAlign={"center"}> Hackathon Name</Heading>
                            <Button color='white' padding={ "5"} borderRadius={"25"} fontSize={isMobile ? "md" : "lg"} fontWeight={"bold"} width={ isMobile ? "10rem" : "25rem"}  h={"3rem"} bgColor="#6617cb" mt={isMobile ? "2rem" : "1rem"}  mr={isMobile ? "3rem" : " "}
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Apply Now
                         </Button>
                            </VStack>
                        </HStack>
                        <HStack  mr={isMobile? "6rem" :"2rem"} >
                            {
                                isMobile && (
                                    <>
      <Button ref={btnRef}   bgColor="#6617cb" borderRadius={"2rem"} onClick={onOpen} position={"absolute"} mb={"68rem"} ml={"36rem"}>
        Details
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
                                <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Overview
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Project
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                         Project Gallery
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Hackers
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Update
                         </Button>

                                </VStack>
                            
                            </Container>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>

                            )}
                            
                            <Container className='SideButtons' position={"absolute"}  >
                                <VStack mr={isMobile ? "20rem" : " "} >
                                <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Overview
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Project
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                         Project Gallery
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Hackers
                         </Button>
                         <Button color='white' padding={ "5"} borderRadius={"20"} width={ "200px"}  h={"1rem"} bgColor="#6617cb" mt={"1rem"} 
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }}> 
                          Update
                         </Button>

                                </VStack>
                            
                            </Container>
                                <Card bgColor={"whiteAlpha.100"} width={isMobile ? "25rem" : "50rem"} mt={isMobile ? "3rem" : "5rem"} ml={isMobile ? "16rem" : "25rem"} mr={"10rem"} >
                                    <CardBody>
                                        <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Lorem Ipsum is simply dummy 
                                        </Text>

                                    </CardBody>
                                </Card>
                           
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </Container>
    </Box>
  )
}

export default HackathonDetailPage