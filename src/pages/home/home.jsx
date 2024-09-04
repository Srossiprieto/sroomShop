import styles from './home.module.css';
import About from '../about/about';
import Button from '../../components/Ui/Button/Button';
import RightSvg from '../../assets/Icons/right';


function Home() {
  return (
    <>
    <div className={styles.containerGeneral}>
      <div className={styles.containerHome}>
        <div className= {styles.containerFlex}>
          <h1>Home Page</h1>
            <Button>
              <RightSvg />
              Click me
            </Button>
        </div>
        <div className= {styles.containerFlex}>
          <h1>Home Page</h1>
            <Button>
              <RightSvg />
              Click me
            </Button>
        </div>
      </div>
        <About />
    </div>
    </>
  );
}

export default Home;