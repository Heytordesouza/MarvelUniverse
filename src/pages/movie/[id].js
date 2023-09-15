import { useContext } from "react";
import { useRouter } from "next/router";
import AppContext from '../../components/AppContext'
import { Main, Section } from "./id.styles";
import youtube from "../../../public/youtube.png";
import disneyplus from "../../../public/disneyplus.jpg";
import netflix from "../../../public/netflix.png";
import hbomax from "../../../public/hbomax.png";
import amazon from "../../../public/amazon.png";
import IMDB from "../../../public/IMDB.png"
import calender from "../../../public/calender.png"
import cash from "../../../public/cash.png"
import duration from "../../../public/duration.png"
import Image from "next/image";
import Header from "../../components/Header/header";

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
                            <Main>
                                <Section key={movie.id}>
                                    <div className="container">
                                        <Image
                                            className="poster"
                                            src={movie.posterImg}
                                            width={35}
                                            height={40}
                                        />

                                        <div className="information">

                                            <h2 className="titulo">
                                                <div className="title">{movie.title}</div>
                                                <div className="favorite" onClick={() => onAdd(movie)}>Favoritar</div>
                                            </h2>
                                            <div className="generoContainer">
                                                <span className="type">{movie.type}</span>
                                                <span className="genero">{movie.gender}</span>
                                            </div>

                                            <div className="subTitleContainer">
                                                <div className="IMDB">
                                                    <Image className="imgIMDB" src={IMDB} width={35} height={40} />
                                                    <span className="notaIMDB">{movie.IMDBNote}</span>
                                                </div>
                                                <div className="releaseDateOf">
                                                    <div className="subTitle">
                                                        <Image className="imgSubtitle" src={calender} />
                                                        <span>Data de Lançamento:</span>
                                                    </div>
                                                    <span className="date">{movie.releaseDateOf}</span>
                                                </div>

                                                <div className="durationContainer">
                                                    <div className="subTitle">
                                                        <Image className="imgSubtitle" src={duration} />
                                                        <span>Duração:</span>
                                                    </div>
                                                    <span className="duration">{movie.duration}</span>
                                                </div>

                                                {movie.boxOfficeUS$ ?
                                                    <div className="boxOfficeContainer">
                                                        <div className="subTitle">
                                                            <Image className="imgSubtitle" src={cash} />
                                                            <span>Bilheteria:</span>
                                                        </div>
                                                        <span className="boxOffice">US$ {movie.boxOfficeUS$.toLocaleString("en-US")}.00</span>
                                                    </div>
                                                    :
                                                    <div className="notBoxOfficeContainer" />
                                                }
                                            </div>

                                            <div className="sinopseContainer">
                                                <span className="subTitleSinopse">Sinopse:</span>
                                                <span className="sinopse">{movie.synopsis}</span>
                                            </div>
                                            <div className="links">
                                                <div className="watch">
                                                    <a className="imgWatch" href={movie.trailerLink} target="_blank">
                                                        <span>Assista ao Trailer</span>
                                                        <Image className="imgYoutube" src={youtube} />
                                                    </a>
                                                </div>
                                                {movie.movieLink &&
                                                    <div className="watch">
                                                        <a className="imgWatch" href={movie.movieLink} target="_blank" >

                                                            {movie.type === "Filme"
                                                                ? <span>Assistir ao Filme</span>
                                                                : movie.type === "Série"
                                                                    ? <span>Assistir a Série</span>
                                                                    : <span>Assistir ao Curta</span>
                                                            }

                                                            {movie.streaming === "disney"
                                                                ? <Image className="imgDisney" src={disneyplus} />
                                                                : movie.streaming === "netflix"
                                                                    ? <Image className="imgNetflix" src={netflix} />
                                                                    : movie.streaming === "hbo"
                                                                        ? <Image className="imgHBO" src={hbomax} />
                                                                        : <Image className="imgAmazon" src={amazon} />
                                                            }
                                                        </a>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Section>
                            </Main>
                        }
                    </>
                )
            })}
        </>
    )
}