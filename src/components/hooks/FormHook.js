import {useState} from "react";

export function useTextField(init, name) {
    const [value, setValue] = useState(init);
    return {
        value: value,
        name: name,
        onChange: (e) => setValue(e.target.value)
    };
}

export function buildObject(...fields) {
    const object = {};
    for (let field of fields) {
        object[field.name] = field.value
    }
    return object
}