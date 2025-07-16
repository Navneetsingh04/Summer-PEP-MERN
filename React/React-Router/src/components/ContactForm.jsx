import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder='Name' />
        <br />
        <input type="emai" placeholder='email' />
        <br />
        <textarea placeholder='Message'></textarea>
        <br />
        <button type='submit'>submit</button>
        <br />
      </form>
    </div>
  )
}

export default ContactForm
