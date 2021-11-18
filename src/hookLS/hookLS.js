import { useEffect, useState } from 'react';

export const HookLS = (key, init_Value) => {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) ?? init_Value,
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
};
