import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { db } from '../util/firebase'
import ClearIcon from '@mui/icons-material/Clear'
import Menu from '../components/menu'

export default function Home() {
  const [form, setForm] = useState(false);
  const [menu, setMenu] = useState(false);
  const [queueName, setQueueName] = useState("");


  const addQueue = () => {
    db.collection("user312903").doc(queueName).set({
      name: queueName,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }




  return (
    <>
      <Head>
        <title>Beepr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar setMenu={setMenu} menu={menu} />
        <h2 className={styles.mainText}>Create a queue and notis people!</h2>
        <div className={styles.card} onClick={() => { setForm(!form) }}>
          <AddIcon sx={{ fontSize: 150 }} />
          <div className={styles.cardText}>Create</div>
        </div>


        {/* Menu Form */}
        {menu && <Menu setMenu={setMenu} menu={menu} />}

        {/* Queue Name form */}
        <div className={form ? styles.openForm : styles.closeForm}>
          <div className={styles.mask} onClick={() => { setForm(!form) }}></div>
          <div className={styles.formBody}>
            <div className={styles.formExit}>
              <div className="buttonContainer" onClick={() => { setForm(!form) }}>
                <ClearIcon sx={{ fontSize: 35 }} />
              </div>
            </div>
            <div className={styles.formInput}>
              <TextField fullWidth id="outlined-basic" label="Queue Name" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQueueName(e.target.value) }} />
            </div>
            <Button variant="contained" className={styles.formButton} onClick={() => { addQueue() }}>Submit</Button>
          </div>
        </div>
      </main>
    </>
  )
}
