import { useContext } from "react";
import { useRouter } from "next/router";
import AppContext from '../../components/AppContext';
import youtube from "../../../public/youtube.png";
import disneyplus from "../../../public/disneyplus.jpg";
import netflix from "../../../public/netflix.png";
import hbomax from "../../../public/hbomax.png";
import amazon from "../../../public/amazon.png";
import IMDB from "../../../public/IMDB.png";
import calender from "../../../public/calender.png";
import cash from "../../../public/cash.png";
import duration from "../../../public/duration.png";
import marvel from "../../../public/marvel.jpg";
import Image from "next/image";
import styles from "./id.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header"

export default function Movie() {

    const context = useContext(AppContext);
    const { films, onAdd } = context;

    const { query } = useRouter();
    const filmId = query?.id;

    return (
        <>
            <Header />
            {films.map((movie) => {
                return (
                    <>
                        {movie.id === filmId &&
                            <div className={styles.main}>
                                <section className={styles.section} key={movie.id}>
                                    <div className={styles.container}>
                                        <Image
                                            className={styles.poster}
                                            src={`/poster/${movie.id}.jpg`}
                                            width={35}
                                            height={40}
                                        />

                                        <div className={styles.information}>

                                            <h2 className={styles.titleContainer}>
                                                <div className={styles.title}>{movie.title}</div>
                                                <div className={styles.favorite} onClick={() => onAdd(movie)}>Favoritar</div>
                                            </h2>
                                            <div className={styles.generoContainer}>
                                                <span className={styles.type}>{movie.type}</span>
                                                <span className={styles.genero}>{movie.gender}</span>
                                            </div>

                                            <div className={styles.subTitleContainer}>
                                                <div className={styles.IMDB}>
                                                    <Image className={styles.imgIMDB} src={IMDB} width={35} height={40} />
                                                    <span className={styles.notaIMDB}>{movie.IMDBNote}</span>
                                                </div>
                                                <div className={styles.releaseDateOf}>
                                                    <div className={styles.subTitle}>
                                                        <Image className={styles.imgSubtitle} src={calender} />
                                                        <span>Data de Lançamento:</span>
                                                    </div>
                                                    <span className={styles.date}>{movie.releaseDateOf}</span>
                                                </div>

                                                <div className={styles.durationContainer}>
                                                    <div className={styles.subTitle}>
                                                        <Image className={styles.imgSubtitle} src={duration} />
                                                        <span>Duração:</span>
                                                    </div>
                                                    <span className={styles.duration}>{movie.duration}</span>
                                                </div>

                                                {movie.boxOfficeUS$ ?
                                                    <div className={styles.boxOfficeContainer}>
                                                        <div className={styles.subTitle}>
                                                            <Image className={styles.imgSubtitle} src={cash} />
                                                            <span>Bilheteria:</span>
                                                        </div>
                                                        <span className={styles.boxOffice}>US$ {movie.boxOfficeUS$.toLocaleString("en-US")}.00</span>
                                                    </div>
                                                    :
                                                    <div className={styles.notBoxOfficeContainer} />
                                                }
                                            </div>

                                            <div className={styles.sinopseContainer}>
                                                <span className={styles.subTitleSinopse}>Sinopse:</span>
                                                <span className={styles.sinopse}>{movie.synopsis}</span>
                                            </div>
                                            <div className={styles.links}>
                                                <div className={styles.watch}>
                                                    <a className={styles.imgWatch} href={movie.trailerLink} target="_blank">
                                                        <span>Assista ao Trailer</span>
                                                        <Image className={styles.imgYoutube} src={youtube} />
                                                    </a>
                                                </div>
                                                {movie.movieLink &&
                                                    <div className={styles.watch}>
                                                        <a className={styles.imgWatch} href={movie.movieLink} target="_blank" >

                                                            {movie.type === "Filme"
                                                                ? <span>Assistir ao Filme</span>
                                                                : movie.type === "Série"
                                                                    ? <span>Assistir a Série</span>
                                                                    : <span>Assistir ao Curta</span>
                                                            }

                                                            {movie.streaming === "disney"
                                                                ? <Image className={styles.imgDisney} src={disneyplus} />
                                                                : movie.streaming === "netflix"
                                                                    ? <Image className={styles.imgNetflix} src={netflix} />
                                                                    : movie.streaming === "hbo"
                                                                        ? <Image className={styles.imgHBO} src={hbomax} />
                                                                        : <Image className={styles.imgAmazon} src={amazon} />
                                                            }
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                            <iframe
                                                width="525"
                                                height="315"
                                                src={`${movie.trailerLink}`}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        }
                    </>
                )
            })}
            <Footer />
        </>
    )
}