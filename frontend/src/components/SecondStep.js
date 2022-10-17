import React from 'react';
import {
 Button,
 Flex,
 FormControl,
 FormLabel,
 Heading,
 Input,
 Spacer,
 Text,
 InputLeftAddon,
 InputGroup,
} from '@chakra-ui/react';
import FormContainer from './FormContainer';
import CheckoutSteps from './CheckoutStep';

const SecondStep = () => {
 return (
  <Flex
   w='full'
   alignItems='center'
   justifyContent='center'
   py='5'
  >
   <FormContainer>
   <CheckoutSteps step2 />
    <Heading
     as='h1'
     mb='4'
     fontSize='3xl'
     textAlign='center'
    >
     Let's set up a home for all your work
    </Heading>
    <Heading
     as='h3'
     mb='8'
     fontWeight='normal'
     textAlign='center'
     fontSize='sm'
    >
     You can always create another workspace later
    </Heading>
    <Flex>
    <form>
     <FormControl id='workspaceName'>
      <FormLabel fontWeight='bold'>Workspace Name</FormLabel>
      <Input
       id='workspaceName'
       type='text'
       placeholder='Eden'
      />
     </FormControl>
     <Spacer h='3' />

     <FormControl id='url'>
      <FormLabel fontWeight='bold'>
       Workspace URL{' '}
       <Text
        as='cite'
        fontWeight='normal'
       >
        (optional)
       </Text>
      </FormLabel>
      <InputGroup>
       <InputLeftAddon children='www.eden.com/' />
       <Input
        id='url'
        type='url'
        placeholder='Example'
       />
      </InputGroup>
     </FormControl>

     <Button
      type='submit'
      bgColor='#5e34eb'
      color='white'
      mt='4'
      width='100%'
     >
      Create Workspace
     </Button>
    </form>
    </Flex>
   </FormContainer>
  </Flex>
 );
};

export default SecondStep;
