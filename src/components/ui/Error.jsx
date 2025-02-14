import { string } from "prop-types"
import errImg from "../../assets/error.svg"

export default function Error({ msg }) {
  return (
    <div className="error">
      <img className="error__img" src={errImg} alt="error icon"/>
      <p className="error__msg">{msg}</p>
    </div>
  )
}

Error.propTypes = {
  msg: string,
}
