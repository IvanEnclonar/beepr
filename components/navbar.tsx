import styles from '@/styles/Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu'

type setMenuFunction = (value: boolean) => void;

export default function navbar(props: { setMenu: setMenuFunction, menu: boolean }) {

    return (
        <>
            <nav className={styles.container}>
                <div className="logo">Beepr</div>
                <div className="buttonContainer" onClick={() => { props.setMenu(!props.menu) }}><MenuIcon fontSize="large" /></div>
            </nav>
        </>
    )
}
