import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Trap2 = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * 12,
                left: TILE_SIZE * 7,
                width:TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/TRAP.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'trap2-animation 1s steps(8) infinite',
                
            }}
        />
    )
}

export default Trap2;