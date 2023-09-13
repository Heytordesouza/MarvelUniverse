import { useContext, useEffect } from 'react'
import AppContext from '../components/AppContext'

export default function wishlist() {
    const context = useContext(AppContext)

    const { filmsList } = context

    

    return (
        <>
            {filmsList.map((movie) => {
                return (
                    <>
                        <div>{movie.title}</div>
                        <div>{movie.synopsis}</div>
                    </>
                )
            })}
        </>
    )


}