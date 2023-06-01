import { Main, NotFound, Section } from "../../Styles/card.styles";
import youtube from "../../public/youtube.png";
import disneyplus from "../../public/disneyplus.jpg";
import netflix from "../../public/netflix.jpg";
import hbo from "../../public/hbo.jpg";
import amazon from "../../public/amazon.png";
import IMDB from "../../public/IMDB.png"
import calender from "../../public/calender.png"
import cash from "../../public/cash.png"
import duration from "../../public/duration.png"
import Image from "next/image";

export default function Card(props) {

    const { films, search, ordination } = props

    return (
        <Main>
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
                            <Section key={film.id}>
                                <div className="container">
                                    <img className="poster" src={film.posterImg} alt="Poster" />

                                    <div className="information">

                                    

                                        <h2 className="titulo">{film.title}</h2>
                                        <div className="generoContainer">
                                            <span className="type">{film.type}</span>
                                            <span className="genero">{film.gender}</span>
                                        </div>

                                        <div className="subTitle">
                                            <div className="IMDB">
                                                <Image className="imgIMDB" src={IMDB} width={35} height={40} />
                                                <span className="notaIMDB">{film.IMDBNote}</span>
                                            </div>
                                            <div className="releaseDateOf">
                                                <div className="subTitleDate">
                                                    <Image className="imgSubtitle" src={calender} />
                                                    <span>Data de Lançamento:</span>
                                                </div>
                                                <span className="date">{film.releaseDateOf}</span>
                                            </div>
                                            
                                            <div className="durationContainer">
                                                <div className="subTitleDuration">
                                                    <Image className="imgSubtitle" src={duration} />
                                                    <span>Duração:</span>
                                                </div>
                                                <span className="duration">{film.duration}</span>
                                            </div>

                                            {film.boxOfficeUS$ ?
                                                <div className="boxOfficeContainer">
                                                    <div className="subTitleBoxOffice">
                                                        <Image className="imgSubtitle" src={cash} />
                                                        <span>Bilheteria:</span>
                                                    </div>
                                                    <span className="boxOffice">US$ {film.boxOfficeUS$.toLocaleString("en-US")}.00</span>
                                                </div>
                                                :
                                                <div className="notBoxOfficeContainer"/>
                                            }
                                        </div>

                                        <div className="sinopseContainer">
                                            <span className="subTitleSinopse">Sinopse:</span>
                                            <span className="sinopse">{film.synopsis}</span>
                                        </div>
                                        <div className="links">
                                            <div className="watch">
                                                <a className="imgWatch" href={film.trailerLink} target="_blank">
                                                    <span>Assista ao trailer</span>
                                                    <Image className="imgYoutube" src={youtube} />
                                                </a>
                                            </div>
                                            {film.movieLink &&
                                                <div className="watch">
                                                    <a className="imgWatch" href={film.movieLink} target="_blank" >

                                                        {film.type === "Filme"
                                                            ? <span>Assistir ao Filme</span>
                                                            : film.type === "Série"
                                                                ? <span>Assistir a Série</span>
                                                                : <span>Assistir ao Curta</span>
                                                        }

                                                        {film.streaming === "disney"
                                                            ? <Image className="imgDisney" src={disneyplus} />
                                                            : film.streaming === "netflix"
                                                                ? <Image className="imgNetflix" src={netflix} />
                                                                : film.streaming === "hbo"
                                                                    ? <Image className="imgHBO" src={hbo} />
                                                                    : <Image className="imgAmazon" src={amazon} />
                                                        }
                                                    </a>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Section>
                        )
                    })
            ) : (<NotFound>Nenhum filme ou série encontrado</NotFound>)}
        </Main>
    )
}