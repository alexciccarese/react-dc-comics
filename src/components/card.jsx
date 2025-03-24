export default function Card({comics}) {

  return (
    <>
      <div className="card-col">
        <div className="cardEl">
          <div className="image-container">
            <img className="card-image" src={comics.thumb} alt={comics.title} />
          </div>
          <div className="cardTitle">{comics.series}</div>
        </div>
      </div>
    </>
  )
}