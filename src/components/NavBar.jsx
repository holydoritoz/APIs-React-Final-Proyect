import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
return (
<>
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
</>
)
}

NavBar.propTypes = {
    pageName: PropTypes.string
};