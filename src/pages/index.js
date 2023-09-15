
import { useEffect, useState, useContext } from "react";
import { Main, ButtonTop, Container, Section, NotFound } from "../styles/index.styles";
import Image from "next/image";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
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
              <Container>
                <Section key={film.id}>
                  <div className="movie">
                    <Image
                      className="poster"
                      src={film.posterImg}
                      onClick={() => detalhes(film.id)}
                      width={35}
                      height={40}
                    />
                  </div>
                </Section>
              </Container>
            )
          })
      ) : (<NotFound>Nenhum filme ou série encontrado</NotFound>)
      }
      <Footer />
    </Main>
  )
}
