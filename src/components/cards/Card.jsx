export default function Card({ data }) {
  const { name, species, status, created, url } = data;

  return (
    <a className="card__link" href={url} target="_blank">
      <article className="card">
        <header className="card__header">{`${name} - ${species}`}</header>
        <footer className="card__footer">
          <div className="status">
            <span className="status_label">Status: </span>
            <span className={`status_data ${status.toLowerCase()}`}>
              {status}
            </span>
          </div>
          <span className="date">{`Created: ${created}`}</span>
        </footer>
      </article>
    </a>
  )
}