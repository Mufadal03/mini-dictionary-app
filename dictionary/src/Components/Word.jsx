import { Box, Flex, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { RxSpeakerLoud } from "react-icons/rx"
import 'animate.css';
import LoadingComp from './LoadingComp'
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
  if (Loading) {
    return(<LoadingComp />)
  }
  // if (Error) {
  //   return <Error />
  // }
  // animate__infinite
  return (
    <Box fontFamily={"cursive"}>
      <Flex  alignItems={"center"} justifyContent="" py='1rem'>
        <Box flexGrow={"2"} textAlign="center"><Heading fontWeight={"md"} fontFamily="cursive">{word}</Heading></Box>
        <Box flexGrow={".5"} >{ src && <Icon className='animate__animated animate__rubberBand animate__delay-2s  animate__infinite' onClick={handleClick} cursor='pointer' h="6" w="6" as={RxSpeakerLoud} />}</Box>
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