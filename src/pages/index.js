import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";
import { Main, ButtonTop, NotFound } from "../styles/index.styles";
import Image from "next/image";
import Header from "../pages/header";
import Footer from "../pages/footer";
import Card from "../pages/card";
import seta from "../../public/seta.png";

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
  const [search, setSearch] = useState("");
  const [ordination, setOrdination] = useState("")
  const [showScrollTopButton, setshowScrollTopButton] = useState(false);

  const db = getFirestore(firebaseApp);
  const filmeCollectionRef = collection(db, "filmes");
  const q = query(filmeCollectionRef, orderBy("releaseOrder"));

  useEffect(() => {
    const getFilms = async () => {
      const data = await getDocs(q)
      setFilms(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    };
    getFilms();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
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
      <Header search={search} setSearch={setSearch} ordination={ordination} setOrdination={setOrdination} />
      <div>
        {showScrollTopButton && (
          <ButtonTop>
            <Image src={seta} onClick={scrollTop} />
          </ButtonTop>
        )}
      </div>
      {films.filter((film) => {
        return film.title.toLowerCase().includes(search.toLowerCase())
      })

        .length > 0 ? (

        films.filter((film) => {
          return film.title.toLowerCase().includes(search.toLowerCase())
        })

          .sort((a, b) => {
            if (ordination === "chronologicalOrder") {
              if (a.chronologicalOrder < b.chronologicalOrder) {
                return -1
              } else {
                return 1
              }
            } else if (ordination === "releaseOrder") {
              if (a.releaseOrder > b.releaseOrder) {
                return 1
              } else {
                return -1
              }
            }
          })

          .map((film) => {
            return (
              <Card
                id={film.id}
                posterImg={film.posterImg}
                title={film.title}
                type={film.type}
                gender={film.gender}
                IMDBNote={film.IMDBNote}
                releaseDateOf={film.releaseDateOf}
                durationFilm={film.duration}
                boxOfficeUS$={film.boxOfficeUS$}
                synopsis={film.synopsis}
                trailerLink={film.trailerLink}
                movieLink={film.movieLink}
                streaming={film.streaming}
              />
            )
          })
      ) : (<NotFound>Nenhum filme ou série encontrado</NotFound>)
      }
      <Footer />
    </Main>
  )
}
