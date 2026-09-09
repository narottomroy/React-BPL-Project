import { Suspense, useState } from "react"
import Nav from "./component/Nav"
import Banner from "./component/Banner"
import Players from "./component/players/Players"
import type { Iplayer } from "./types/player"
import "./index.css";


const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data
}

function App() {
  // const playersPromise = playersFetch()
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(5000)

  return (
    <>
      <Nav coin = {coin}/>
      <Banner />
      <Suspense fallback={<h2>Loading.........</h2>}>
        <Players playersPromise={playersPromise} coin ={coin} setCoin= {setCoin} />
      </Suspense>
    </>
  )
}

export default App
