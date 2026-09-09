import React from 'react';
import type { Iplayer } from '../../types/player';
import { FaRegTrashCan } from 'react-icons/fa6';
import type { Dispatch } from 'react';
import type { SetStateAction } from 'react';


interface ISelectedPlayerCardProps {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayerCard = ({
    player,
    coin,
    setCoin, 
    selectedPlayers,
    setSelectedPlayers,
 }: ISelectedPlayerCardProps) => {

    const handleRemovePlayer = (player: Iplayer) => {
        const restPlayer = selectedPlayers.filter(selectedPlayers => selectedPlayers.playerName != player.playerName)
        setSelectedPlayers(restPlayer);

        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
    }

    return (
        <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-4 px-4">
            <div className="flex gap-2">
                <img
                    src={player.playerImg}
                    alt=""
                    className="h-[60px] w-[60px]"
                />
                <div>
                    <h2 className="font-bold text-2xl">{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <span onClick={() => handleRemovePlayer(player)} className="text-red-500 font-bold cursor-pointer">
                <FaRegTrashCan />
            </span>
        </div>
    );
};

export default SelectedPlayerCard;