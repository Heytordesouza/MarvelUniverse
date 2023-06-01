import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite'
import { useEffect, useState } from "react";
import { Main, ButtonTop } from "../Styles/index.styles";
import Image from "next/image";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Card from "./Card/card";
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
  const [search, setSearch] = useState("");
  const [ordination, setOrdination] = useState ("")
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
      <Header search={search} setSearch={setSearch} ordination={ordination} setOrdination={setOrdination}/>
      <div>
        {showScrollTopButton && (
          <ButtonTop>
            <Image src={seta} onClick={scrollTop} />
          </ButtonTop>
        )}
      </div>
      <Card films={films} search={search} ordination={ordination}/>
      <Footer/>
    </Main>
  )
}
