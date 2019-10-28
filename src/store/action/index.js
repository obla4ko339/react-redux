export const SET_MAX_COUNT = "SET_MAX_COUNT";
export const SET_MESSAGE = "SET_MESSAGE"

export const setMaxCount = (maxCount) => ({
    type:SET_MAX_COUNT,
    data:2
})

export const setMessage = (text)=>({
    type:SET_MESSAGE,
    data:2
})