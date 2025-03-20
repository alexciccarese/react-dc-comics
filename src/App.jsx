import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App