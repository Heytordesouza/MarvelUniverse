import { useRouter } from 'next/router'
import Image from 'next/image'
import marvelEdit from "../../../public/marvelEdit.png"
import styles from "./header.module.css"

export default function Header(props) {

    const { search, ordination, setSearch, setOrdination } = props

    const router = useRouter()

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onChangeOrdination = (e) => {
        setOrdination(e.target.value)
    }

    return (
        <>
            {router.asPath === '/' ?
                <>
                    <Image 
                        className={styles.imageMarvel} 
                        src={marvelEdit}
                        alt="marvel" 
                    />
                    <div className={styles.inputContainer}>
                        <label className={styles.name}>Filme ou Série</label>
                        <input type="text" placeholder="Buscar por nome" onChange={onChangeSearch} value={search} />
                    </div>
                    <div className={styles.ordinationContainer}>
                        <label className={styles.ordem}>
                            <p>Ordenação:</p>
                            <select value={ordination} onChange={onChangeOrdination}>
                                <option value="releaseOrder">Ordem de Lançamento</option>
                                <option value="chronologicalOrder">Ordem Cronológica</option>
                            </select>
                        </label>
                    </div>
                </>
                :
                <Image 
                    className={styles.imageMarvel} 
                    src={marvelEdit}
                    alt="marvel" 
                />
            }
        </>
    )
}

