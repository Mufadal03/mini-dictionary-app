import * as data from "./actionTypes"
import axios from 'axios'

export const getWordOfTheDay = () => dispatch => {
    dispatch({ type: data.GET_WORD_OF_THE_DAY_REQUEST })
    axios.get(process.env.REACT_APP_WORD_OF_THE_DAY_URL, {
        headers: {
            'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
        }
    }).then((r) => {
        dispatch({type:data.GET_WORD_OF_THE_DAY_SUCCESS,payload:r.data})
        
    }).catch((e) => {
        dispatch({type:data.GET_WORD_OF_THE_DAY_FAILURE,payload:e})
    })
}