import Image from "next/image"
import styles from "./footer.module.css"
import github from "../../../public/github.jpg"
import linkedin from "../../../public/linkedin.png"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.createdBy}>
                <p>Criado por</p>
                <div className={styles.created}>Heytor de Souza</div>
            </div>
            <div className={styles.containerContacts}>
                <div className={styles.contacts}>
                    <a href="https://github.com/Heytordesouza" target="_blank">
                        <Image src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/heytor-de-souza" target="_blank">
                        <Image src={linkedin} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    )
} 