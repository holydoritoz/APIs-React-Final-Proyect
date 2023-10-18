import { useState } from 'react';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


export const Buscador = ({ onSearch  }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearch(term); // Llamar a la función de búsqueda con el término actualizado
    };

    return (
    <Container className='d-flex justify-content-center'>
        <InputGroup className="mt-4 w-50">
        <InputGroup.Text id="basic-addon1">
                <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Buscar personajes"
                value={ searchTerm } 
                onChange={ handleInputChange }
            />
            </InputGroup>
    </Container>
);
}

Buscador.propTypes = {
  onSearch: PropTypes.func
};

