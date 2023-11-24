import React from 'react'
import { Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import { Text, CardFooter } from '@chakra-ui/react'
import { VStack, HStack, Stack } from '@chakra-ui/react'
import { Card , CardBody, Image ,Button } from '@chakra-ui/react'
import img2 from "../../assets/2.png"

const hackathonOptions={
    position : "absolute",
    left : "50%",
    transform : "translate(-50%, -50%)",
    top:"30rem",
    p:"4",
    size:"4x1",
      
      
  }
  
  
const AboutUsPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box  {...hackathonOptions} bgColor={"whiteAlpha.200"} h={"50rem"} w={"70rem"} backdropFilter='auto'   backdropBlur='8px' >
        <Heading marginLeft={"40%"}> About Us</Heading>
        <VStack gap={"3rem"} mt={"2rem"}>
            <HStack gap={"3rem"}>
            <Card size={"md"} bgColor={"whiteAlpha.200"}>
                    <CardBody>
                        <VStack>
                        <Image src={img2} h={"10rem"} w={"15rem"}></Image>
                        <Heading size={"md"}>Akhil Binoy</Heading>
                        <Text>Lead Developer</Text>
                        <Text>Team Name</Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card size={"md"} bgColor={"whiteAlpha.200"}>
                    <CardBody>
                        <VStack>
                        <Image src={img2} h={"10rem"} w={"15rem"}></Image>
                        <Heading size={"md"}>Akhil Binoy</Heading>
                        <Text>Lead Developer</Text>
                        <Text>Team Name</Text>
                        </VStack>
                    </CardBody>
                </Card>
                <Card size={"md"} bgColor={"whiteAlpha.200"}>
                    <CardBody>
                        <VStack>
                        <Image src={img2} h={"10rem"} w={"15rem"}></Image>
                        <Heading size={"md"}>Akhil Binoy</Heading>
                        <Text>Lead Developer</Text>
                        <Text>Team Name</Text>
                        </VStack>
                    </CardBody>
                </Card>

            </HStack>
        </VStack>

    </Box>
  )
}

export default AboutUsPage