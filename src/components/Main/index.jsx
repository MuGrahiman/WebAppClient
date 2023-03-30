import styles from './style.module.css'

const Main = ()=>{
    const handleLogout = ()=>{
localStorage.removeItem('token')
window.location.reload()
    }
    return(
        <div className={styles.main_container}>

            <nav className={styles.main_navbar}>
                <h1>face book</h1>
                <button className={styles.white_btn} onClick={handleLogout}>Logout</button>
                 </nav>
        </div>
    )
}

export default Main