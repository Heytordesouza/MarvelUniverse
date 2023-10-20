import { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'
import Header from '../components/Header/header'
import Footer from "../components/Footer/footer";
import styles from "../styles/favorites.module.css"
import Image from 'next/image'
import { useRouter } from "next/router";
import lupa from "../../public/lupa.png"
import excluir from "../../public/excluir.png"

export default function wishlist() {
    const context = useContext(AppContext);
    const { push } = useRouter();

    const { filmsList, removeFavorite, consultItem } = context

    const detalhes = (id) => {
        push(`/movie/${id}`)
    }

    useEffect(() => {
        consultItem()
    }, [])

    return (
        <main>
            <Header />
            <section className={styles.section}>
                {filmsList.length > 0 ? (
                    <>
                        {filmsList.map((movie) => {
                            return (
                                <article key={movie.id} className={styles.card}>
                                    <Image
                                        className={styles.poster}
                                        src={`/poster/${movie.id}.jpg`}
                                        width={45}
                                        height={45}
                                        alt="poster"
                                    />
                                    <div className={styles.title}>{movie.title}</div>
                                    <div className={styles.buttons}>
                                        <Image src={lupa} alt="lupa" className={styles.details} onClick={() => detalhes(movie.id)}/>
                                        <Image src={excluir} alt="remove" className={styles.remove} onClick={() => removeFavorite(movie)}/>
                                    </div>
                                </article>
                            )
                        })}
                    </>
                )
                :
                (<section className={styles.notFound}>Nenhum filme, série ou curta favoritado</section>)
                }
            </section>
            <Footer />
        </main>
    )
}