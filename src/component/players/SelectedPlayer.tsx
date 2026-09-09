import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";

interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

interface ISelectedPlayerItemProps extends ISelectedPlayersProps {
  player: Iplayer;
}

const SelectedPlayerItem = ({ player }: ISelectedPlayerItemProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm">
      <p className="text-lg font-medium text-slate-700">
        {player.playerName}
      </p>
    </div>
  );
};

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <h2 className="font-bold text-3xl my-10 text-center text-red-500">
        No Selected Player
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      {selectedPlayers.map((player: Iplayer, ind: number) => {
        return (
          <SelectedPlayerItem
            key={ind}
            coin={coin}
            setCoin={setCoin}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayer;
