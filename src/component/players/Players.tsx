import  { use, useState } from 'react';
import type { Iplayer } from '../../types/player';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayer from './SelectedPlayer';
import type { Dispatch } from 'react';
import type { SetStateAction } from 'react';

interface IPlayerProps {
    playersPromise: Promise<Iplayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
}

const Players = ({playersPromise, coin, setCoin}: IPlayerProps) => {
    const players = use(playersPromise)
    // console.log(players)
    const [buttonType, setButtonType] = useState<"available" | "selected">("available");
    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

    const handleUpdateButtonType = (type: "available" | "selected") => {
        setButtonType(type)
    }

    return (
        <div className='mx-auto w-full max-w-7xl px-4'>
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bolt text-xl">
                    { buttonType === "available" ? "Available Players" : "Selected Player"}
                </h2>
                <div>
                    <button onClick={() => handleUpdateButtonType("available")} className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
                    <button onClick={() => handleUpdateButtonType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-r-none`} >Selected</button>
                </div>
            </div>
            {buttonType === "available" ? (<AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>) : (<SelectedPlayer coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayer>)}
        </div>
    );
};

export default Players;