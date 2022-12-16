import * as data from "./actionTypes"
import axios from 'axios'


export const getWord = (word) => dispatch => {
    dispatch({ type: data.GET_WORD_REQUEST })
    axios.get(process.env.SEARCH_URL+word)
        .then((r) => {
            console.log(r)
            dispatch({ type: data.GET_WORD_SUCCESS, payload:r.data})
        })
        .catch((e) => {
            console.log(e)
        dispatch({type:data.GET_WORD_FAILURE,payload:e})
    })
}