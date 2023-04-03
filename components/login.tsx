import { useState, ChangeEvent } from 'react'
import styles from '../styles/Login.module.css'
import TextField from '@mui/material/TextField'
import Image from "next/image"


interface data {
    email: string,
    password: string,
    confirmPassword: string,
}

export default function login() {
    const [data, setData] = useState<data>({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [signUp, setSignUp] = useState(true);

    const verifyData = () => {
        if (data.email === '' || data.password === '') {
            return false;
        }
        if (signUp && data.confirmPassword === '') {
            return false;
        }
        if (signUp && data.password !== data.confirmPassword) {
            return false;
        }
        return true;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: 'e' | 'p' | 'cp') => {
        switch (type) {
            case 'e':
                setData({ ...data, email: e.target.value });
                break;
            case 'p':
                setData({ ...data, password: e.target.value });
                break;
            case 'cp':
                setData({ ...data, confirmPassword: e.target.value });
                break;
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.mask}></div>
            <div className={styles.container}>
                <div className={styles.title}>{signUp ? "Sign Up" : "Log In"}</div>
                <div className={styles.googleContainer}>
                    <Image src="/../public/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" width={50} height={50} />
                    <div>{signUp ? "Sign Up with Google" : "Log in with Gooogle"}</div>
                </div>
                <div className={styles.divider}> or </div>
                <div className={styles.inputContainer}>
                    <TextField className={styles.textField} fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={e => handleChange(e, 'e')} />
                    <TextField className={styles.textField} fullWidth id="outlined-basic" label="Password" variant="outlined" onChange={e => handleChange(e, 'p')} />
                    {signUp && <TextField className={styles.textField} fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" onChange={e => handleChange(e, 'cp')} />}
                </div>


                <div className={styles.buttonContainer}>SUBMIT</div>
                <div className={styles.footer}>{signUp ? "Already have an account?" : "Dont have an account?"}<div className={styles.footerLink} onClick={() => { setSignUp(!signUp) }}>{signUp ? "Login" : "Sign Up"}</div></div>
            </div>
        </div>
    );
}