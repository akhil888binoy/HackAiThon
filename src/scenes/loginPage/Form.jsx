import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import {  Box, Card, theme, FormControl, FormLabel , CardBody , ChakraProvider} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
  import { 
    Container , 
    VStack,
    Heading, 
    Input, 
    Button, 
    Link,
    Text} from '@chakra-ui/react'
  

const registerSchema = yup.object().shape({
  username: yup.string().required("required"),  
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
});



const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
    username:"",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};
const headingOptions={
    position : "absolute",
    left : "50%",
    transform : "translate(-50%, -50%)",
    p:"2",
    top:"19rem",
    size:"4x1",
    
}


const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  

  return (
    <Box  {...headingOptions} backdropFilter='auto' backdropBlur='8px'  >
      
      <ChakraProvider theme={theme} >
        
       <Card  bgColor={"whiteAlpha.100"}  width={"500px"} className='SignUpForm' mt={"2rem"} >
        <CardBody>

      <Heading textAlign="center" size="xl" mb="6">
        Sign Up
      </Heading>
      <FormControl>
        
        <Input variant='flushed'
        placeholder="Username"  mb="6" _placeholder={{ opacity: 1, color: 'white' }}/>
      </FormControl>
      <FormControl>
        
        <Input variant='flushed' type="Email" placeholder=" Email" mb="4" _placeholder={{ opacity: 1, color: 'white' }} />
      </FormControl>
      <FormControl>
        
        <Input variant='flushed' placeholder="First Name" mb="6" _placeholder={{ opacity: 1, color: 'white' }}/>
      </FormControl>
      <FormControl>
        
        <Input variant='flushed' placeholder="Last Name" mb="6" _placeholder={{ opacity: 1, color: 'white' }} />
      </FormControl>
      <FormControl>
       
        <Input variant='flushed' type="password" placeholder="Password" mb="6" _placeholder={{ opacity: 1, color: 'white' }}/>
      </FormControl>
      <Center>
      <Button colorScheme='teal'   borderRadius={"20"} size='lg' bgColor="#6617cb"
                             bgImage="linear-gradient(315deg, #6617cb 0%, #cb218e 74%)"  _hover={{ bg: "#c961de" }}
                             sx={{
                               "&:hover > *": {
                                 color: "white",
                               },
                             }} textColor={"white"}>
                           Sign Up
                         </Button>
      </Center>
      
      </CardBody>

      </Card>
      </ChakraProvider>
      
      
    </Box>
    
  )
};

export default Form;