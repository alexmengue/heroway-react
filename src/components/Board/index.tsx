import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../Mini-Demon';
import MiniDemon2 from '../Mini-Demon2';
import Demon from '../Demon';
import Demon2 from '../Demon2';
import Chest from '../Chest';
import Chest2 from '../Chest2';
import Trap from '../Trap';
import Trap2 from '../Trap2';


const Board = () => {
    return (
        <div>
            <Hero/>
            <MiniDemon initialPosition={{ x: 10, y: 8 }} />/>
            <MiniDemon2 initialPosition={{ x: 10, y: 10 }} />/>
            <Demon/>
            <Demon2/>
            <Chest/>
            <Chest2/>
            <Trap/>
            <Trap2/>
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>

        </div>
       
    );
}

export default Board;