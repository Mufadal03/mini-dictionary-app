import * as data from "./actionTypes"
import axios from 'axios'


export const getWord = (word) => dispatch => {
    dispatch({ type: data.GET_WORD_REQUEST })
    axios.get(process.env.REACT_APP_SEARCH_URL+word)
        .then((r) => {
            console.log(r.data[0])
            dispatch({ type: data.GET_WORD_SUCCESS, payload:r.data[0]})
        })
        .catch((e) => {
            console.log(e)
        dispatch({type:data.GET_WORD_FAILURE,payload:e})
    })
}