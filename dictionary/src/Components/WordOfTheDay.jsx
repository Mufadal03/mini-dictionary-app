import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingComp from './LoadingComp'

const WordOfTheDay = () => {
  const {Data,Loading,Error,ErrorMessage} = useSelector((state) => {
        return {
                Data: state.WordOfTheDay.data,
                Loading: state.WordOfTheDay.Loading,
                Error: state.WordOfTheDay.Error,
                ErrorMessage:state.WordOfTheDay.ErrorMessage
            }
  })
  if (Loading) {
    return <LoadingComp />
  }
  const singleData = Data?.find((item, i) => i == 1)
  return (
    <Flex direction={"column"} alignItems="center" gap="1rem" py='2rem'>
      <Heading fontFamily={"cursive"} fontWeight="md">Word Of The Day</Heading>
      <Flex direction={"column"} border="2px solid" gap="1rem" padding={"2rem"}>
      <Text textAlign={"center"} fontSize="2xl" fontFamily={"cursive"}>{singleData?.date }</Text>
        <Text fontSize="2xl" fontFamily={"cursive"}>Word :<Text textTransform={"uppercase"} as="span"> {singleData?.word}</Text></Text>
        <Text fontSize="2xl" fontFamily={"cursive"}>Meaning : {singleData?.mean}</Text>
        <Text fontSize="2xl" fontFamily={"cursive"}>Type : { singleData?.type}</Text>
      </Flex>
    </Flex>
  )
}

export default WordOfTheDay