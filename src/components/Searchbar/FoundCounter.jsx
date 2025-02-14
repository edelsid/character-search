import { number } from "prop-types"

export default function FoundCounter({ counter }) {
  return (
    <span className="search__notification">
      {`Found character${counter !== 1 ? "s" : ""}: ${counter}`}
    </span>
  )
}

FoundCounter.propTypes = {
  counter: number,
}
