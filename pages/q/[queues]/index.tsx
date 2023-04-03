import styles from '@/styles/Queue.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import QrCodeIcon from '@mui/icons-material/QrCode'
import { useState } from 'react';
import Order from '../../../components/order'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear'
import { useRouter } from "next/router"


export default function index() {
    const [openForm, setOpenForm] = useState(false);
    const [openQR, setOpenQR] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();

    console.log("ID: ", router.query.queues);



    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.queueContainer}>
                    <div className={styles.queueName}>Name of Queue</div>
                    <div className="buttonContainer" onClick={() => { setOpenQR(!openQR) }}>
                        <QrCodeIcon sx={{ fontSize: 32 }} />
                    </div>
                </div>
                <div className="buttonContainer" onClick={() => { setOpenMenu(!openMenu) }}><MenuIcon fontSize="large" /></div>
            </nav>

            <div className={styles.orderContainer}>
                <Order title="Order No: 1" online={false} content="Lorem aksdj kamd k alksd sdlkj lkasd kl asdlkj ad kljasd aksdl " />
                <Order title="Order No: 2" online={true} content="Lorem aksdj kamd k alksd sdlkj lkasd kl asdlkj ad kljasd aksdl " />
                <Order title="Order No: 2" online={true} content="Lorem aksdj kamd k alksd sdlkj lkasd kl asdlkj ad kljasd aksdl " />
                <Order title="Order No: 2" online={true} content="Lorem aksdj kamd k alksd sdlkj lkasd kl asdlkj ad kljasd aksdl " />
            </div>

            <div className={styles.addContainer}>
                <div className={styles.addButton} onClick={() => { setOpenForm(!openForm) }}>
                    ADD AN ORDER
                </div>
            </div>

            {/* Menu Form */}
            {openMenu &&
                <div className={styles.formContainer}>
                    <div className={styles.menuMask} onClick={() => { setOpenMenu(!openMenu) }}></div>
                    <div className={styles.menuBody}>
                        <div className={styles.menuText}>Go back to home</div>
                        <div className={styles.menuText}>Settings</div>
                        <div className={styles.menuText} onClick={() => { setOpenMenu(!openMenu) }}><ClearIcon sx={{ fontSize: 35 }} /></div>
                    </div>
                </div>
            }

            {/* QR Code Form */}
            {openQR && <div className={styles.formContainer}>
                <div className={styles.formMask} onClick={() => { setOpenQR(!openQR) }}></div>
                <div className={styles.QRBody}>
                    <div className={styles.QRButtonContainer} onClick={() => { setOpenQR(!openQR) }}>
                        <div className="buttonContainer">
                            <ClearIcon sx={{ fontSize: 35 }} />
                        </div>
                    </div>
                    {/* <Image
                        src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
                        alt="Sample QR code"
                    /> */}
                </div>
            </div>}

            {/* Add an order form body */}
            <div className={openForm ? styles.formContainer : styles.formClose}>
                <div className={styles.formMask} onClick={() => { setOpenForm(!openForm) }}></div>
                <div className={styles.formBody}>
                    <div className={styles.exitContainer} onClick={() => { setOpenForm(!openForm) }}>
                        <div className="buttonContainer">
                            <ClearIcon sx={{ fontSize: 35 }} />
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <TextField fullWidth id="outlined-basic" label="Order Name" variant="outlined" />
                        <TextField fullWidth id="outlined-basic" label="Description" variant="outlined" />
                    </div>
                    <Button variant="contained" className={styles.formButton}>Create</Button>
                </div>
            </div>
        </div>
    )
}
