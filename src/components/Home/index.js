import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Rehearsely from '../../assets/images/Rehearsely.png'

const Home = () => { 
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['J','o','n','a','t','h','a','n']
  // const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

  useEffect(() => {  
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
                clearTimeout(timeoutId)
            }
}, [])
  

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span> &nbsp; 
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        </h1>
        <h2>Web Developer / Computer Science Student / Dancer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <div className="project">
        <h3>My Projects</h3>
        <a href="https://final-project-chiyanz.vercel.app/" target='_blank'>
          <h4>Rehearsely</h4>
          <p>rehearsal event management app</p>
          <img className="object-contain h-96 rounded-lg" src={Rehearsely} alt={'calendar project screenshot'} ></img>
        </a>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
} 

export default Home 
