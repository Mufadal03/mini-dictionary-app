import { Flex } from '@chakra-ui/react';
import React from 'react'
import '../App.css';
const LoadingComp = () => {
  return (
    <Flex justifyContent='center'>
       <span className="loader"></span>
  </Flex>
  )
}

export default LoadingComp