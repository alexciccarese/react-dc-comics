export default function Card({ image, title }) {

  return (
    <>
      <div className="card-col">
        <div className="cardEl">
          <div className="image-container">
            <img className="card-image" src={image} alt={title} />
          </div>
          <div className="cardTitle">{title}</div>
        </div>
      </div>
    </>
  )
}