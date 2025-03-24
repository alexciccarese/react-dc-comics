import Card from "./Card";
export default function CardList({comics}) {

  return (
    <>

<div className="cardListRow">
      {/* Inserire qui il componente card */}
      {comics.map((item) => (
        <Card key={`item-${item.id}`} comics={item} />
      ))}
    </div>

    </>
  )
}


