import './index.scss'

const Portfolio = () => { 
  const projectLink = 'https://final-project-chiyanz.vercel.app'
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'Y', ' ', 'P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']
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
    <div className='container portfolio-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

    </div>
    <Loader type="pacman" />
  </>
  )

}

export default Portfolio