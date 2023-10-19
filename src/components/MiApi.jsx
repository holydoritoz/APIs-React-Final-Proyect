import { useEffect, useState, useCallback } from 'react'
import { Characters } from './Characters'
import { Buscador } from './Buscador'
import { Ordenador } from './Ordenaror'
import { Pagination } from './Pagination'


export const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [hasResults, setHasResults] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');
    const [info, setinfo] = useState({});

    const fetchData = useCallback(async () => {

        let apiUrl = 'https://rickandmortyapi.com/api/character';

        if (searchTerm) {
            apiUrl += `?name=${searchTerm}`;
        }
        try {
            const res = await fetch(apiUrl);
            const jsonData = await res.json();


            if (jsonData.results.length > 0) {
                let sortedCharacters = jsonData.results;
                let paginationInfo = jsonData.info;

                if (sortOrder === 'asc') {
                    // Ordenar de A-Z
                    sortedCharacters = sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    // Ordenar de Z-A
                    sortedCharacters = sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
                }
    
                setCharacters(sortedCharacters); // Estado de los personakjes
                setinfo(paginationInfo); // Estado de la paginación
                setHasResults(true); // Estado del filtro A-Z / Z-B
                setError(''); // Estado de los errores

            } else {
                setCharacters([]);
                setHasResults(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('No se ha podido encontrar la palabra buscada');
        }
    },[searchTerm, sortOrder]);

    //controla el el filtrado por orden
    const handleOrdenChange = (order) => {
        setSortOrder(order);
    }

    //funciones para controlar pa paginación
    const onPrevious = () => {
        if(info.prev){
            fetchData(info.prev)
        }
    };

    const onNext = () => {
        if(info.next) {
            fetchData(info.next)
        }
    };
    
    
    //incluimos fetchData en el array de dependencias y utilizamos en callback para memorizar la función
    useEffect(() => {
        fetchData(); 
        },[searchTerm,sortOrder,fetchData]); 

    return (
    <>
    <div className="container-fluid p-5"
    >
        <Buscador
        onSearch={ setSearchTerm }
        />
        <Ordenador
        onOrdenChange={ handleOrdenChange }
        />
        <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
        />
        {error && <div className="alert alert-danger">{ error }</div>}
        {hasResults && (
        <>
        <div className="row">
        <Characters
        characters={characters} />
        <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
        />        
        </div>
        </>
        )}
    </div>
    </>
);
};
