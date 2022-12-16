import * as data from "./actionTypes"

const initialState = {
    Loading: false,
    data: [],
    Error: false,
    ErrorMessage:null
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
         case data.GET_WORD_REQUEST: {
            return {
                ...state,
                Loading:true
            }
        }
        case data.GET_WORD_SUCCESS: {
            return {
                ...state,
                Loading: false,
                data: [...payload]
            }
        }
        case data.GET_WORD_FAILURE: {
            return {
                ...state,
                Loading: false,
                Error: true,
                ErrorMessage:payload
            }
        }
        default:return state
    }
}