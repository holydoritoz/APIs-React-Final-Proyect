import { useEffect, useState } from 'react'
import { Characters } from './Characters'
import { Buscador } from './Buscador'
import { Ordenador } from './Ordenaror'


export const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [hasResults, setHasResults] = useState(true);

    const fetchData = async () => {
        let apiUrl = 'https://rickandmortyapi.com/api/character';
        if (searchTerm) {
        apiUrl += `?name=${searchTerm}`;
        }
        try {
        const res = await fetch(apiUrl);
        const jsonData = await res.json();

        if (jsonData.results.length > 0) {
        setCharacters(jsonData.results);
        setHasResults(true);
        setError('');
        } else {
        setCharacters([]);
        setHasResults(false);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setError('No se ha podido encontrar la palabra buscada');
    }
};

    useEffect(() => {
    fetchData(); 
    }); // Sin un arreglo de dependencia, el efecto se ejecutará despues de cada renderización del componente sin observar ningun cambio de estado de variables

    return (
    <>
    <div className="container mt-5">
        <Buscador
        onSearch={ setSearchTerm }
        />
        <Ordenador/>
        {
        error && <div className="alert alert-danger">{ error }</div>
        }
        { hasResults && (
        <>
        <div className="row">
            <Characters
            characters={characters} />
        </div>
        </>
        )}
    </div>
    </>
);
};
