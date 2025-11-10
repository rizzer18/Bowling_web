import { Card } from "@/interfaces/card";
import Image from "next/image";
import "./cards.css";
const data: Card[] = [
  {
    text: "Máme 2 bowlingové trasy pro maximálně 8 osob a nejlepší atmosféru.",
    path: "/bowling.png",
  },
  {
    text: "Máme také mnoho dalších drobných aktivit, které vám pomáhají trávit čas.",
    path: "/physical-activity.png",
  },
  {
    text: "U nás se nudit nebudete – máme dva pingpongové stoly a spoustu další zábavy!",
    path: "/ping-pong.png",
  },
];

export function Cards() {
  return (
    <ul className="cards">
      {data.map((e) => (
        <li className="card" key={e.path}>
          <Image src={e.path} alt={e.path.slice(1)} width={85} height={85} />{" "}
          <p>{e.text}</p>
        </li>
      ))}
    </ul>
  );
}
