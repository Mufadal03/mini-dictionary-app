import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ antonyms, definitions, partOfSpeech, synonyms }) => {
    console.log(antonyms, definitions, partOfSpeech, synonyms)
    let max = 2
  return (
      <Flex border={"2px solid"} p="1rem" direction={"column"}>
          <Heading fontSize={'2xl'} fontWeight="md" fontFamily={"cursive"} fontStyle="italic">{partOfSpeech} :-</Heading>
          <Flex direction={"column"} gap='.5rem' mt='1rem'>
              {
                  definitions.map((item, i) => {
                      if (i <= max) return <Text key={i} fontSize={"xl"}>{ i+1}  Ex :{ item.definition}</Text>
              })
          }
          </Flex>
          
        </Flex>
  )
}

export default Card