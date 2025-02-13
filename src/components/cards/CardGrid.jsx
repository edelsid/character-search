import Card from "./Card"
import "./cards.css"

export default function CardGrid({ cards }) {
  const headingCards = cards.slice(0, 2);
  const normalCards = cards.slice(2);

  return (
    <div className="cards__grid">
      <div className="cards_heading">
        {headingCards ? headingCards.map((item) => 
          <Card key={item.id} data={item}/>) :
          <></>}
      </div>
      {normalCards ? normalCards.map((item) => 
        <Card key={item.id} data={item}/>) :
        <></>}
    </div>
  )
}
