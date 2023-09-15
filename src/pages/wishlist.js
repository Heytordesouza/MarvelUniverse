import { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'
import Header from '../components/Header/header'

export default function wishlist() {
    const context = useContext(AppContext)

    const { filmsList, setFilmsList, consultItem } = context

    const onRemoveTotal = (movie) => {

        const filterDelete = filmsList.filter((item) => item.id !== movie.id)

        const turnString = JSON.stringify(filterDelete)
        localStorage.setItem("local", turnString)
        setFilmsList(filterDelete)
    }

    useEffect(() => {
        consultItem()
    }, [])

    return (
        <>
            <Header />
            {filmsList.map((movie) => {
                return (
                    <>

                        <div>{movie.title}</div>
                        <div>{movie.synopsis}</div>
                        <button onClick={() => onRemoveTotal(movie)}>EXCLUIR</button>
                        <br></br>
                    </>
                )
            })}
        </>
    )


}