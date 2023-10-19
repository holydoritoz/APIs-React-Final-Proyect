import { useEffect, useState } from 'react'
import { Characters } from './Characters'
import { Buscador } from './Buscador'
import { Ordenador } from './Ordenaror'


export const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [hasResults, setHasResults] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc')

    const fetchData = async () => {
        let apiUrl = 'https://rickandmortyapi.com/api/character';
        if (searchTerm) {
            apiUrl += `?name=${searchTerm}`;
        }
        try {
            const res = await fetch(apiUrl);
            const jsonData = await res.json();
    
            if (jsonData.results.length > 0) {
                let sortedCharacters = jsonData.results;
    
                if (sortOrder === 'asc') {
                    // Ordenar de A-Z
                    sortedCharacters = sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    // Ordenar de Z-A
                    sortedCharacters = sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
                }
    
                setCharacters(sortedCharacters);
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
    },[searchTerm,sortOrder ]); 

    const handleOrdenChange = (order) => {
        setSortOrder(order);
    }

    return (
    <>
    <div className="container mt-5"
    >
        <Buscador
        onSearch={ setSearchTerm }
        />
        <Ordenador
        onOrdenChange={ handleOrdenChange }
        />
        {error && <div className="alert alert-danger">{ error }</div>}
        {hasResults && (
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
