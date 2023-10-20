import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppContext from '../../components/AppContext';
import favoriteOn from "../../../public/favoriteOn.png"
import favoriteOff from "../../../public/favoriteOff.png"
import youtube from "../../../public/youtube.png";
import disneyplus from "../../../public/disneyplus.jpg";
import netflix from "../../../public/netflix.png";
import hbomax from "../../../public/hbomax.png";
import amazon from "../../../public/amazon.png";
import IMDB from "../../../public/IMDB.png";
import calender from "../../../public/calender.png";
import cash from "../../../public/cash.png";
import duration from "../../../public/duration.png";
import Image from "next/image";
import styles from "./id.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header"

export default function Movie() {

    const context = useContext(AppContext);
    const { films, addFavorite, removeFavorite, filmsList } = context;

    const { query } = useRouter();
    const filmId = query?.id;

    const [isFavorite, setIsFavorite] = useState(false);

    const checkIfFavorite = () => {
        return filmsList.some((movieFavorite) => movieFavorite.id === filmId);
    };

    useEffect(() => {
        setIsFavorite(checkIfFavorite());
    }, [filmsList, filmId]);

    const toggleFavorite = (movie) => {
        const isMovieFavorite = filmsList.find((favoriteMovie) => favoriteMovie.id === movie.id);

        if (isMovieFavorite) {
            setIsFavorite(false);
            removeFavorite(movie);
        } else {
            setIsFavorite(true);
            addFavorite(movie);
        }
    };

    return (
        <main>
            <Header />
            {films.map((movie) => {
                return (
                    <div key={movie.id}>
                        {movie.id === filmId &&
                            <section className={styles.section}>
                                <article className={styles.article} key={movie.id}>
                                    <div className={styles.container}>
                                        <Image
                                            className={styles.poster}
                                            src={`/poster/${movie.id}.jpg`}
                                            width={35}
                                            height={40}
                                            alt="poster"
                                        />
                                        <div className={styles.information}>
                                            <div className={styles.titleContainer}>
                                                <div className={styles.title}>{movie.title}</div>
                                                <div className={styles.favorite}>
                                                    {isFavorite ?
                                                        <Image
                                                            className={styles.favoriteImg}
                                                            src={favoriteOn}
                                                            onClick={() => toggleFavorite(movie)}
                                                            width={40}
                                                            height={40}
                                                            alt="favoriteOn"
                                                        />
                                                        :
                                                        <Image
                                                            className={styles.favoriteImg}
                                                            src={favoriteOff}
                                                            onClick={() => toggleFavorite(movie)}
                                                            width={40}
                                                            height={40}
                                                            alt="favoriteOff"
                                                        />
                                                    }
                                                </div>
                                            </div>
                                            <div className={styles.generoContainer}>
                                                <span className={styles.type}>{movie.type}</span>
                                                <span className={styles.genero}>{movie.gender}</span>
                                            </div>
                                            <div className={styles.subTitleContainer}>
                                                <div className={styles.IMDB}>
                                                    <Image className={styles.imgIMDB} src={IMDB} width={35} height={40} alt="IMDB" />
                                                    <span className={styles.notaIMDB}>{movie.IMDBNote}</span>
                                                </div>
                                                <div className={styles.releaseDateOf}>
                                                    <div className={styles.subTitle}>
                                                        <Image className={styles.imgSubtitle} src={calender} alt="calender" />
                                                        <span>Data de Lançamento:</span>
                                                    </div>
                                                    <span className={styles.date}>{movie.releaseDateOf}</span>
                                                </div>
                                                <div className={styles.durationContainer}>
                                                    <div className={styles.subTitle}>
                                                        <Image className={styles.imgSubtitle} src={duration} alt="duration" />
                                                        <span>Duração:</span>
                                                    </div>
                                                    <span className={styles.duration}>{movie.duration}</span>
                                                </div>
                                                {movie.boxOfficeUS$ ?
                                                    <div className={styles.boxOfficeContainer}>
                                                        <div className={styles.subTitle}>
                                                            <Image className={styles.imgSubtitle} src={cash} alt="cash" />
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
                                                            ? <Image className={styles.imgDisney} src={disneyplus} alt="disney" />
                                                            : movie.streaming === "netflix"
                                                                ? <Image className={styles.imgNetflix} src={netflix} alt="netflix" />
                                                                : movie.streaming === "hbo"
                                                                    ? <Image className={styles.imgHBO} src={hbomax} alt="hbomax" />
                                                                    : <Image className={styles.imgAmazon} src={amazon} alt="amazon" />
                                                        }
                                                    </a>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <iframe className={styles.trailer}
                                        width="525"
                                        height="315"
                                        src={`${movie.trailerLink}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                    </iframe>
                                </article>
                            </section>
                        }
                    </div>
                )
            })}
            <Footer />
        </main>
    )
}