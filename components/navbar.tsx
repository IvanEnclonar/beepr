import styles from '@/styles/Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu'

export default function navbar() {
    return (
        <nav className={styles.container}>
            <div className="logo">Beepr</div>
            <div className="buttonContainer"><MenuIcon fontSize="large" /></div>
        </nav>
    )
}
