import { useEffect, useRef } from "react"

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    //Remenber the latest callback;

    useEffect(() => {
        savedCallback.current = callback;
    });

    //Setup the interval;

    useEffect(() => {
        function tick() {
            if(typeof savedCallback?.current !== 'undefined'){
                savedCallback.current();
            }
        }
        if(delay !== null){
            const id = setInterval(tick, delay);
            return () => clearInterval(id)
        }
    }, [delay]);
}