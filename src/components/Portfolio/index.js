import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Rehearsely from '../../assets/images/Rehearsely.png'
import TwitchDashboard from '../../assets/images/Twitch-dashboard.png'

const Portfolio = () => { 

  const [letterClass, setLetterClass] = useState('text-animate')
  const [showModal, setShowModal] = useState({})

  const nameArray = ['M', 'Y', ' ', 'P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const projects = [
    {
      name: "Rehearsely",
      description: `Rehearsely
      A calendar sharing web app that allows users to merge their schedules and find the best time to meet for dance rehearsals
      Ever been in a friend group and struggled to find a time where everyone was free? Now imagine that but with a dance team that has 10+ members!
      
      Rehearsely is a web application that allows users to create their calendar, and then share their calendar with others. Users can create events, send invites, receive invites, and to respond to an invitation with their schedule. Lets say your director wants to add an additional rehearsal that is outside of usual rehearsal hours, they can then create an event, select a time frame to suggest for a potential rehearsal, and then invite the company members to respond by sending their schedules. After the schedules have been received, the app will highlight overlapping free-time and the director can then use that information to make a decision based on what times will work the best for company members.`,
      link: "https://final-project-chiyanz.vercel.app",
      images: [Rehearsely]
    },
    {
      name: "Twitch Dashboard",
      description: ``,
      link: "https://personalized-twitch-dashboard.chiyanz.repl.co/",
      images: [TwitchDashboard]
    }
  ]
  const Project = ({name, description, link, images}) => {
    const previewImages = images?.map((image, i) => {
      return (
        <img className="object-contain h-96 rounded-lg" src={image} alt={`project preview picture #${i}`} />
      )
    })
    return (
      <div className='project-element'>
        <h2>{name}</h2>
        <p>{description}</p>
        <a target="_blank" rel="noreferrer" href={link}>View project</a>
        {previewImages && 
        <div className='images-container'>{previewImages}</div>}
      </div>
    )
  }

  const projectElements = projects.map((obj) => {
    <Project name={obj.name} description={obj.description} link={obj.link} images={obj.images}></Project>
  })

  return (
    <>
    <div className='container portfolio-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <div className='projects-container'>
        {projectElements}
        </div>
      </div>

    </div>
    <Loader type="pacman" />
  </>
  )

}

export default Portfolio