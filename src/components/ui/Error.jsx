export default function Error({ msg }) {
  return (
    <div className="error">
      <img className="error__img" src="src/assets/error.svg"/>
      <p className="error__msg">{msg}</p>
    </div>
  )
}
