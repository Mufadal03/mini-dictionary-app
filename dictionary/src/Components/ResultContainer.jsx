import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Word from './Word'
import WordOfTheDay from './WordOfTheDay'

const ResultContainer = () => {
    const {Data,Loading,Error,ErrorMessage} = useSelector((state) => {
        return {
                Data: state.SearchReducer.data,
                Loading: state.SearchReducer.Loading,
                Error: state.SearchReducer.Error,
                ErrorMessage:state.SearchReducer.ErrorMessage
            }
    })
  return (
      <Box  pos={'relative'}>
          {Object.keys(Data).length>0?<Word />:<WordOfTheDay />}
    </Box>
  )
}

export default ResultContainer