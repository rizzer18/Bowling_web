import { Card } from "@/interfaces/card";
import Image from "next/image";
import "./cards.css";
const data: Card[] = [
    {
        text: "máme 2 bollingové trasy pro maximálně 8 osob a nejlepší atmosféru.",
        path: "/bowling.png",
      },

  {
    text: "Máme také mnoho dalších drobných aktivit, které nám pomáhají trávit čas.",
    path: "/physical-activity.png",
  },
  {
    text: "pro vaši zábavu máme 2 pingpongové stoly pro vás a vašeho kamaráda nebo kamarádku",
    path: "/ping-pong.png",
  },
];

export function Cards(){

    return(
        <ul className="cards">
            {data.map(e => <li className="card" key={e.path} ><Image src={e.path} alt={e.path.slice(1)} width={85} height={85}/> <p>{e.text}</p></li>)}
        </ul>
    );
}