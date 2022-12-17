import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import '../App.css';
const ErrorComp = () => {
  return (
    <Flex justifyContent='center' direction={"column"} alignItems="center" gap="1rem">
          <span className="loader"></span>
          <Text fontFamily={"cursive"} fontSize='xl'>Word not found</Text>
  </Flex>
  )
}

export default ErrorComp