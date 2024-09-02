import styles from './Button.module.css';


function Button() {
  return (
    <>
        <div className={styles.container}>
            <button className={styles.button}>Click me</button>
        </div>
      
    </>
  )
}

export default Button
