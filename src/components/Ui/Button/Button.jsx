import styles from './Button.module.css';


function Button({children}) {
  return (
    <>
      <button className={styles.button}>
        <p className={styles.p}>{children}</p>
      </button> 
    </>
  )
}

export default Button
