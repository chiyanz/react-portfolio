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
      <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
    </>
  )

}

export default Portfolio