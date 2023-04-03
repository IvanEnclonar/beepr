import ClearIcon from '@mui/icons-material/Clear'
import styles from '../styles/Menu.module.css'

export default function menu(props: { setMenu: (menu: boolean) => void, menu: boolean }) {
    return (
        <div className={styles.menu}>
            <div className={styles.menuMask} onClick={() => { props.setMenu(!menu) }}></div>
            <div className={styles.menuBody}>
                <div className={styles.profPicContainer}></div>
                <div className={styles.menuEmail}>paulivanenclonar@gmail.com</div>
                <div className={styles.menuText}>Settings</div>
                <div className={styles.menuText}>Log out</div>
                <div className={styles.menuText} onClick={() => { props.setMenu(!menu) }}><ClearIcon sx={{ fontSize: 35 }} /></div>
            </div>
        </div>
    );
};