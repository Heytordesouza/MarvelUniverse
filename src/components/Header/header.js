import { useRouter } from 'next/router'
import Image from 'next/image'
import marvelEdit from "../../../public/marvelEdit.png"
import styles from "./header.module.css"
import Link from "next/link";

export default function Header(props) {

    const { search, ordination, setSearch, setOrdination, selectedType, setSelectedType } = props

    const router = useRouter()

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onChangeOrdination = (e) => {
        setOrdination(e.target.value)
    }

    return (
        <>
            <main className={styles.main}>
                <Image
                    className={styles.imageMarvel}
                    src={marvelEdit}
                    alt="marvel"
                />
                {router.asPath === '/' ?
                    <>
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
                        <div className={styles.typesContainer}>
                            <label className={styles.types}>
                            <p>Filmes por Tipo:</p>
                                <select
                                    value={selectedType}
                                    onChange={e => setSelectedType(e.target.value)}
                                >
                                    <option value="">Todos</option>
                                    <option value="Filme">Filme</option>
                                    <option value="Série">Série</option>
                                    <option value="Curta">Curta</option>
                                </select>
                            </label>
                        </div>

                        <Link className={styles.favorite} href='/favorites'>Favoritos</Link>
                    </>
                    :
                    router.asPath === '/favorites' ?
                        <>
                            <div className={styles.links}>
                                <Link className={styles.linkHomePage} href='/'>Página Inicial</Link>
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.links}>
                                <Link className={styles.linkHomePage} href='/'>Página Inicial</Link>
                                <Link className={styles.linkFavorite} href='/favorites'>Favoritos</Link>
                            </div>
                        </>
                }
            </main>
        </>
    )
}

