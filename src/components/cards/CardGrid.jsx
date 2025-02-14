import Card from "./Card"
import "./cards.css"

export default function CardGrid({ cards }) {
  // При поступлении набора карточек первые две отбираются как "заглавные"
  return (
    <div className="cards__grid">
      <div className="cards_heading">
        {cards.slice(0, 2).map((item) => <Card key={item.id} data={item}/>)}
      </div>
      {cards.slice(2).map((item) => <Card key={item.id} data={item}/>)}
    </div>
  )
}
