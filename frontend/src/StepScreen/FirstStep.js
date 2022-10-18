import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutStep';
import {useNavigate} from 'react-router-dom';


const FirstStep = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/second')
  }
  return (
    <Flex
      w='full'
      alignItems='center'
      justifyContent='center'
      py='5'
    >
      <FormContainer>
        <CheckoutSteps step1 />
        <Heading
          as='h1'
          mb='4'
          fontSize='3xl'
        >
          Welcome! First things first...
        </Heading>
        <Heading
          as='h3'
          mb='8'
          fontWeight='normal'
          fontSize='sm'
        >
          You can always change them later
        </Heading>

        <form onSubmit={submitHandler}>
          <FormControl id='name'>
            <FormLabel fontWeight='bold'>Full Name</FormLabel>
            <Input
              id='name'
              type='text'
              placeholder='Steve Jobs'
              isRequired
            />
          </FormControl>
          <Spacer h='3' />

          <FormControl id='displayName'>
            <FormLabel fontWeight='bold'>Display Name</FormLabel>
            <Input
              id='displayName'
              type='text'
              placeholder='Steve'
              isRequired
            />
          </FormControl>

          <Button
            type='submit'
            bgColor='#5e34eb'
            color='white'
            mt='4'
            width='25vw'
            _hover={{boxShadow: "lg",opacity:'0.8'}}
          >
            Create Workspace
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default FirstStep;
