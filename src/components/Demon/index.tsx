import React from 'react';

import { DEMON_TILE_SIZE, TILE_SIZE, EDirection } from '../../settings/constants';

import './index.css';

import useEnemyMoviment from '../../hooks/UseEnemyMoviment';

const Demon = () => {

    const moviment = useEnemyMoviment({x: 10, y: 10});

    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * moviment.position.y,
                left: TILE_SIZE * moviment.position.x,
                width:DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            }}
        />
    )
}

export default Demon;