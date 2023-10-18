import { useEffect, useState } from 'react'
import { Characters } from './Characters'
import { Pagination } from './Pagination'
import { Buscador } from './Buscador'

export const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
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
        setInfo(jsonData.info);
        setHasResults(true);
        setError('');
        } else {
        setCharacters([]);
        setInfo({});
        setHasResults(false);
        setError('No se ha podido encontrar la palabra buscada');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setError('Ocurrió un error al buscar los datos');
    }
};

    useEffect(() => {
    fetchData(); 
    });

    const onPrevious = () => {
    if (info.prev) {
        setSearchTerm('');
        fetchData(info.prev);
    }
    };

    const onNext = () => {
    if (info.next) {
        setSearchTerm('');
        fetchData(info.next);
    }
    };
    return (
    <>
    <div className="container mt-5">
        <Buscador
        onSearch={ setSearchTerm }
        />

        {
        error && <div className="alert alert-danger">{ error }</div>
        }

        {hasResults && (
        <>
        <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext} />

        <div className="row">
        <Characters
        characters={characters} />
        </div>

        <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext} />
        </>
        )}
    </div>

    </>
);
};
