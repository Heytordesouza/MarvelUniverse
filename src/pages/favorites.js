import { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'
import Header from '../components/Header/header'
import styles from "../styles/favorites.module.css"
import Image from 'next/image'
import { useRouter } from "next/router";

export default function wishlist() {
    const context = useContext(AppContext);
    const { push } = useRouter();

    const { filmsList, setFilmsList, consultItem } = context

    const onRemoveTotal = (movie) => {

        const filterDelete = filmsList.filter((item) => item.id !== movie.id)

        const turnString = JSON.stringify(filterDelete)
        localStorage.setItem("local", turnString)
        setFilmsList(filterDelete)
    }

    const detalhes = (id) => {
        push(`/movie/${id}`)
    }

    useEffect(() => {
        consultItem()
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                {filmsList.map((movie) => {
                    return (
                        <section className={styles.card}>
                            <Image
                                className={styles.poster}
                                src={movie.posterImg}
                                width={35}
                                height={45}
                            />
                            <div>{movie.title}</div>
                            <button onClick={() => detalhes(movie.id)}>DETALHES</button>
                            <button onClick={() => onRemoveTotal(movie)}>EXCLUIR</button>
                        </section>
                    )
                })}
            </main>
        </>
    )


}