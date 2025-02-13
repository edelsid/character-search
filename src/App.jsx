import { useState } from "react"
import { useFetch } from "./hooks/useFetch";
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import CardGrid from "./components/Cards/CardGrid";

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
          {data && url ? <CardGrid data={data}/> : <></>}
        </Container>
      </main>
    </>
  )
}

export default App
