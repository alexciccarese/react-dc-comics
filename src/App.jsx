import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import menuLink from './components/data/menuLink'

function App() {

  return (
    <>
    <Header menuLink={menuLink} />
    <Main />
    <Footer />
    </>
  )
}

export default App