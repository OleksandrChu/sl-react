import React, {useEffect, useState} from "react";
import axios from "axios";

export function useServerData(url, initialState) {
    const [value, setValue] = useState(initialState);
    useEffect(() => {
        axios.get(url)
            .then(response => setValue(response.data))
    }, [url]);
    return value;
}
