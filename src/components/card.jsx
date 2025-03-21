export default function Card({ image, title }) {

  return (
    <>
      <div className="col">
        <div className="card">
          <img width="300" src={image} alt="" />
          <div>{title}</div>
        </div>
      </div>
    </>
  )
}