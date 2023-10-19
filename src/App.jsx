import { MiApi } from './components/MiApi';
import { Footer } from './components/Footer';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css'

function App() {

  return (
    <>
    <header>
      <Navbar className="bg-body-tertiary">
          <Container className='d-flex justify-content-center'>
            <Navbar.Brand href="#home">
              <img
                width='400px'
                src='https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png'
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
      <div className="container-fluid p-5">
        <MiApi/>
      </div>
      </main>
      <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default App
