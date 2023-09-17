import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import seta from "../../public/seta.png";
import { useRouter } from "next/router";
import AppContext from '../components/AppContext'

import styles from "../styles/index.module.css";


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
    <>
      <Header search={search} setSearch={setSearch} ordination={ordination} setOrdination={setOrdination} />
      
      <main className={styles.main}>
      

        <div>
          {showScrollTopButton && (
            <div className={styles.buttonTop}>
              <Image src={seta} onClick={scrollTop} />
            </div>
          )}
        </div>
        
        
        <section className={styles.container}>
          
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

                  <div 
                    className={styles.section} 
                    key={film.id}
                    onClick={() => detalhes(film.id)}
                    >
                    
                      <Image
                        className={styles.poster}
                        src={film.posterImg}
                        width={35}
                        height={45}
                      />
                    
                    <div className={styles.title}>
                      {film.title}
                    </div>
                  </div>

                )
              })
          ) : (<section className={styles.notFound}>Nenhum filme ou série encontrado</section>)
          }
        </section>
      </main>
      <Footer />
    </>
  )
}
