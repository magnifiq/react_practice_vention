/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Form.css'

export default function Form() {
  const [value, setValue] = useState('')
  const [messeges, setMesseges] = useState([])
  const changeInputMessage = (e) => {
    setValue(e.target.value)
  }

  const sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
      setMesseges([...messeges, value])
      setValue('')
    }
  }
  return (
    <>
      <div className="chat">
        <div className="messege_container">
          {messeges.map((messege, idx) => (
            <div key={idx} className="messege_div">
              {messege}
            </div>
          ))}
        </div>
      </div>
      <input
        className="input-message"
        type="text"
        onChange={changeInputMessage}
        value={value}
        onKeyPress={sendMessageOnEnter}
      />
    </>
  )
}
