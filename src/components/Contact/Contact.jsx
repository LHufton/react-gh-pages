import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('xrgwqjoj')

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  // Formspree contact form
  return (
    <form id="Contact" onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message"></label>
      <textarea id="message" name="message" placeholder="Enter your message" />
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
      <h1 className="contact-heading">Contact me</h1>
      <Contact />
    </div>
  )
}

export default App
