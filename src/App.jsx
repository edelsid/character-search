import { useState } from "react"
import { useFetch } from "./hooks/useFetch";
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import Card from "./components/cards/Card";

function App() {
  const [ url, setUrl ] = useState(null);
  let { data, error, loading } = useFetch(url);

  return (
    <> 
      <header className="header">
        <Container>
          <Searchbar setUrl={setUrl}/>
        </Container>
      </header>
      <main className="main">
        <Container>
          {url && data ? data.map((item) => <Card/>) : <></>}
        </Container>
      </main>
    </>
  )
}

export default App
