import { Card } from "@/interfaces/card";
import Image from "next/image";
import "./cards.css";

interface ExtendedCard extends Card {
  title: string;
  badge: string;
}

const data: ExtendedCard[] = [
  {
    title: "Bowlingové dráhy",
    badge: "2 dráhy • až 8 osob",
    text: "Máme 2 profesionální bowlingové dráhy pro maximálně 8 osob a nejlepší atmosféru pro vaše zápasy.",
    path: "/bowling.png",
  },
  {
    title: "Aktivity & Zábava",
    badge: "Doprovodný program",
    text: "Máme pro vás připraveno mnoho dalších aktivit a společenských her, které vám pomohou si užít čas naplno.",
    path: "/physical-activity.png",
  },
  {
    title: "Stolní tenis",
    badge: "2 ping-pong stoly",
    text: "U nás se nudit nebudete – k dispozici máme dva tenisové stoly na ping-pong a spoustu další zábavy!",
    path: "/ping-pong.png",
  },
];

export function Cards({ onReserve }: { onReserve?: () => void }) {
  return (
    <div className="cards-grid">
      {data.map((item) => (
        <div
          className="offering-card glass-card"
          key={item.path}
          onClick={onReserve}
          style={{ cursor: "pointer" }}
        >
          <div className="offering-card-header">
            <div className="offering-icon-box">
              <Image src={item.path} alt={item.title} width={44} height={44} />
            </div>
            <span className="offering-badge">{item.badge}</span>
          </div>

          <h3 className="offering-title">{item.title}</h3>
          <p className="offering-text">{item.text}</p>

          <div className="offering-footer">
            <button
              className="offering-link-btn"
              onClick={(e) => {
                e.stopPropagation();
                onReserve?.();
              }}
            >
              Rezervovat dráhu →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


