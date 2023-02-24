import styles from '@/styles/Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu'

export default function navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>Beepr</div>
            <div className={styles.button}><MenuIcon fontSize="large" /></div>
        </nav>
    )
}
