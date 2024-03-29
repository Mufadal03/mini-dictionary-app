import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWord } from '../redux/SearchRedux/action'
import ErrorComp from './Error'

const SearchBar = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const Error = useSelector(state => state.SearchReducer.Error)
  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }
  const handleApiCall = () => {
    if(text=="")return
    dispatch(getWord(text))
  }
  useEffect(() => {
    let running = setTimeout(() => {
      handleApiCall()
    }, 500)
    return ()=>clearTimeout(running)
  }, [text])
  return (
    <>
      <Flex justifyContent={"center"}  p="2rem">
          <Input value={text} fontFamily="cursive" onChange={(e)=>handleChange(e)} placeholder="Search Word" type='search' borderRadius="none" _focus={{borderColor:"white"}} h="50px" fontSize={"2xl"} w="100%"/>
      </Flex>
      {Error && <ErrorComp />}
      </>
  )
}

export default SearchBar