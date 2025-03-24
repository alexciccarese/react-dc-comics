export default function Nav({menuLink}) {

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