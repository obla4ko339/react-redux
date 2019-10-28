import { SET_MAX_COUNT,SET_MESSAGE } from "../action";


const initialState = {
    currentCount:0,
    maxCount:140
}

export default function messengerReducer(state=initialState, action){
    switch(action.type){
        case SET_MAX_COUNT:
            return {
                ...state, ...{maxCount:action.data}
            }
        case SET_MESSAGE:
            return {
                ...state, ...{currentCount:action.data.length}
            }
            
        default:
        return state
    }
}

