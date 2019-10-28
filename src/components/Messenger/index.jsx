import React from 'react'

import CountControl from '../CountControl'
import TextInput from '../TextInput'



export default function Messanger(props){
    
    return(
        <div>
            <CountControl handleClick={props.handleClick} />
            <TextInput  handleChange={props.handleChange}/>
            <span>
                {
                    `${props.currentCount}/${props.maxCount}`
                }
            </span>
        </div>
    )
}