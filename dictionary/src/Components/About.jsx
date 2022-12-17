import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
      <Flex w='100%' p='1rem'justifyContent={"center"}> 
       <Text fontSize={"xl"} fontStyle="italic" fontFamily={"cursive"}> <Link href='https://github.com/Mufadal03' isExternal>Mufadal Sadriwala</Link></Text>
    </Flex>
  )
}

export default About