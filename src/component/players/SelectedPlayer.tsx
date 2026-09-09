import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";

interface ISelectedPlayersProps {
  player: Iplayer;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin
}: ISelectedPlayersProps) => {

    if(selectedPlayers.length === 0){
        return (
            <h2 className="font-bold text-3xl my-10 text-center text-red-500">
                No Selected Player
            </h2>
        )
    }

  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      {selectedPlayers.map((player: Iplayer, ind: number) => {
        return <SelectedPlayer key={ind} coin={coin} setCoin={setCoin} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayer>
      })}
    </div>
  );
};

export default SelectedPlayer;
