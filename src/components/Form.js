import React, { useState } from 'react'

function Form() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleEmail= (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    
    setPassword('')
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={handlePassword}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form