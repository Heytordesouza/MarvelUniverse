import Image from "next/image"
import { Main } from "../styles/footer.styles"
import github from "../../public/github.jpg"
import linkedin from "../../public/linkedin.png"

export default function Footer () {

    return(
        <Main>
            <div className="criadoPor">
                <p>Criado por:</p>
                <div className="criador">Heytor de Souza</div>
            </div>
            <div className="containerContatos">
                <p>Contatos:</p>
                <div className="contatos">
                    <a href="https://github.com/Heytordesouza" target="_blank"><Image src={github} alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/heytor-de-souza" target="_blank"><Image src={linkedin} alt="GitHub"/></a>
                </div>
            </div>
        </Main>
    )
} 