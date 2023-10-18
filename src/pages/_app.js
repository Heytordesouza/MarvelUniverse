import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite'
import Head from 'next/head'
import AppContext from '../components/AppContext';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTzrhi_2NswWKirKVwumQb4cdjxTVTi4A",
  authDomain: "fir-marvel-12e8c.firebaseapp.com",
  projectId: "fir-marvel-12e8c",
  storageBucket: "fir-marvel-12e8c.appspot.com",
  messagingSenderId: "477200830039",
  appId: "1:477200830039:web:ffedb6d34beeeb60eddd12"
});

function MyApp({ Component, pageProps }) {

  const [films, setFilms] = useState([]);
  const [filmsList, setFilmsList] = useState([]);

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

  const addFavorite = (movie) => {

    const newFilm = filmsList.find((filmNew) => filmNew.id === movie.id);

    if (!newFilm) {
      const movieNew = [...filmsList, movie];
      setFilmsList(movieNew);

      const turnString = JSON.stringify(movieNew)
      localStorage.setItem("local", turnString)
      toast.success("Filme adicionado aos favoritos", {
        theme: "dark",
        autoClose: 1500
      })
    } 
  }

  const removeFavorite = (movie) => {

    const filterDelete = filmsList.filter((item) => item.id !== movie.id)

    const turnString = JSON.stringify(filterDelete)
    localStorage.setItem("local", turnString)
    setFilmsList(filterDelete)
    toast.success("Filme excluído dos favoritos", {
      icon: "🗑️",
      theme: "dark",
      autoClose: 1500
    });
  }

  const consultItem = () => {
    if (localStorage.getItem("local")) {
      const storeItem = localStorage.getItem("local")
      const getString = JSON.parse(storeItem);
      setFilmsList(getString)
    }
  }


  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AppContext.Provider
        value={{
          films,
          setFilms,
          filmsList,
          setFilmsList,
          addFavorite,
          removeFavorite,
          consultItem
        }}>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <Head>
              <title>Marvel Universe</title>
              <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <Component {...pageProps} />
          </ChakraProvider>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;