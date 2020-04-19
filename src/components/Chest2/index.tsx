import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Chest2 = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * 4,
                left: TILE_SIZE * 15,
                width:TILE_SIZE,
                height: TILE_SIZE,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest2-animation 1s steps(3) infinite',
            }}
        />
    )
}

export default Chest2;