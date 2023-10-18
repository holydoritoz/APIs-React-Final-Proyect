
import PropTypes from 'prop-types'

export const NavBar = ({ pageName }) => {
return (
<>
  <nav className='navbar navbar-dark bg-dark'>
    <div className='container'>
      <a href="#" className='navbar-brand text-uppercase'>{ pageName }</a>
    </div>
  </nav>
</>
)
}

NavBar.propTypes = {
    pageName: PropTypes.string
};