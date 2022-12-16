import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const SearchBar = () => {
  return (
      <Flex justifyContent={"center"}  p="2rem">
          <Input placeholder="Search Word" type='search' borderRadius="none" _focus={{borderColor:"white"}} h="50px" fontSize={"2xl"} w="90%"/>
    </Flex>
  )
}

export default SearchBar