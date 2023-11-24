import React from 'react'
import {  Avatar } from '@chakra-ui/react' 
import { Drawer,} from '@chakra-ui/react'
import { DrawerOverlay  , DrawerContent,  DrawerBody , Button  , useDisclosure} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {  HStack } from '@chakra-ui/react'; 
import img2 from "../assets/2.png";
import {  Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../state";
import { useNavigate } from "react-router-dom";
import { Select } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const fullName = user
  ? `${user.firstName} ${user.lastName}`
  : "Dummy Name"; // Display "Dummy Name" if user is not available


  
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
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" } }
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/Login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/hackathons'}>Hackathons</Link>
                    </Button>
                    <Box mx={4}>
                            < Avatar src={img2} alt="Logo" variant={"ghost"} objectFit="contain"   size={isMobile?"md" : "lg"} />
                     </Box>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/AboutUs'}>About Us</Link>
                    </Button>
                    <Button onClick={onClose} size={isMobile?"sm" : "md"} variant={"ghost"} textColor={'white'} _hover={{ bg: "#c961de" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/contact'}> Contact </Link>
                    </Button>
                    <Menu>
  <MenuButton as={Button} >
    {fullName}
  </MenuButton>
  <MenuList bgColor={"whiteAlpha.200"}>
    <MenuItem> 
    <Button bgColor={"purple.600"}>
      <Link to={'/profile'}>Profile</Link>
      </Button> </MenuItem>
    <MenuItem><Button bgColor={"red.500"}>Log Out</Button></MenuItem>
   
  </MenuList>
</Menu>

                </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Header