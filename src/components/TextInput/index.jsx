import React from 'react'

export default function TextInput(props){


    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="message">Message</label>
                </div>
                <div>
                    <textarea name="message" id="message" cols="30" rows="10" onChange={(e)=>props.handleChange(e.currentTarget.value)}>

                    </textarea>
                </div>
                <div>
                    <button>
                        Share
                    </button>
                </div>
            </form>
        </div>
    )
}