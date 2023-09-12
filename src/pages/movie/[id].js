import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDTzrhi_2NswWKirKVwumQb4cdjxTVTi4A",
    authDomain: "fir-marvel-12e8c.firebaseapp.com",
    projectId: "fir-marvel-12e8c",
    storageBucket: "fir-marvel-12e8c.appspot.com",
    messagingSenderId: "477200830039",
    appId: "1:477200830039:web:ffedb6d34beeeb60eddd12"
});

export default function Movie() {
    const { id } = useRouter();

    

    const [films, setFilms] = useState([]);

    const db = getFirestore(firebaseApp);
    const filmeCollectionRef = collection(db, "filmes");
    const q = query(filmeCollectionRef);

    useEffect(() => {
        const getFilms = async () => {
            const data = await getDocs(q)
            setFilms(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
        };
        getFilms();
    }, []);


    return (
        <>
            {films.map((movie) => {
                {movie.id === id ?
                    <>
                        <div>{movie.title}</div>
                        <div>{movie.synopsis}</div>
                    </>
                    :
                    <div>Nada encontrado</div>
                    
                }
            })}

        </>
    )
}