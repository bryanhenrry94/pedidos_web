import Image from "next/image";
import styles from './styles.module.css'
import Logo from '../../../public/dires-logo.png'
import SendMailIcon from '../../../public/send-mail.svg'
import Link from "next/link";

export default function SendMail() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <Image className={styles.logo} src={Logo} alt="Logo"></Image>
                    <h1 className={styles.title}>Email has been sent!</h1>
                    <p className={styles.subtitle}>Please check your inbox for instruccions on how to reset the password</p>
                    <div className={styles.emailIcon}>
                        <Image src={SendMailIcon} alt="Logo"></Image>
                    </div>


                    <button className={styles.primaryButton}>Login</button>

                    <p className={styles.resent}>
                        <span>Didn't receive the email?</span>
                        &nbsp;
                        <Link href="#">Resent</Link>
                    </p>
                </div>
            </div>
        </>
    )
}