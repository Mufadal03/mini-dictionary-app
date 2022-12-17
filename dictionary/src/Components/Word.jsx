import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Word = () => {
    const {Data,Loading,Error,ErrorMessage} = useSelector((state) => {
        return {
                Data: state.SearchReducer.data,
                Loading: state.SearchReducer.Loading,
                Error: state.SearchReducer.Error,
                ErrorMessage:state.SearchReducer.ErrorMessage
            }
    })
    const { meanings, phonetics, word } = Data
  const Audio_src = phonetics.find((item) => item.audio != "")
  // const { audio } = Audio_src
  // console.log(audio)
  return (
    <Box border="2px solid" fontFamily={"cursive"}>
      <Flex border="2px solid" alignItems={"center"} justifyContent="" py='1rem'>
        <Box flexGrow={"2"} textAlign="center"><Heading fontWeight={"md"} fontFamily="cursive">{word}</Heading></Box>
        <Box flexGrow={".5"} textAlign="center">Sound Icon audio</Box>
      </Flex>
      <Flex direction={"column"} gap=".5rem" border={"2px solid"} p="2rem">
        {
        meanings.length > 0 && meanings.map((item,i) => (
          <Card key={i} {...item} />
        ))
      }
      </Flex>
    </Box>
  )
}

export default Word