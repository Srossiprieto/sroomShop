import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <div className={styles.container}>
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout
