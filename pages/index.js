import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";
import { Main, ButtonTop, Section, NotFound, Card } from "../Styles/index.styles";
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
import Footer from "./Footer/footer";
import seta from "../public/seta.png";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTzrhi_2NswWKirKVwumQb4cdjxTVTi4A",
  authDomain: "fir-marvel-12e8c.firebaseapp.com",
  projectId: "fir-marvel-12e8c",
  storageBucket: "fir-marvel-12e8c.appspot.com",
  messagingSenderId: "477200830039",
  appId: "1:477200830039:web:ffedb6d34beeeb60eddd12"
});

export default function Home() {

  const [films, setFilms] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [ordenacao, setOrdenacao] = useState ("")
  const [showScrollTopButton, setshowScrollTopButton] = useState(false);
  
  const db = getFirestore(firebaseApp);
  const filmeCollectionRef = collection(db, "filmes");
  const q = query(filmeCollectionRef, orderBy("releaseOrder"));
  
  useEffect(() => {
    const getFilms = async () => {
      const data = await getDocs(q)
      setFilms(data.docs.map((docs) => ({ ...docs.data(), id: docs.id})))
    };
    getFilms();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            setshowScrollTopButton(true);
        } else {
            setshowScrollTopButton(false);
        }
    })
  }, []);

  const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return (
    <Main>
      <Header buscar={buscar} setBuscar={setBuscar} ordenacao={ordenacao} setOrdenacao={setOrdenacao}/>
      <div>
        {showScrollTopButton && (
          <ButtonTop>
            <Image src={seta} onClick={scrollTop} />
          </ButtonTop>
        )}
      </div>
      <Section>

          {films.filter((film) => {
            return film.title.toLowerCase().includes(buscar.toLowerCase())
          })
          
          .length > 0 ? (

            films.filter((film) => {
              return film.title.toLowerCase().includes(buscar.toLowerCase())
            })

            .sort((a, b)=>{
              if(ordenacao === "ordemCronologica"){
                if(a.chronologicalOrder < b.chronologicalOrder){
                  return -1
                } else {
                  return 1
                }
              } else if(ordenacao === "ordemLancamento"){
                  if(a.releaseOrder > b.releaseOrder){
                    return 1
                  } else {
                    return -1
                  }
              }
            })

            .map((film) => {
             return (
              <Card key={film.id}>
                <div className="container">
                  <img className="poster" src={film.posterImg} alt="Poster"/>
                  
                  <div className="information">

                    <h2 className="titulo">{film.title}</h2>
                    <div className="generoContainer">
                      <span className="genero">{film.gender}</span>
                    </div>

                    <div className="subTitle">
                      <div className="IMDB">
                        <Image className="imgIMDB" src={IMDB} width={35} height={40}/>
                        <span className="notaIMDB">{film.IMDBNote}</span>
                      </div>
                      <div className="releaseDateOf">
                        <div className="subTitleDate">
                          <Image className="imgSubtitle" src={calender}/>
                          <span>Data de Lançamento:</span>
                        </div>
                        <span className="date">{film.releaseDateOf}</span>
                      </div>
                      <div className="boxOfficeContainer">
                        <div className="subTitleBoxOffice">
                          <Image className="imgSubtitle" src={cash}/>
                          <span>Bilheteria:</span>
                        </div>
                        <span className="boxOffice">US$ {film.boxOfficeUS$.toLocaleString("en-US")}.00</span>
                      </div>
                      <div className="durationContainer">
                        <div className="subTitleDuration">
                          <Image className="imgSubtitle" src={duration}/>
                          <span>Duração:</span>
                        </div>
                        <span className="duration">{film.duration}</span>
                      </div>
                    </div>
                    <div className="sinopseContainer"> 
                      <span className="subTitleSinopse">Sinopse:</span>
                      <span className="sinopse">{film.synopsis}</span>
                    </div>
                    <div className="links">
                      <div className="watch">
                        <a className="imgWatch" href={film.trailerLink} target="_blank">
                          <span>Assista ao trailer</span>
                          <Image className="imgYoutube" src={youtube}/>
                        </a>
                      </div>
                      <div className="watch">
                        <a className="imgWatch" href={film.movieLink} target="_blank" >
                          <span>Assista ao filme</span>
                            {film.streaming === "disney" 
                              ? <Image className="imgDisney" src={disneyplus}/> 
                              : film.streaming === "netflix"
                              ? <Image src={netflix} width={50} height={50}/>
                              : film.streaming === "hbo"
                              ? <Image src={hbo} width={50} height={50}/>
                              : <Image className="imgAmazon" src={amazon}/>
                            }
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })
        ) : (<NotFound>Nenhum filme ou série encontrado</NotFound>)}
      </Section>
      <Footer/>
    </Main>
  )
}
