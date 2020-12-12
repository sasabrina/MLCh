import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsloading(true);
        setIsError(false);

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                setIsloading(false);
            })
            .catch(() => {
                setIsloading(false);
                setIsError(true)
            })
    }, [url])

    return [data, isLoading, isError]
}

export default useFetch