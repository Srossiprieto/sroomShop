import styles from './Search.module.css'
import SearchSvg from '../../assets/Icons/search' 

function Search() {
  return (
    <>
     <div className={styles.search}>
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" placeholder="Search for products..." name="search" />
            <SearchSvg className={styles.icon}/>
        </div>
    </div> 
    </>
  )
}

export default Search
