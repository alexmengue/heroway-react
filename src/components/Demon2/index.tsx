import React from 'react';

import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants';

import './index.css';

const Demon2 = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * 7,
                left: TILE_SIZE * 5,
                width:DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon2-animation 1s steps(4) infinite', 
            }}
        />
    )
}

export default Demon2;