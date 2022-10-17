import React from 'react';
import { Stack, Text, Flex } from '@chakra-ui/react';
import { RiUserFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';


export default function SimpleCookiePreference() {
  return (
    <Flex direction='row' >
    
    <Stack p="4" width='200px' border='1px solid #5e34eb' m="4 "  borderRadius="sm">
    <RiUserFill color='#5e34eb' />
      <Stack>
        <Text fontWeight="semibold">For myself</Text>
        
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          While better. Think more clearly. Stay organized.
        </Text>
      </Stack>
    </Stack>

    <Stack p="4" width='200px' boxShadow="lg" m="4" borderRadius="sm">
    <HiUserGroup />
      <Stack>
        <Text fontWeight="semibold">With my team</Text>
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          Wikis, docs, tasks & projects, all in one place.
        </Text>
      </Stack>
    </Stack>
    </Flex>
  );
}