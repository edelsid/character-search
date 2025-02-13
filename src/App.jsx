import { useState } from "react"
import Container from "./components/models/Container";
import Searchbar from "./components/searchbar/Searchbar"
import CardGrid from "./components/Cards/CardGrid";
import data from "./assets/propData";

function App() {
  const [ url, setUrl ] = useState(null);
  //let { data, error, loading } = useFetch(url);
  //временный url
  const propurl = "1";

  return (
    <> 
      <header className="header">
        <Container>
          <Searchbar setUrl={setUrl} counter={data ? data.length : null}/>
        </Container>
      </header>
      <main className="main">
        <Container>
          {data && propurl ? <CardGrid data={data}/> : <></>}
        </Container>
      </main>
    </>
  )
}

export default App
