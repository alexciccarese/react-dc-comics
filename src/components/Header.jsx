import Nav from "../components/Nav"

export default function Header() {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/img/dc-logo.png" alt="logo" />
        </div>

        <Nav />
      </div>
    </header>

  )
}