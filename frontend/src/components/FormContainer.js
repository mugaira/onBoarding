import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

const FormContainer = ({ children, width = 'auto' }) => {
 return (
  <Flex
   direction="column"
   boxShadow="md"
   bgColor="white"
   p="10"
   width='95%'
   alignContent='center'
   // height='100%'
   alignItems='center'
   justifyContent='center'
  
  >
   <Flex direction='row' mr='8%'  alignItems='center'>
    <Image src={process.env.PUBLIC_URL + './logo.jpg'} />
    <Heading
     as='h1'
     fontSize='3xl'
    >
     Eden
    </Heading>
   </Flex>
   {children}
  </Flex>
 );
};

export default FormContainer;
