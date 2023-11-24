import { Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { Text, CardFooter } from '@chakra-ui/react'
import { VStack, HStack, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Card , CardBody, Image ,Button } from '@chakra-ui/react'
import img2 from "../../../assets/2.png"
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
  
const ProjectFormPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
      const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = () => {
    // Handle submission logic here

    // Update state to indicate submission
    setIsSubmitted(true);
  };

  return (
    
    <Box  {...hackathonOptions} bgColor={"whiteAlpha.200"} h={"100rem"} w={"70rem"} backdropFilter='auto'   backdropBlur='8px' >
    <Heading marginLeft={"45%"}> Form </Heading>
    <VStack>
    <Card size={"md"} bgColor={"whiteAlpha.200"} mt={"3rem"} h={"85rem"} w={"60rem"}> 
                <CardBody>
                    <VStack>
                    <Image mt={"2rem"} src={img2} h={"20rem"} w={"50rem"}></Image>
                    <List spacing={3} mt={"2rem"}>
<ListItem>
<ListIcon as={MdCheckCircle} color='green.500' />
    <Input variant="flushed" placeholder='Project Name'></Input>
</ListItem>
<ListItem>
<ListIcon as={MdCheckCircle} color='green.500' />
<Input variant="flushed" placeholder='Youtube Link'></Input>

</ListItem>
<ListItem>
<ListIcon as={MdCheckCircle} color='green.500' />
<Input variant="flushed" placeholder='Github Repo'></Input>

</ListItem>
<ListItem>
<ListIcon as={MdCheckCircle} color='green.500' />
<Container h={"40rem"}  bgColor={"blueviolet"} >
    <Textarea placeholder="About Project" h={"40rem"} w={"30rem"}></Textarea>
</Container>

</ListItem>



</List>
                    </VStack>
                    <Button type='submit' ml={"42%"} mt={"1rem"} colorScheme={isSubmitted ? "red" : "blue"}
        onClick={handleSubmit}> {isSubmitted ? "Submitted Successfully" : "Submit"}</Button>
                </CardBody>
            </Card>
            <HStack gap={"2rem"} mt={"2rem"}> 
                <Button bgColor={"violet"}>Prev</Button>
                <Button bgColor={"violet"}>
                 <Link to={"/projectgallery"}>Next</Link>
                </Button>
            </HStack>
           
    </VStack>
</Box>
  )
}

export default ProjectFormPage