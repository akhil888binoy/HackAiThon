import React from 'react'
import { Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { Text, CardFooter } from '@chakra-ui/react'
import { VStack, HStack, Stack } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { Card , CardBody, Image ,Button } from '@chakra-ui/react'
import img2 from "../../assets/2.png"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

const hackathonOptions={
    position : "absolute",
    left : "50%",
    transform : "translate(-50%, -50%)",
    top:"40rem",
    p:"4",
    size:"4x1",
      
      
  }
  
  
const SubmissionPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box  {...hackathonOptions} bgColor={"whiteAlpha.200"} h={"70rem"} w={"70rem"} backdropFilter='auto'   backdropBlur='8px' >
        <Heading marginLeft={"40%"}> Submission</Heading>
        <VStack>
        <Card size={"md"} bgColor={"whiteAlpha.200"} mt={"3rem"} h={"55rem"} w={"60rem"}> 
                    <CardBody>
                        <VStack>
                            <Heading >Instruction</Heading>
                        <Image mt={"2rem"} src={img2} h={"20rem"} w={"50rem"}></Image>
                        <List spacing={3} mt={"2rem"}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Prepare Your Project: Make sure your project is complete and fully functional.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Create ZIP Archive: Compress all project files, including a README, into a ZIP file.

  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Log In: Sign in to the hackathon platform using your credentials.

  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Upload ZIP Archive: Navigate to "Submit Project" and upload your ZIP file.

  </ListItem>
  Provide Project Details: Fill in project title, team name, description, and technical requirements.
  {/* You can also use custom icons from react-icons */}
  
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Prepare Your Project: Make sure your project is complete and fully functional.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Create ZIP Archive: Compress all project files, including a README, into a ZIP file.

  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Log In: Sign in to the hackathon platform using your credentials.

  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Upload ZIP Archive: Navigate to "Submit Project" and upload your ZIP file.

  </ListItem>
  Provide Project Details: Fill in project title, team name, description, and technical requirements.
  {/* You can also use custom icons from react-icons */}
  
  
</List>
                        </VStack>
                    </CardBody>
                </Card>
                <HStack gap={"2rem"}> 
                    <Button bgColor={"violet"}>Prev</Button>
                    <Button bgColor={"violet"}>
                      <Link to={"/projectform"}>Next</Link>
                    </Button>
                </HStack>
               
        </VStack>
    </Box>
  )
}

export default SubmissionPage