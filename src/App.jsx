import { useState, useEffect } from "react"
import { useFetch } from "./hooks/useFetch";
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import CardGrid from "./components/cards/CardGrid";
import PageTurner from "./components/cards/PageTurner";
import Error from "./components/ui/Error";
import Loading from "./components/ui/Loading";
import Scrollup from "./components/ui/Scrollup";
import "./components/ui/ui.css"

function App() {
  const [ url, setUrl ] = useState(null);
  const [ scrolled, setScrolled ] = useState(false);
  const [ appErr, setAppErr ] = useState(null);
  const [ cards, setCards ] = useState({
    results: [],
    info: {},
  });

  let { data, error, loading } = useFetch(url);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
        return;
      }
      setScrolled(false);
    }
    document.addEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    if (data) {
      setCards(data);
    };
  }, [data])

  useEffect(() => {
    if (error) {
      clearAll();
      setAppErr(error);
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
    setAppErr(null);
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
            counter={cards.info.count}
            setAppErr={setAppErr}
          />
        </Container>
      </header>
      <main className="main">
        <Container>
          {loading && <Loading />}
          {appErr && !loading && <Error msg={appErr.message}/>}
          {!appErr && !loading && 
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
      {scrolled && <Scrollup />}
    </>
  )
}

export default App
