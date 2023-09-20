import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xrgwqjoj')

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form id="Contact" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message here"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

const App = () => {
  return (
    <div>
      <h1 className="contact-heading">Schedule a meeting</h1>
      <Contact />
    </div>
  )
}

export default App
