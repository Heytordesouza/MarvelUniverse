import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTzrhi_2NswWKirKVwumQb4cdjxTVTi4A",
  authDomain: "fir-marvel-12e8c.firebaseapp.com",
  projectId: "fir-marvel-12e8c",
  storageBucket: "fir-marvel-12e8c.appspot.com",
  messagingSenderId: "477200830039",
  appId: "1:477200830039:web:ffedb6d34beeeb60eddd12"
});

export default function Home() {

  const [filmes, setFilmes] = useState([]);
  
  const db = getFirestore(firebaseApp);
  const filmeCollectionRef = collection(db, "filmes");
  
  useEffect(() => {
    const getFilmes = async () => {
      const data = await getDocs(filmeCollectionRef)
      setFilmes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    };
    getFilmes();
  }, []);

  return (
    <main>
      <ul>
        {filmes.map((filme) => {
          return (
            <div key={filme.id}>
              <li>{filme.titulo}</li>
              <li>{filme.dataDeLancamento}</li>
              <li>{filme.bilheteriaUS$}</li>
            </div>
          )
        })}
      </ul>
    </main>
  )
}
