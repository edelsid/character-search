import { string } from "prop-types";

export default function CardFooter({ status, created }) {
  created = new Date(created).toLocaleDateString();

  return (
    <footer className="card__footer">
      <div className="status">
        <span className="status__label">Status: </span>
        <span className={`status__data ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>
      <span className="date">{`Created: ${created}`}</span>
    </footer>
  )
}

CardFooter.propTypes = {
  status: string,
  created: string,
}
