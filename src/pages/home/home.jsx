import styles from './home.module.css'
import About from '../about/about'
function home() {
  return (
    <>
          <div className={styles.homeDiv}>
            <h1>Home</h1>
          </div>
            <About />

    </>
    
  )
}

export default home
