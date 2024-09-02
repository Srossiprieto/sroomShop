import styles from './home.module.css';
import About from '../about/about';
import Button from '../../components/Ui/Button/Button';
import RightSvg from '../../assets/Icons/right';
function Home() {
  return (
    <>
      <div className={styles.homeDiv}>
        <div className={styles.containerBox}>
          <a className={styles.button} data-text="hola">
            <div className={styles.containerBtn}>
              <span className={styles.emote}>🎉</span>
              <span className={styles.buttonGray}>|</span>
              <span className={styles.buttonText}>Introducing Hero Video Dialog</span>
            </div>
              <RightSvg />
          </a>
        </div>
        <h1>Home</h1> 
        <Button />
      </div>
      <About />
    </>
  );
}

export default Home;