export default function Nav({menuLink}) {

  const linkList = menuLink.map(link => (
    <li key={link.id}>
    <a href={link.url}>{link.name}</a>
  </li>

  ))

  return(

    <nav className="menu">
    <ul>
      {linkList}
    </ul>
  </nav>
  )
}