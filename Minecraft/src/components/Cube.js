import React from 'react';
import { useBox } from "use-cannon";
import * as textures from '../textures';

export const Cube = ({ position, type, ...props }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        ...props
    }));

    return (
        <mesh castShadow ref = {ref}>
            <boxBufferGeometry attach = 'geometry' />
            {
                [...Array(6)].map((_, index) => (
                    <meshStandardMaterial
                        attachArray = 'material'
                        map = {textures[type]}
                        key = {index}
                    />
                ))
            }
        </mesh>
    );
}