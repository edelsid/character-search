export default function Button({ name, func, id }) {
  return (
    <button type="button" className="btn" id={id} onClick={(e) => func(e)}>
      {name}
    </button>
  )
}
