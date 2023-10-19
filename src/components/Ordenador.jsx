import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export const Ordenador = ({ onOrdenChange }) => {
const handleOrdenChange = (e) => {
    const selectedValue =  e.target.value;

    let sortOrder = 'asc'; // por defecto orden ascendente
    
    if(selectedValue === '2') {
        sortOrder = 'desc'; // Si el valor es '2', orden descendente
    }
    
    onOrdenChange(sortOrder)
};

return (
<Container className='d-flex justify-content-center p-2'>
    <InputGroup className="w-50">
    <InputGroup.Text id="basic-addon1">
    <i className="fa-solid fa-arrow-down-a-z"></i>
    </InputGroup.Text>
    <Form.Select aria-label="Default select example" onChange={ handleOrdenChange }>
        <option>Ordena los resultados:</option>
        <option value="1">A-Z</option>
        <option value="2">Z-A</option>
    </Form.Select>
    </InputGroup>
</Container>

);
};

Ordenador.propTypes = {
    onOrdenChange: PropTypes.func
};

