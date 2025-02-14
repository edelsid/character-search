import React from "react";
import { useState, useEffect, useRef } from "react"
import FoundCounter from "./FoundCounter";
import "./searchbar.css"

const PureCounter = React.memo(FoundCounter);

export default function Searchbar({ setUrl, counter, clearAll, setAppErr }) {
  const [ request, setRequest ] = useState(null);
  const rawURL = import.meta.env.VITE_API_URL;
  const inputField = useRef();

  // Установка фокуса на инпут-поле при входе
  useEffect(() => {
    inputField.current.focus();
  }, [])

  // Дебаунс для обработки запроса
  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange();
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [request])

  // При нажатии на Enter ничего не происходит, реакция идет при печатании
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // Ф-ция обработки запроса и формации url для обращения на сервер
  const handleChange = () => {
    if (request && request.length > 3) {
      const validatedReq = vaidateInput(request);
      if (validatedReq) {
        setUrl(`${rawURL}${validatedReq}`);
        setAppErr(null);
      }
      return;
    }
    if (!request || request.length <= 3) {
      clearAll();
    }
  }

  // Ф-ция валидации запроса: пустая строка не обрабатывается.
  // Пробелы отсекаются, принимается лишь англ. язык
  const vaidateInput = (request) => {
    if (request === "") return;
    const validatedReq = request.trim();
    const regex = /^[a-zA-Z\s]+$/;
    try {
      if (regex.test(validatedReq)) {
        return validatedReq;
      } else {
        throw Error("Please use latin alphabet for a character name");
      }
    } catch (error) {
      setAppErr(error);
    }
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input 
        className="search__input" 
        id="request" 
        type="text"
        ref={inputField}
        placeholder="Search characters..."
        onChange={(e) => setRequest(e.target.value)}
      />
      {counter && <PureCounter counter={counter}/>}
    </form>
  )
}
