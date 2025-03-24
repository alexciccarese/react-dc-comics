import Card from "./Card";
export default function CardList({comics}) {

  const cardList = comics.map(item => (
    <Card key={`item-${item.id}`} comics={item} />
  ))


  return (
    <>

<div className="cardListRow">
      {/* Inserire qui il componente card */}
        {cardList}

    </div>

    </>
  )
}


