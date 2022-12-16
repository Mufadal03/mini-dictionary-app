import * as data from "./actionTypes"

const initialState = {
    Loading: false,
    data: [],
    Error: false,
    ErrorMessage:null
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type){
        default:return state
    }
}