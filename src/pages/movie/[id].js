import { useContext } from "react";
import { useRouter } from "next/router";
import AppContext from '../../components/AppContext'

export default function Movie() {

    const context = useContext(AppContext);
    const { films, onAdd } = context;

    const { query } = useRouter();
    const filmId = query?.id;

    return (
        <>
            {films.map((movie) => {
                return (
                    <>
                        {movie.id === filmId &&
                            <>
                                <div>{movie.title}</div>
                                <div>{movie.synopsis}</div>
                                <button onClick={() => onAdd(movie)}>Adicionar</button>
                                {console.log(movie)}
                            </>
                        }
                    </>
                )
            })}
        </>
    )
}