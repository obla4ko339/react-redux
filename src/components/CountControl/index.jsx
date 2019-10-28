import React from 'react'


export default function CountControl(props){
    return (
        <div>
            <form>
              <div>
                  <label htmlFor="count">Count letters: </label>
              </div>
              <div>
                  <input type="text" id="count" name="count"/>
                  <button onClick={
                                (e)=>{
                                    e.preventDefault()
                                    props.handleClick()
                                }}>Set count</button>
              </div>
            </form>
        </div>
    )
}