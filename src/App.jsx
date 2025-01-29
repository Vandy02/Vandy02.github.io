
import styles from './App.module.css'
import About from './components/About/About'
import Certificate from './components/Certificates/Certificate'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Story from './components/Story/Story'

function App() {
  

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
    
    </div>
  )
}

export default App
