import { useState, useEffect } from "react"
import "./searchbar.css"

export default function Searchbar() {

  return (
    <form className="search__form">
      <input 
        className="search" 
        id="request" 
        placeholder="Search characters..."
      />
    </form>
  )
}
