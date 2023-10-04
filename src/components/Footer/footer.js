import Image from "next/image"
import styles from "./footer.module.css"
import github from "../../../public/github.jpg"
import linkedin from "../../../public/linkedin.png"

export default function Footer() {

    return (
        <main className={styles.main}>
            <div className={styles.createdBy}>
                <p>Criado por:</p>
                <div className={styles.created}>Heytor de Souza</div>
            </div>
            <div className={styles.containerContacts}>
                <p>Contatos:</p>
                <div className={styles.contacts}>
                    <a href="https://github.com/Heytordesouza" target="_blank">
                        <Image src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/heytor-de-souza" target="_blank">
                        <Image src={linkedin} alt="GitHub" />
                    </a>
                </div>
            </div>
        </main>
    )
} 