import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SynAnt from './SynAnt'

const Card = ({ antonyms, definitions, partOfSpeech, synonyms }) => {
  return (
      <Flex border={"1px solid"} p="1rem" direction={"column"}>
          <Heading borderBottom={"1px solid"} w="fit-content" fontSize={'2xl'} fontWeight="md" fontFamily={"cursive"} fontStyle="italic">{partOfSpeech} :-</Heading>
          <Flex direction={"column"} gap='.5rem' mt='1rem'>
              {
                  definitions.map((item, i) => {
                      if (i <= 2) return <Text key={i} fontSize={"xl"}>{ i+1}  Ex :{ item.definition}</Text>
              })
          }
          </Flex>
          {synonyms.length > 0 && <SynAnt data={synonyms } role="synonyms"/>}
          {antonyms.length>0 && <SynAnt data={antonyms} role="antonyms"/>}
          
        </Flex>
  )
}

export default Card