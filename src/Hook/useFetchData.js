import { useEffect, useState } from "react"

export const useFetchData = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return {data} 
};


