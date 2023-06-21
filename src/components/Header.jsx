import React from 'react'
import { Radio , Icon, Avatar } from '@chakra-ui/react' 
import { Drawer, Flex} from '@chakra-ui/react'
import { DrawerOverlay  , DrawerContent, DrawerHeader, DrawerBody , Button , Stack, RadioGroup , useDisclosure} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { VStack , HStack } from '@chakra-ui/react'; 
import { Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import img2 from "../assets/2.png";
import { Image, Box } from '@chakra-ui/react';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [displayText, setDisplayText] = useState('TODDYTON');

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the displayText state with the new text
      setDisplayText(displayText === 'TODDYTON' ? 'കള്ള്TON' : 'TODDYTON');
    }, 2000); // Change text every 2 seconds

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };})
  return (
    <>
    <Avatar pos={"fixed"}
    top={"4"}
    left={"4"}
    _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "#2f2f8A",
          },
        }}
        bgColor={"white"}
    padding={"0"}
    width={"60px"}
    height={"60px"}
    zIndex={"overlay"}
    onClick={onOpen}>
        <Box mx={4}>
                            < Avatar src={img2} alt="Logo" variant={"ghost"} objectFit="contain" w="50px" h="50px"   />
                     </Box>
    
    </Avatar>
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent bgColor={"whiteAlpha.100"}>
        <DrawerBody >
        <HStack justifyContent={"center"}>
                    <Button onClick={onClose}  variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/Login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/hackathons'}>Hackathons</Link>
                    </Button>
                    <Box mx={4}>
                            < Avatar src={img2} alt="Logo" variant={"ghost"} objectFit="contain" w="80px" h="80px"   />
                     </Box>
                    <Button onClick={onClose}  variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/AboutUs'}>About Us</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/contact'}> Contact </Link>
                    </Button>
                </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Navbar