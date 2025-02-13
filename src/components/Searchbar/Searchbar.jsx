import { useState, useEffect } from "react"
import FoundCounter from "./FoundCounter";
import "./searchbar.css"

export default function Searchbar({ url, setUrl, counter, clearAll }) {
  const [ request, setRequest ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (request && request.length > 3) {
      setUrl(`${rawURL}${request}`);
      return;
    }
    if (request && request.length <= 3 && url) {
      clearAll();
    }
  }, [request])

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input 
        className="search" 
        id="request" 
        placeholder="Search characters..."
        onChange={(e) => setRequest(e.target.value)}
      />
      {counter ? <FoundCounter counter={counter}/> : <></>}
    </form>
  )
}
