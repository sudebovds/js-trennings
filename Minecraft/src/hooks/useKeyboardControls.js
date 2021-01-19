import { useEffect, useState } from "react";
import { UseStore } from "./useStore";

function actionByKey(key){
    const keys = {
        KeyW: 'moveForward',
        KeyS: 'moveBack',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump'
    };

    return keys[key];
}

function textureByKey(key){
    const keys = {
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log'
    };

    return keys[key];
}

export const useKeyboardControls = () => {
    const [movement, setMovement] = useState({
        moveForward: false,
        moveBack: false,
        moveLeft: false,
        moveRight: false,
        jump: false
    });

    const setTexture = UseStore((state) => state.setTexture);

    useEffect(() => {
        const handlerKeyDown = (e) => {
            // Movement key
            if(actionByKey(e.code)){
                setMovement((state) => ({...state, [actionByKey(e.code)]: true}));
            }
            if(textureByKey(e.code)){
                setTexture(textureByKey(e.code));
            }
        }

        const handlerKeyUp = (e) => {
            if(actionByKey(e.code)){
                setMovement((state) => ({...state, [actionByKey(e.code)]: false}));
            }
        }

        document.addEventListener('keydown', handlerKeyDown);
        document.addEventListener('keyup', handlerKeyUp);

        return() => {
            document.removeEventListener('keydown', handlerKeyDown);
            document.removeEventListener('keyup', handlerKeyUp);
        }
    });

    return movement;
}