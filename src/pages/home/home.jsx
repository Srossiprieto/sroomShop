import styles from './home.module.css';
import Button from '../../components/Ui/Button/Button';
import RightSvg from '../../assets/Icons/right';
import bannerHero from '../../../public/Img/bannerHero.webp';
import About from '../about/about';
function Home() {
  return (
    <>
    <div className={styles.containerGeneral}>
      <div className={styles.containerHome}>
        <div className= {styles.containerFlex}>
          <div className= {styles.containerText}>
            <h1>Productos tecnológicos de la mejor calidad<span>.</span></h1>
              <Button>
                Ver más
                <RightSvg />
              </Button>
          </div>
          <div className= {styles.containerImg}>
            <img src={bannerHero} alt="Vision Pro apple" />
          </div>
        </div>
      </div>
      <About />
    </div>
    </>
  );
}

export default Home;