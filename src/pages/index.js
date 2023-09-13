
import { useEffect, useState, useContext } from "react";
import { Main, ButtonTop, NotFound } from "../styles/index.styles";
import Image from "next/image";
import Header from "../pages/header";
import Footer from "../pages/footer";
import Card from "../pages/card";
import seta from "../../public/seta.png";
import { useRouter } from "next/router";
import AppContext from '../components/AppContext'
import Link from "next/link";


export default function Home() {

  const context = useContext(AppContext);
  const { push } = useRouter();

  const { films } = context;
  
  const [search, setSearch] = useState("");
  const [ordination, setOrdination] = useState("")
  const [showScrollTopButton, setshowScrollTopButton] = useState(false);



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

  const detalhes = (id) => {
    push(`/movie/${id}`)
  }

  return (
    <Main>
      <Header search={search} setSearch={setSearch} ordination={ordination} setOrdination={setOrdination} />
      <Link href='/wishlist'>Lista de desejos</Link>
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
              <>
                <div onClick={() => detalhes(film.id)}>Ver mais</div>
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
              </>
            )
          })
      ) : (<NotFound>Nenhum filme ou série encontrado</NotFound>)
      }
      <Footer />
    </Main>
  )
}
