export default function CardFooter({ status, created }) {
  created = new Date(created).toLocaleDateString()

  return (
    <footer className="card__footer">
      <div className="status">
        <span className="status_label">Status: </span>
        <span className={`status_data ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>
      <span className="date">{`Created: ${created}`}</span>
    </footer>
  )
}
