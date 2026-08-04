"use client";
import Image from "next/image";
import { data } from "./menu-date";
import "./menu.css";
import { useState } from "react";

export function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="navigation">
      {/* Desktop Menu */}
      <ul className="container-navigation-items">
        {data.map((e, i) => (
          <li className="navigation-item" key={i}>
            <a href={e.id}>{e.name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle menu"
      >
        <Image
          src={showMenu ? "/close.png" : "/hamburger.png"}
          alt="menu toggle"
          width={28}
          height={28}
        />
      </button>

      {/* Mobile Drawer Modal */}
      {showMenu && (
        <div className="phone-menu-overlay" onClick={() => setShowMenu(false)}>
          <div className="phone-menu-card" onClick={(e) => e.stopPropagation()}>
            <div className="phone-menu-header">
              <span className="phone-menu-title">NAVIGACE</span>
              <button
                className="phone-menu-close"
                onClick={() => setShowMenu(false)}
              >
                ✕
              </button>
            </div>
            <ul className="phone-menu-ul">
              {data.map((e, i) => (
                <li className="phone-navigation-item" key={i}>
                  <a href={e.id} onClick={() => setShowMenu(false)}>
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
