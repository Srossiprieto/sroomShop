import styles from './home.module.css';
import Button from '../../components/Ui/Button/Button';
import RightSvg from '../../assets/Icons/right';

function Home() {
  return (
    <>
    <div className={styles.containerGeneral}>
      <div className={styles.containerHome}>
        <div className= {styles.containerFlex}>
          <div className= {styles.containerText}>
            <h1>Home Page</h1>
            <Button>
                <RightSvg />
                Click me
              </Button>
          </div>
          <div className= {styles.containerImg}>
            <img src='' alt="img" />
          </div>
           
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;