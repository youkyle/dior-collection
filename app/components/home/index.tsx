'use client';
import Image from 'next/image'
import styles from './home.module.scss'
import diorLogo from '../../../public/images/dior-logo.svg'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        router.push("/collection");
    }

    return (
        <div className={styles.main}>
            <div className={styles.logoDiv}>
                <Image src={diorLogo} alt="Dior logo" />
            </div>
            <div className={styles.titleDiv} >
                <div className={styles.bienvenueTitle}>
                    BIENVENUE
                </div>
                <div className={styles.welcomeTitle}>
                    WELCOME
                </div>
                <div className={styles.japaneseTitle}>
                    いらっしゃいませ
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} >
                {/* <div className={styles.loginDiv}> */}
                <div className={styles.form__group}>
                    <input type="text" id="login" className={styles.form__field} placeholder='LOGIN' />
                    <label htmlFor="login" className={styles.form__label}>LOGIN</label>
                </div>
                <div className={styles.form__group}>
                    <input type="password" id="password" className={styles.form__field} placeholder='PASSWORD' />
                    <label htmlFor="password" className={styles.form__label}>PASSWORD</label>
                </div>
                <div className={styles.submitDiv}>
                    <button type='submit' name='signin' className={styles.submitButton} >LOGIN</button>
                </div>

                {/* </div> */}
            </form>
        </div >

    )
}
