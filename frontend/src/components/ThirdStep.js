import React from 'react';
import {
 Flex,
 Heading,
 Button,
} from '@chakra-ui/react';
import FormContainer from './FormContainer';
import SimpleCookiePreference from './Stack';
import CheckoutSteps from './CheckoutStep';

const ThirdStep = () => {
 return (
  <Flex
   w='full'
   alignItems='center'
   justifyContent='center'
   py='5'
  >
   <FormContainer>
   <CheckoutSteps step3/>
    <Heading
     as='h1'
     mb='4'
     fontSize='3xl'
     textAlign='center'
    >
     How are you planning to use Eden?
    </Heading>
    <Heading
     as='h3'
     mb='8'
     fontWeight='normal'
     textAlign='center'
     fontSize='sm'
    >
     We'll streamline your setup exprience accordingly.
    </Heading>
    <Flex direction='column'>
    <Flex direction='row'>
    <SimpleCookiePreference />
    </Flex>

    <Button
     type='submit'
     bgColor='#5e34eb'
     color='white'
     mt='4'
     width='100%'
      >
     Create Workspace
    </Button>
    </Flex>


   </FormContainer>
  </Flex>
 );
};

export default ThirdStep;
