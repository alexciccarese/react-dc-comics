import dcComics from "../components/data/footerLink/DcComics";
import shop from "../components/data/footerLink/shop";
import dc from "../components/data/footerLink/dc";
import sites from "../components/data/footerLink/sites";

const {dcComics, shop, dc, sites} = footerLink 

export default function Footer(footerLink) {
  // logica
  const dcComicsLinks = dcComics.map((link) => (
    <li key={link.id}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  const shopLinks = shop.map((link) => (
    <li key={link.id}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  const dcLinks = dc.map((link) => (
    <li key={link.id}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

  const sitesLinks = sites.map((link) => (
    <li key={link.id}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));


  //template here
  return (
    <footer>

      <div className="info">
        <div className="container">
          <div className="row">

            <div className="links">

              <ul>
                <h3 className="title">DC COMICS</h3>
                {dcComicsLinks}
              </ul>

              <ul>
                <h3 className="title">SHOP</h3>
                {shopLinks}
              </ul>
            </div>

            <div className="links">

              <ul>
              <h3 className="title">DC</h3>
                {dcLinks}
              </ul>

            </div>

            <div className="links">

              <ul>
                <h3 className="title">SITES</h3>
                {sitesLinks}
              </ul>

            </div>

          </div>
        </div>
      </div>

      <div className="credits">
        <div className="container">
          <div className="row">

            <button>SING-UP NOW!</button>

            <div className="social">
              <h3>FOLLOW US</h3>
              <img src="/img/footer-facebook.png" alt="" />
              <img src="/img/footer-twitter.png" alt="" />
              <img src="/img/footer-youtube.png" alt="" />
              <img src="/img/footer-pinterest.png" alt="" />
              <img src="/img/footer-periscope.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}