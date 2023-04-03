import styles from '../../../styles/CLanding.module.css'

export default function CLanding() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className="logo">Beepr</div>
            </nav>
            <div className={styles.container}>
                <p className={styles.text}>You are 4th customer to Jerry's Bakery!</p>
            </div>
        </div>
    );
}