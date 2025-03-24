export default function Nav() {

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
      {menuLink.map(link => (
        <li key={link.id}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
  )
}