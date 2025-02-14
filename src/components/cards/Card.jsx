import CardFooter from "./CardFooter";

export default function Card({ data }) {
  const { name, species, status, created, url } = data;

  return (
    <a className="cards__link" href={url} target="_blank">
      <article className="card">
        <header className="card__header">
          <h2>
            {`${name} - ${species}`}
          </h2>
        </header>
        <CardFooter status={status} created={created}/>
      </article>
    </a>
  )
}