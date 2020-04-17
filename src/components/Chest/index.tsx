import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Chest = () => {
    return (
        <div
            style={{
                bottom: TILE_SIZE * 15,
                left: TILE_SIZE * 3,
                width:TILE_SIZE,
                height: TILE_SIZE,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest-animation 1s steps(3) infinite',
                position: 'absolute'
            }}
        />
    )
}

export default Chest;