import { useEffect, useState } from "react"
import { useFetchData } from "./useFetchData";

export const usePromiseAll = () => {
    const [promises, setPromises] = useState([]);

    const { data } = useFetchData(process.env.REACT_APP_END_POINT)

    const fetchData = async () => {
        try {
            const { results } = data;
            const urls = results ? results.map(item => item.url) : []

            const request = urls.map(url => fetch(url))
            await Promise.all(request)
                .then(responses => responses)
                .then(responses => Promise.all(responses.map(r => r.json())))
                .then(value => setPromises(value));
        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return promises.length > 1 ? { promises } : fetchData();
};