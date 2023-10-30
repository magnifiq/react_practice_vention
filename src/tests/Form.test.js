/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from '@testing-library/react'
import Form from './components/Form'

test('Form contains a div with class chat and an input with class input-message', () => {
  const { container } = render(<Form />)

  const chatDiv = container.querySelector('.chat')
  expect(chatDiv).toBeInTheDocument()

  const inputMessageInput = container.querySelector('.input-message')
  expect(inputMessageInput).toBeInTheDocument()
})
