import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";
import { Main, Section } from "./index.styles";
import youtube from "../public/youtube.png";
import disneyplus from "../public/disneyplus.jpg";
import netflix from "../public/netflix.jpg";
import hbo from "../public/hbo.jpg";
import amazon from "../public/amazon.png";
import IMDB from "../public/IMDB.png"
import calender from "../public/calender.png"
import cash from "../public/cash.png"
import duration from "../public/duration.png"
import Image from "next/image";
import Header from "./Header/header";

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
  const [buscar, setBuscar] = useState("");
  const [ordenacao, setOrdenacao] = useState ("")

  
  
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
      <Header buscar={buscar} setBuscar={setBuscar} ordenacao={ordenacao} setOrdenacao={setOrdenacao}/>
        {filmes
        .filter((filme) => {
          return filme.titulo.toLowerCase().includes(buscar.toLowerCase())
        })
        .sort((a, b)=>{
          if(ordenacao === "ordemCronologica"){
            if(a.ordemCronologica < b.ordemCronologica){
              return -1
            } else {
              return 1
            }
          } else if(ordenacao === "ordemLancamento"){
              if(a.ordemLancamento > b.ordemLancamento){
                return 1
              } else {
                return -1
              }
          }
        })
        .map((filme) => {
          return (
            <Section key={filme.id}>
              <div className="container">
                <img className="poster" src={filme.posterImg} alt="Poster"/>
                <div className="information">

                  <h2 className="titulo">{filme.titulo}</h2>
                  <div className="generoContainer">
                    <span className="genero">{filme.genero}</span>
                  </div>

                  <div className="subTitle">
                    <div className="IMDB">
                      <Image className="imgIMDB" src={IMDB} width={35} height={40}/>
                      <span className="notaIMDB">{filme.notaIMDB}</span>
                    </div>
                    <div className="releaseDateOf">
                      <div className="subTitleDate">
                        <Image className="imgCalender" src={calender} width={20} height={20}/>
                        <span>Data de Lançamento:</span>
                      </div>
                      <span className="date">{filme.dataDeLancamento}</span>
                    </div>
                    <div className="boxOfficeContainer">
                      <div className="subTitleBoxOffice">
                        <Image className="imgBoxOffice" src={cash} width={20} height={20}/>
                        <span>Bilheteria:</span>
                      </div>
                      <span className="boxOffice">US$ {filme.bilheteriaUS$.toLocaleString("en-US")}.00</span>
                    </div>
                    <div className="durationContainer">
                      <div className="subTitleDuration">
                        <Image src={duration} width={20} height={20}/>
                        <span>Duração:</span>
                      </div>
                      <span className="duration">{filme.duration}</span>
                    </div>
                  </div>
                  
                  
                  
                  
                  <div className="sinopseContainer"> 
                    <span className="subTitleSinopse">Sinopse:</span>
                    <span className="sinopse">{filme.sinopse}</span>
                  </div>

                  <div className="links">
                    <div className="watch">
                      <span>Assista ao trailer:</span>
                      <a href={filme.linkTrailer} target="_blank"><Image className="imgYoutube" src={youtube}/></a>
                    </div>
                    <div className="watch">
                      <span>Assista ao filme:</span>
                      <a href={filme.linkFilme} target="_blank" >
                        {filme.streaming === "disney" 
                          ? <Image className="imgDisney" src={disneyplus}/> 
                          : filme.streaming === "netflix"
                          ? <Image src={netflix} width={50} height={50}/>
                          : filme.streaming === "hbo"
                          ? <Image src={hbo} width={50} height={50}/>
                          : <Image className="imgAmazon" src={amazon}/>
                        }
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )
        })}
    </Main>
  )
}
