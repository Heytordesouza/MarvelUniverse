import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";
import { Main, Section } from "./index.styles";
import youtube from "../public/youtube.png";
import disneyplus from "../public/disneyplus.jpg";
import netflix from "../public/netflix.jpg";
import hbo from "../public/hbo.jpg";
import amazon from "../public/amazon.png";
import Image from "next/image";

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
    <Main>
        {filmes.map((filme) => {
          return (
            <Section key={filme.id}>
              <div className="container">
                <img className="poster" src={filme.posterImg} alt="Poster"/>
                <div className="information">

                  <h2>{filme.titulo}</h2>
                  <div className="subTitle">
                    <span>{filme.notaIMDB}</span>
                    <span>{filme.dataDeLancamento}</span>
                    <span>{filme.bilheteriaUS$}</span>
                  </div>

                  <span>{filme.genero}</span>

                  <p>{filme.sinopse}</p>

                  <div className="links">
                    <a href={filme.linkTrailer} target="_blank"><Image src={youtube} width={50} height={50}/></a>
                    <a href={filme.linkFilme} target="_blank" >
                      {filme.streaming === "disney" 
                        ? <Image src={disneyplus} width={50} height={50}/> 
                        : filme.streaming === "netflix"
                        ? <Image src={netflix} width={50} height={50}/>
                        : filme.streaming === "hbo"
                        ? <Image src={hbo} width={50} height={50}/>
                        : <Image src={amazon} width={50} height={50}/>
                      }
                    </a>
                  </div>
                </div>
              </div>
            </Section>
          )
        })}
    </Main>
  )
}
