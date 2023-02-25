import styles from '@/styles/Queue.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import QrCodeIcon from '@mui/icons-material/QrCode'
import Order from '../../components/order'
import Button from '@mui/material/Button'


export default function index() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.queueContainer}>
                    <div className={styles.queueName}>Name of Queue</div>
                    <div className="buttonContainer">
                        <QrCodeIcon />
                    </div>
                </div>
                <div className="buttonContainer"><MenuIcon fontSize="large" /></div>
            </nav>
            <Order />
            <div className={styles.addContainer}>
                <div className={styles.addButton}>
                    ADD AN ORDER
                </div>
            </div>
        </div>
    )
}
