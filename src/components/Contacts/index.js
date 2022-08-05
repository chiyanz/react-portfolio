import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () =>  {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm (
        'gmail',
        'template_epdz8hq',
        refForm.current,
        'pubic key'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again.")
        }
      )
  }

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
                clearTimeout(timeoutId)
            }
  }, [])

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15} />
          </h1>
          <p>
            I am looking for software engineering internships, part-time tech roles, and web-developer positions. If you would like to know more about me please don't hesitate to contact me using the form below, or connect with me on LinkedIn. 
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' type='text' name='message' required>
                  </textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact