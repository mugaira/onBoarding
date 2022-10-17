import React from 'react';
import {
 Flex,
 Heading,
 Button,
 Icon,
} from '@chakra-ui/react';
import FormContainer from './FormContainer';
import CheckoutSteps from './CheckoutStep';
import {AiFillCheckCircle} from 'react-icons/ai'


const FourthStep = () => {
 return (
  <Flex
   w='full'
   alignItems='center'
   justifyContent='center'
   py='5'
  >
   <FormContainer>
   <CheckoutSteps step4/>
   <Flex justifyContent='center' mb='8'>
   <Icon 
   as={AiFillCheckCircle}
   h='8'
   w='8'
   color='blue.600'
   
   />
   </Flex>
   
    <Heading
     as='h1'
     mb='4'
     fontSize='3xl'
     textAlign='center'
    >
     Congratulation, Eren!
    </Heading>
    <Heading
     as='h3'
     mb='8'
     fontWeight='normal'
     textAlign='center'
     fontSize='sm'
    >
     You have completed onboarding, you can start using Eden!
    </Heading>

    <Button
     type='submit'
     bgColor='#5e34eb'
     color='white'
     mt='4'
     width='25vw'
    >
    Launch
    </Button>

   </FormContainer>
  </Flex>
 );
};

export default FourthStep;
