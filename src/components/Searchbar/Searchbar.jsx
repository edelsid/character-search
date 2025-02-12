import { useState, useEffect } from "react"
import "./searchbar.css"

export default function Searchbar({ setUrl }) {
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
    setUrl(null);
  }, [request])

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
