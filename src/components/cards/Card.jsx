import CardFooter from "./CardFooter";

export default function Card({ data }) {
  const { name, species, status, created, url } = data;

  return (
    <a className="card__link" href={url} target="_blank">
      <article className="card">
        <header className="card__header">{`${name} - ${species}`}</header>
        <CardFooter status={status} created={created}/>
      </article>
    </a>
  )
}