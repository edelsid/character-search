export default function Loading() {
  const loadingArr = Array.from(Array(3).keys());

  return (
    <ul className="loading">
      {loadingArr.map((item) => 
        <li 
          key={item}
          className="loading__el"
          style={{animationDelay: `${item > 0 ? (0.2 * item) : 0}s`}}>
        </li>)}
    </ul>
  )
}
