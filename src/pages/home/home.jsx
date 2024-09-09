import styles from './home.module.css';
import Button from '../../components/Ui/Button/Button';
import RightSvg from '../../assets/Icons/right';
import RightSvg2 from '../../assets/Icons/right2';
import bannerHero from '../../../public/Img/bannerHero.webp';
import bannerHeroPhone from '../../../public/Img/bannerHeroPhone.webp';
import About from '../about/about';
import ButtonSecondary from '../../components/Ui/ButtonSecondary/ButtonSecondary';

import BrandSlider from '../../components/Slider/SliderBrands';


function Home() {
  return (
    <>
      <div className={styles.containerGeneral}>
        <div className={styles.containerHome}>
          <div className={styles.containerFlex}>
            <div className={styles.containerText}>
              <h1>Productos tecnológicos de la mejor calidad<span>.</span></h1>
              <div className={styles.containerButtons}>
                <Button>
                  Ver más
                  <RightSvg />
                </Button>
                <ButtonSecondary>
                  Contactanos
                  <RightSvg2 />
                </ButtonSecondary>
              </div>
            </div>
            <div className={styles.containerImg}>
              <img src={bannerHero} alt="Vision Pro apple" />
              <img src={bannerHeroPhone} alt="Vision Pro apple" />
            </div>
          </div>
        </div>
        <BrandSlider/>
        <About />
      </div>
    </>
  );
}

export default Home;