import styles from './ButtonSecondary.module.css';


function ButtonSecondary({children}) {
  return (
    <>
      <button className={styles.button}>
        <p className={styles.p}>{children}</p>
        
        </button> 
    </>
  )
}

export default ButtonSecondary
