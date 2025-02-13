import { useState, useEffect } from "react"
import { useFetch } from "./hooks/useFetch";
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import CardGrid from "./components/cards/CardGrid";
import PageTurner from "./components/cards/PageTurner";
//import data from "./assets/propData";

function App() {
  const [ url, setUrl ] = useState(null);
  const [ cards, setCards ] = useState({
    results: [],
    info: {},
  });
  let { data, error, loading } = useFetch(url);
  //временный url
  const propurl = "1";

  useEffect(() => {
    if (data) {
      setCards(data);
    };
  }, [data])

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
          <CardGrid cards={cards.results}/>
          <PageTurner 
            turnPage={turnPage}
            next={cards.info.next}
            prev={cards.info.prev}
          />
        </Container>
      </main>
    </>
  )
}

export default App
