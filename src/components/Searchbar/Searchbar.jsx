import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import "./searchbar.css"

export default function Searchbar() {
  const [ request, setRequest ] = useState(null);
  const [ url, setUrl ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;
  let { data, error, loading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (request && request.length > 3) {
      console.log("sending request", request);
      setUrl(`${rawURL}${request}`);
    }
  }, [request])

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input 
        className="search" 
        id="request" 
        placeholder="Search characters..."
        onChange={(e) => setRequest(e.target.value)}
      />
    </form>
  )
}
