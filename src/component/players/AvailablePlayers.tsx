
import type { Iplayer } from '../../types/player';
import PlayerCard from './PlayerCard';
// import { Interface } from 'readline';
import type { Dispatch } from 'react';
import type { SetStateAction } from 'react';


interface IAvailableProps{
    players: Iplayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers:Iplayer[];
    setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: IAvailableProps) => {
    // console.log(players, "Players from available players")
    return (
        <div className='grid grid-cols-3 gap-4 mt-5'>
            {players.map((player: Iplayer, index: number) => {
                return <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
            })}
        </div>

    )
};

export default AvailablePlayers;