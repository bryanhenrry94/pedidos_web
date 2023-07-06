import Image from "next/image";
import styles from './styles.module.css';
import Logo from '../../../public/dires-logo.png'

export default function LoginPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <Image className={styles.logo} src={Logo} alt="Logo"></Image>
                    <form className={styles.form}>
                        <label className={styles.label} htmlFor="email">Email address</label>
                        <input className={styles.input} type="email" id="email" placeholder="prueba@gmail.com"></input>

                        <label className={styles.label} htmlFor="new-password">Password</label>
                        <input className={styles.input} type="password" id="new-password" placeholder="*********"></input>

                        <input type="submit" value="Log in" className={styles.primaryButton}></input>

                        <a href="" className={styles.forgotPassword}>Forgot my password</a>

                        <button className={styles.secondaryButton}>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}