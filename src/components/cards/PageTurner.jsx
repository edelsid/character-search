import { func, string } from "prop-types"
import Button from "../models/Button"

export default function PageTurner({ turnPage, next, prev }) {
  return (
    <div className="cards__buttons">
      {prev && <Button name="Previous" func={turnPage} id="prev"/>}
      {next && <Button name="Next" func={turnPage} id="next"/>}
    </div>
  )
}

PageTurner.propTypes = {
  turnPage: func,
  next: string,
  prev: string,
}
