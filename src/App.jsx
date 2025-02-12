import { useState } from "react"
import { useFetch } from "./hooks/useFetch";
import Searchbar from "./components/Searchbar/Searchbar"
import Card from "./components/Card/Card";

function App() {
  const [ url, setUrl ] = useState(null);
  let { data, error, loading } = useFetch(url);

  return (
    <> 
      <header className="header">
        <Searchbar setUrl={setUrl}/>
      </header>
      <main className="main">
        {data ? data.map((item) => <Card/>) : <></>}
      </main>
    </>
  )
}

export default App
