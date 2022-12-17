import { Box, Flex, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { HiSpeakerWave } from "react-icons/hi"
import { HiOutlineSearch } from "react-icons/hi"
import {RxSpeakerLoud} from "react-icons/rx"
const Word = () => {
  let src 
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
  if (Audio_src) {
    const { audio } = Audio_src
    src=audio
  }
  const handleClick = () => {
    let sound = new Audio(src)
    sound.play()
  }
  return (
    <Box fontFamily={"cursive"}>
      <Flex  alignItems={"center"} justifyContent="" py='1rem'>
        <Box flexGrow={"2"} textAlign="center"><Heading fontWeight={"md"} fontFamily="cursive">{word}</Heading></Box>
        <Box flexGrow={".5"} textAlign="center" >{ src && <Icon onClick={handleClick} cursor='pointer' h="6" w="6" as={RxSpeakerLoud} />}</Box>
      </Flex>
      <Flex direction={"column"} gap="1.5rem" p="2rem">
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