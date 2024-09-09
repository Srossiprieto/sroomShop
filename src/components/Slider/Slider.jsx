
import styles from './Slider.module.css';

const Slider = ({ children}) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        {children}
        {children}
      </div>
    </div>
  );
}

export default Slider;