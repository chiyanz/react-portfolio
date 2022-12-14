import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faHtml5, faCss3, faReact, faGitAlt, faJsSquare, faPython} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer who is looking for an opporunity to learn more about latest technology and to challenge myself through diverse and interesting projects. I have 8 years of background in programming, have a solid foundation in object-oriented programming with Java, then built on my knowledge with Python, C++, and most recently JavaScript. 
          </p>
          <p>
            I'm passion driven, detail oriented, and continuously working on honing my skills towards the goals I've dedicated myself to. My club involvement and team leading experience makes me a team player and capable of organization as well as management. I've taken on the role of lead project manager for multiple Hackthons and led my team to win multiple prizes. I have a strong desire to innovate, to build applications that can benefit users and create lasting impact. 
          </p>
          <p>
            If I were to define myself in one sentence, I would describe myself as meticulous, responsible, someone who is really enthusiastic about his hobbies, a curious soul with passion towards my career, and a natural perfectionist.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faJava} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06229' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faPython} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
    
  )
}

export default About