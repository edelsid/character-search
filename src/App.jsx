import { useState, useEffect } from "react"
import { useFetch } from "./hooks/useFetch";
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import CardGrid from "./components/cards/CardGrid";
import PageTurner from "./components/cards/PageTurner";
import Error from "./components/ui/Error";
import Loading from "./components/ui/Loading";
import "./components/ui/ui.css"
//import data from "./assets/propData";

function App() {
  const [ url, setUrl ] = useState(null);
  const [ cards, setCards ] = useState({
    results: [],
    info: {},
  });
  
  let { data, error, loading } = useFetch(url);

  useEffect(() => {
    if (data) {
      setCards(data);
    };
  }, [data])

  useEffect(() => {
    if (error) {
      clearAll();
    }
  }, [error])

  const turnPage = (e) => {
    if (e.target.id === "prev") {
      setUrl(cards.info.prev);
      return;
    }
    setUrl(cards.info.next);
  }

  const clearAll = () => {
    setUrl(null);
    setCards({
      results: [],
      info: {},
    });
  }

  return (
    <> 
      <header className="header">
        <Container>
          <Searchbar 
            clearAll={clearAll}
            setUrl={setUrl}
            url={url}
            counter={cards.info.count}
          />
        </Container>
      </header>
      <main className="main">
        <Container>
          {loading && <Loading />}
          {error && !loading && <Error msg={error.message}/>}
          {!error && !loading && 
            <>
              <CardGrid cards={cards.results}/>
              <PageTurner 
                turnPage={turnPage}
                next={cards.info.next}
                prev={cards.info.prev}
              />
            </>}
        </Container>
      </main>
    </>
  )
}

export default App
