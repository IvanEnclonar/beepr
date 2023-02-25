import styles from '@/styles/Order.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'


export default function order() {
    return (
        <div className={styles.background}>
            <div className={styles.swipeSymbolLeft}><DeleteIcon sx={{ fontSize: 50 }} /></div>
            <div className={styles.container}>
                <div className={styles.title}>Ivan Enclonar</div>
                <p className={styles.descripion}>Cake with icing on top. lorsum dasjkd  askdj kl askdj kl akldaj laskdj asdl kasjd lasdj lkj asd</p>
                <div className={styles.buttonsContainer}>
                    <div className="buttonContainer"><DeleteIcon sx={{ fontSize: 28 }} /></div>
                    <div className="buttonContainer"><CheckIcon sx={{ fontSize: 28 }} /></div>
                </div>
            </div>
            <div className={styles.swipeSymbolRight}><CheckIcon sx={{ fontSize: 50 }} /></div>
        </div >
    )
}
