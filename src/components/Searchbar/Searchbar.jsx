import { useState, useEffect, useRef } from "react"
import FoundCounter from "./FoundCounter";
import "./searchbar.css"

export default function Searchbar({ url, setUrl, counter, clearAll }) {
  const [ request, setRequest ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;
  const inputField = useRef();

  useEffect(() => {
    inputField.current.focus();
  }, [])

  useEffect(() => {
    if (request && request.length > 3) {
      setUrl(`${rawURL}${request}`);
      return;
    }
    if (request && request.length <= 3 && url) {
      clearAll();
    }
  }, [request])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const vaidateInput = () => {
    
  }

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input 
        className="search" 
        id="request" 
        type="text"
        ref={inputField}
        placeholder="Search characters..."
        onChange={(e) => setRequest(e.target.value)}
      />
      {counter && <FoundCounter counter={counter}/>}
    </form>
  )
}
