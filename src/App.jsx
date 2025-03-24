import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import menuLink from './components/data/menuLink'
import comics from './components/data/comics'

function App() {

  return (
    <>
    <Header menuLink={menuLink} />
    <Main comics={comics} />
    <Footer />
    </>
  )
}

export default App