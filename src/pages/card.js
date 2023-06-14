import { Main, Section } from "../styles/card.styles";
import youtube from "../../public/youtube.png";
import disneyplus from "../../public/disneyplus.jpg";
import netflix from "../../public/netflix.png";
import hbomax from "../../public/hbomax.png";
import amazon from "../../public/amazon.png";
import IMDB from "../../public/IMDB.png"
import calender from "../../public/calender.png"
import cash from "../../public/cash.png"
import duration from "../../public/duration.png"
import Image from "next/image";

export default function Card(props) {

    const { id,
        posterImg,
        title,
        type,
        gender,
        IMDBNote,
        releaseDateOf,
        durationFilm,
        boxOfficeUS$,
        synopsis,
        trailerLink,
        movieLink,
        streaming } = props

    return (
        <Main>

            <Section key={id}>
                <div className="container">
                    <Image className="poster" src={posterImg} width={35} height={40} />

                    <div className="information">

                        <h2 className="titulo">{title}</h2>
                        <div className="generoContainer">
                            <span className="type">{type}</span>
                            <span className="genero">{gender}</span>
                        </div>

                        <div className="subTitleContainer">
                            <div className="IMDB">
                                <Image className="imgIMDB" src={IMDB} width={35} height={40} />
                                <span className="notaIMDB">{IMDBNote}</span>
                            </div>
                            <div className="releaseDateOf">
                                <div className="subTitle">
                                    <Image className="imgSubtitle" src={calender} />
                                    <span>Data de Lançamento:</span>
                                </div>
                                <span className="date">{releaseDateOf}</span>
                            </div>

                            <div className="durationContainer">
                                <div className="subTitle">
                                    <Image className="imgSubtitle" src={duration} />
                                    <span>Duração:</span>
                                </div>
                                <span className="duration">{durationFilm}</span>
                            </div>

                            {boxOfficeUS$ ?
                                <div className="boxOfficeContainer">
                                    <div className="subTitle">
                                        <Image className="imgSubtitle" src={cash} />
                                        <span>Bilheteria:</span>
                                    </div>
                                    <span className="boxOffice">US$ {boxOfficeUS$.toLocaleString("en-US")}.00</span>
                                </div>
                                :
                                <div className="notBoxOfficeContainer" />
                            }
                        </div>

                        <div className="sinopseContainer">
                            <span className="subTitleSinopse">Sinopse:</span>
                            <span className="sinopse">{synopsis}</span>
                        </div>
                        <div className="links">
                            <div className="watch">
                                <a className="imgWatch" href={trailerLink} target="_blank">
                                    <span>Assista ao Trailer</span>
                                    <Image className="imgYoutube" src={youtube} />
                                </a>
                            </div>
                            {movieLink &&
                                <div className="watch">
                                    <a className="imgWatch" href={movieLink} target="_blank" >

                                        {type === "Filme"
                                            ? <span>Assistir ao Filme</span>
                                            : type === "Série"
                                                ? <span>Assistir a Série</span>
                                                : <span>Assistir ao Curta</span>
                                        }

                                        {streaming === "disney"
                                            ? <Image className="imgDisney" src={disneyplus} />
                                            : streaming === "netflix"
                                                ? <Image className="imgNetflix" src={netflix} />
                                                : streaming === "hbo"
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
    )
}