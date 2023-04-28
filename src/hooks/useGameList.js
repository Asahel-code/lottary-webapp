import { useState, useEffect } from 'react'
import GamblingSerives from '../utils/services/GamblingServices';
import swal from 'sweetalert';
import { getError } from '../utils/getError'

export const useGameList = () => {
    const [gameLists, setGameLists] = useState([]);

    useEffect(() => {
        const fetchGameList = async () => {
            await GamblingSerives.fetchGameList()
                .then((response) => {
                    setGameLists(response);
                })
                .catch((error) => {
                    swal("Error", getError(error), 'error');
                })
        }

        fetchGameList();
    }, []);

    return { gameLists };
}
