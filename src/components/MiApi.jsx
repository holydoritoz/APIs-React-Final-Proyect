import { useEffect, useState } from 'react'
import { Characters } from './Characters'
import { Pagination } from './Pagination'
import { Buscador } from './Buscador'

export const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
    const fetchData = async () => {
    const url = searchTerm ?
    `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    :
    'https://rickandmortyapi.com/api/character';

    try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setCharacters(jsonData.results);
        setInfo(jsonData.info);
        
    } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

      fetchData(); // Llamada inicial sin searchTerm para obtener todos los personajes

    return () => {
        // Limpiar el término de búsqueda al salir del componente
        setSearchTerm('');
    };
    }, [searchTerm]);

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

    const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setCharacters(jsonData.results);
        setInfo(jsonData.info);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    return (
    <>
    <div className="container mt-5">
        <Buscador
        onSearch={setSearchTerm}
        />

        <Pagination
        prev = {info.prev}
        next = {info.next}
        onPrevious={onPrevious}
        onNext={onNext}
        />
        <div className="row">
        <Characters
        characters = { characters }
        />
        <Pagination
        prev = {info.prev}
        next = {info.next}
        onPrevious={onPrevious}
        onNext={onNext}
        />
        </div>
    </div>

    </>
);
};
