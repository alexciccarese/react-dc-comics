import Nav from "../components/Nav"

export default function Header({menuLink}) {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/img/dc-logo.png" alt="logo" />
        </div>

        <Nav menuLink={menuLink} />
      </div>
    </header>

  )
}