/* eslint-disable react/prop-types */

import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import styles from "./Layout.module.css"
import BlurCircle from "../components/BlurCircle/BlurCircle"

function Layout({children}) {
  return (
    <>
        <BlurCircle />
            <header>
                <Navbar/>
            </header>
        <div className={styles.container}>
            <main>
                {children}
            </main>
        </div>
            <footer>
                <Footer/>
            </footer>
    </>
  )
}

export default Layout
