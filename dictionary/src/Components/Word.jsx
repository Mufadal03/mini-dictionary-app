import React from 'react'
import { useSelector } from 'react-redux'

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
    console.log("MeaningsArray", meanings)
    console.log("Phot", phonetics)
    console.log("Word",word)
  return (
    <div>Word</div>
  )
}

export default Word