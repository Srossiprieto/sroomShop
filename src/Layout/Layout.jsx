/* eslint-disable react/prop-types */

import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import styles from "./Layout.module.css"


function Layout({children}) {
  return (
    <>
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
