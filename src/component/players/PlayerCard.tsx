
import { useState } from "react";
import type { Iplayer } from "../../types/player";
import { FaCircleUser } from "react-icons/fa6";
import type { Dispatch } from "react";
import type { SetStateAction } from "react";

import { toast } from "react-toastify";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ 
  player, 
  coin, 
  setCoin, 
  selectedPlayers, 
  setSelectedPlayers
 }: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelectedPlayer = ()=>{
    setIsSelected(true);
    const newCoinPrice = coin - player.price;

    if(newCoinPrice >= 0){
      setCoin(newCoinPrice);
      toast.success(`${player.playerName} is purchase successfully`)
    }else{
      toast.error("Coin in Low")
    }

    setSelectedPlayers([...selectedPlayers, player])
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="badge badge-primary px-4 py-3 font-semibold shadow-md">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body gap-4">

        {/* Player Name */}
        <div className="flex items-center gap-2">
          <FaCircleUser className="text-primary" />
          <h2 className="text-xl font-bold">
            {player.playerName}
          </h2>
        </div>

        {/* Origin */}
        <p className="text-sm text-base-content/60">
          From{" "}
          <span className="font-semibold text-base-content">
            {player.origin}
          </span>
        </p>

        <div className="divider my-0"></div>

        {/* Player Information */}
        <div className="space-y-3">

          <div className="flex items-center justify-between">
            <span className="text-sm text-base-content/60">
              Batting
            </span>

            <span className="font-semibold">
              {player.battingStyle}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-base-content/60">
              Bowling
            </span>

            <span className="text-right font-semibold">
              {player.bouwlingStyle}
            </span>
          </div>

        </div>

        <div className="divider my-0"></div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-xs text-base-content/50">
              Player Price
            </p>

            <h2 className="text-2xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </h2>
          </div>

          <button onClick={()=> handleSelectedPlayer()} className="btn btn-primary rounded-xl px-5 shadow-sm transition-all hover:scale-105"
          //  disabled={isSelected === true ? true : false}
          //  disabled={isSelected ? true : false}
           disabled={isSelected}
           >
           {isSelected === true ? "Selected" :"Choose Player"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;