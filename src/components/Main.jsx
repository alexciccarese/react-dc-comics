import Icons from '../components/Icons'
import CardList from './cardList'
import comics from './data/comics'
export default function Main() {

  return (
    <main>
      <div className="jumbotron">
      </div>
      <div className="content">
        <div className="container">
          <div className="title">CURRENT SERIES</div>


          {/* inserire qui il componente della lista card */}
          <CardList comics={comics} />


          <div className="btn">
            <button>LOAD MORE</button>
          </div>
        </div>
      </div>

      <Icons />
    </main>
  )
}