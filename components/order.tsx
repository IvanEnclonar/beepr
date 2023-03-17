import styles from '@/styles/Order.module.css'
import CheckIcon from '@mui/icons-material/Check'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear'
import CampaignIcon from '@mui/icons-material/Campaign'

interface orderComponentProps {
    title: string,
    content: string,
    online: boolean,
}

export default function order(props: orderComponentProps) {
    const [options, setOptions] = useState(false);

    return (
        <div className={styles.background}>
            {/* <div className={styles.swipeSymbolLeft}><DeleteIcon sx={{ fontSize: 50 }} /></div> */}
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>{props.title}</div>
                    <div className="buttonContainer" onClick={() => { setOptions(!options) }} ><MoreVertIcon sx={{ fontSize: 32 }} /></div>
                </div>
                <div className={options ? styles.menu : styles.none}>
                    <div className={styles.mask} onClick={() => { setOptions(!options) }}></div>
                    <div className={styles.menuContent}>
                        <div className={styles.menuOption}>Edit</div>
                        <div className={styles.menuOption}>Delete</div>
                        <div className={styles.menuBottom} onClick={() => { setOptions(!options) }}><ClearIcon /></div>
                    </div>
                </div>
                <p className={styles.descripion}>{props.content}</p>
                <div className={props.online ? styles.buttonsContainerOnline : styles.buttonsContainerOffline}>
                    {props.online && <div className="buttonContainer"><CampaignIcon sx={{ fontSize: 45 }} /></div>}
                    <div className="buttonContainer"><CheckIcon sx={{ fontSize: 45 }} /></div>
                </div>
            </div>
            {/* <div className={styles.swipeSymbolRight}><CheckIcon sx={{ fontSize: 50 }} /></div> */}
        </div >
    )
}
