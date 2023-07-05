import Image from "next/image";
import styles from './styles.module.css'
import Logo from '../../../public/dires-logo.png'

export default function RecoveryPassword() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <Image className={styles.logo} src={Logo} alt="Logo"></Image>
                    <h1 className={styles.title}>Create a new password</h1>
                    <p className={styles.subtitle}>Enter a new password for your account</p>
                    <form className={styles.form}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input} type="password" id="password" placeholder="*********"></input>

                        <label className={styles.label} htmlFor="new-password">Password</label>
                        <input className={styles.input} type="password" id="new-password" placeholder="*********"></input>

                        <input type="submit" value="Confirm" className={styles.primaryButton}></input>
                    </form>
                </div>
            </div>
        </>
    )
}