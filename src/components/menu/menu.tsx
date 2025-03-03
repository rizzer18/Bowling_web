"use client";
import Image from "next/image";
import { data } from "./menu-date";
import "./menu.css";
import { useState } from "react";
export function Menu(props: { width: number }) {
  const [showMenu, setShowManu] = useState<boolean>(false);
  return (
    <nav className="navigation">
      {props.width >= 1024 && (
        <ul className="conteiner-navigation-items">
          {data.map((e, i) => (
            <li className="navigation-items" key={i}>
              <a href={e.id}>{e.name}</a>
            </li>
          ))}
        </ul>
      )}
      {!showMenu && props.width < 1024 && (
        <Image
          onClick={() => setShowManu(true)}
          src="/hamburger.png"
          alt="menu"
          width={45}
          height={45}
        ></Image>
      )}
      {showMenu && (
        <div className="phone-menu" onClick={() => setShowManu(false)}>
          <ul className="phone-menu-ul">
          {data.map((e, i) => (
            <li className="navigation-items" key={i}>
              <a href={e.id}>{e.name}</a>
            </li>
          ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
