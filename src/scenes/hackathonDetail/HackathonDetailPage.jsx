import { Box } from '@chakra-ui/react'
import React from 'react'
import { Card, CardBody,Container, HStack, VStack, Heading } from '@chakra-ui/react'
import img2 from "../../assets/2.png"
import { Avatar, Button , Text} from '@chakra-ui/react'

const headingOptions={
    position : "absolute",
    left : "25%",
    transform : "translate(-50%, -50%)",
    p:"2",
    top:"20rem",
    size:"4x1",
    
}

const HackathonDetailPage = () => {
  return (
    <Box {...headingOptions} backdropFilter='auto' width={"75rem"} backdropBlur='8px'  h={"30rem"}>
        <Container>
            <Card  bgColor={"whiteAlpha.100"}  width={"75rem"} className='main'  h={"30rem"}>
                <CardBody >
                    <VStack>
                        <HStack gap={"15rem"}>
                            <Avatar src={img2} size={"2xl"}></Avatar>
                            <VStack mr={"14rem"}>
                            <Heading size={"lg"} > Hackathon Name</Heading>
                            <Button color='white' padding={ "5"} borderRadius={"25"} fontSize={"lg"} fontWeight={"bold"} width={ "25rem"}  h={"3rem"} bgColor="#6617cb" mt={"1rem"} 
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
                        <HStack mt={"2rem"} >
                            <Container className='SideButtons' position={"fixed"} >
                                <VStack>
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
                                <Card bgColor={"whiteAlpha.100"} width={"70rem"} mt={"2rem"} mr={"10rem"} >
                                    <CardBody>
                                        <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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