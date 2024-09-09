import React from 'react';
import IntelSvg from "../../assets/brands/Intel";
import NokiaSvg from "../../assets/brands/nokia";
import AppleSvg from "../../assets/brands/apple";
import SamsungSvg from "../../assets/brands/samsung";
import SonySvg from "../../assets/brands/sony";
import AsusSvg from "../../assets/brands/asus";
import NvidiaSvg from "../../assets/brands/nvidia";
import HpSvg from "../../assets/brands/hp";
import LgSvg from "../../assets/brands/lg";
import LogitechSvg from "../../assets/brands/logitech";

import Slider from './Slider';
import styles from './Slider.module.css';

const BrandSlider = () => {
  return (
    <>
      <Slider>
        <div className={styles.sliderItem}><IntelSvg /></div>
        <div className={styles.sliderItem}><NokiaSvg /></div>
        <div className={styles.sliderItem}><AppleSvg /></div>
        <div className={styles.sliderItem}><SamsungSvg /></div>
        <div className={styles.sliderItem}><SonySvg /></div>
        <div className={styles.sliderItem}><AsusSvg /></div>
        <div className={styles.sliderItem}><NvidiaSvg /></div>
        <div className={styles.sliderItem}><HpSvg /></div>
        <div className={styles.sliderItem}><LgSvg /></div>
        <div className={styles.sliderItem}><LogitechSvg /></div>
      </Slider>
    </>
  );
}

export default BrandSlider;