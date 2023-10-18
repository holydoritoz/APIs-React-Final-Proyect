import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { MiApi } from './components/MiApi';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
    <NavBar
    pageName="Rick and Morty App"
    />
    <MiApi/>
    </>
  )
}

export default App
