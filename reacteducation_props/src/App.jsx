import './App.css'
import { Header } from './viewes/Header/Header'
import data from './data/legacy.json'
import { Main } from './viewes/Main/Main';
import { Footer } from './viewes/Footer/Footer';


console.log(data);

function App() {

  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
