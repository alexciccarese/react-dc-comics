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

function Nav() {

  const menuLink = [
    {
      id: 1,
      name: "CHARACTERS",
      url: "#",
    },
    {
      id: 2,
      name: "COMICS",
      url: "#",
    },
    {
      id: 3,
      name: "MOVIES",
      url: "#",
    },
    {
      id: 4,
      name: "TV",
      url: "#",
    },
    {
      id: 5,
      name: "GAMES",
      url: "#",
    },
    {
      id: 6,
      name: "COLLECTIBLES",
      url: "#",
    },
    {
      id: 7,
      name: "VIDEO",
      url: "#",
    },
    {
      id: 8,
      name: "FANS",
      url: "#",
    },
    {
      id: 9,
      name: "NEWS",
      url: "#",
    },
    {
      id: 10,
      name: "SHOP",
      url: "#",
    },
  ]

  return(

    <nav className="menu">
    <ul>
      <li><a href="">CHARACTERS</a></li>
      <li><a href="">COMICS</a></li>
      <li><a href="">MOVIES</a></li>
      <li><a href="">TV</a></li>
      <li><a href="">GAMES</a></li>
      <li><a href="">COLLECTIBLES</a></li>
      <li><a href="">VIDEO</a></li>
      <li><a href="">FANS</a></li>
      <li><a href="">NEWS</a></li>
      <li><a href="">SHOP</a></li>
    </ul>
  </nav>
  )
}