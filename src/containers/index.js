import { connect } from 'react-redux'

import Messanger from '../components/Messenger'
import { setMaxCount, setMessage } from '../store/action'


const  mapStateToProps = (state) =>({
    currentCount:state.currentCount,
    maxCount:state.maxCount
})

const mapDispatchToProps = (dispatch)=>({
    handleChange:(text)=>{
        dispatch(setMessage(text))
    },
    handleClick:(count)=>{
        dispatch(setMaxCount(count))
    }
})

export const MessagerContainer = connect(mapStateToProps, mapDispatchToProps)(Messanger)