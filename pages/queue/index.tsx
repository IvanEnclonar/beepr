import styles from '@/styles/Queue.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import QrCodeIcon from '@mui/icons-material/QrCode'
import { useState } from 'react';
import Order from '../../components/order'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear'


export default function index() {
    const [openForm, setOpenForm] = useState(false);

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
                <div className={styles.addButton} onClick={() => { setOpenForm(!openForm) }}>
                    ADD AN ORDER
                </div>
            </div>
            <div className={openForm ? styles.formContainer : styles.formClose}>
                <div className={styles.formMask} onClick={() => { setOpenForm(!openForm) }}></div>
                <div className={styles.formBody}>
                    <ClearIcon sx={{ fontSize: 35 }} />
                    <TextField fullWidth id="outlined-basic" label="Order Name" variant="outlined" />
                    <TextField fullWidth id="outlined-basic" label="Description" variant="outlined" />
                    <Button variant="contained" className={styles.formButton}>Create</Button>
                </div>
            </div>
        </div>
    )
}
