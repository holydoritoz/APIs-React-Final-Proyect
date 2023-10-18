import { useEffect, useState } from "react"
import { Characters } from "./Characters"
import { Pagination } from './Pagination'

export const MiApi = () => {
    const [characters, setCharacters] = useState([]); // Array vació, para que se llene con el mapeo a posterior
    const [info, setInfo] = useState({});

    const InitialtUrl = 'https://rickandmortyapi.com/api/character';

    const fetchCharacters = async (url) => {
    try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setCharacters(jsonData.results)  // Obtengo la data de los personajes
        setInfo(jsonData.info) // Obtengo la data de información para la paginación

    } catch(error) {
        console.log(error)
    }};
    
    useEffect(()=> {
        fetchCharacters(InitialtUrl);
    }, []) // Dependencia vacía ejecutamos el código solo una vez

    //!Funciones props, para manejar la paginación

    const onPrevious = () => {
        fetchCharacters(info.prev);
    }

    const onNext = () => {
        fetchCharacters(info.next);

    }

    return (
    <>
    <div className="container mt-5">
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
