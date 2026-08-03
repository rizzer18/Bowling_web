"use client";
import Image from "next/image";
import "./images.css";
import { useState } from "react";
import { Slider } from "../slider/slider";

interface GalleryPhoto {
  path: string;
  index: number;
  title: string;
  category: "Bowling" | "Prostory" | "Zábava" | "Bar";
}

const data: GalleryPhoto[] = [
  {
    path: "/IMG-20250111-WA0017.jpeg",
    index: 0,
    title: "Bowlingové dráhy SV",
    category: "Bowling",
  },
  {
    path: "/IMG-20250111-WA0018.jpeg",
    index: 1,
    title: "Prostorný sál pro akce",
    category: "Prostory",
  },
  {
    path: "/IMG-20250111-WA0019.jpeg",
    index: 2,
    title: "Velké stoly pro oslavy",
    category: "Prostory",
  },
  {
    path: "/IMG-20250111-WA0020.jpeg",
    index: 3,
    title: "Dětský koutek",
    category: "Zábava",
  },
  {
    path: "/IMG-20250111-WA0022.jpeg",
    index: 4,
    title: "Klubové zázemí",
    category: "Bowling",
  },
  {
    path: "/IMG-20250111-WA0024.jpeg",
    index: 5,
    title: "Bar & Posezení",
    category: "Bar",
  },
  {
    path: "/IMG-20250111-WA0026.jpeg",
    index: 6,
    title: "Společenská zóna",
    category: "Prostory",
  },
  {
    path: "/IMG-20250111-WA0027.jpeg",
    index: 7,
    title: "Barový pult",
    category: "Bar",
  },
  {
    path: "/IMG-20250111-WA0028.jpeg",
    index: 8,
    title: "Exteriér klubu",
    category: "Prostory",
  },
  {
    path: "/IMG-20250111-WA0030.jpeg",
    index: 9,
    title: "Stolní tenis / Ping-pong",
    category: "Zábava",
  },
  {
    path: "/IMG-20250111-WA0032.jpeg",
    index: 10,
    title: "Pohled na dráhy",
    category: "Bowling",
  },
];

const categories = ["Vše", "Bowling", "Prostory", "Zábava", "Bar"];

export function DrowImages() {
  const [visible, setVisible] = useState<boolean>(false);
  const [valueIndex, setValueIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("Vše");

  function Select(index: number) {
    setVisible(!visible);
    setValueIndex(index);
  }

  function SelectClose() {
    setVisible(!visible);
  }

  const filteredData =
    activeCategory === "Vše"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-container">
      {/* Category Filter Tabs */}
      <div className="gallery-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "Vše" && "🖼️ "}
            {cat === "Bowling" && "🎳 "}
            {cat === "Prostory" && "🏛️ "}
            {cat === "Zábava" && "🏓 "}
            {cat === "Bar" && "🍹 "}
            {cat}
          </button>
        ))}
      </div>

      {/* Lightbox Slider */}
      {visible && (
        <Slider
          data={data}
          index={valueIndex}
          visible={visible}
          slider={SelectClose}
        />
      )}

      {/* Bento Grid */}
      <div className={`bento-gallery-grid ${activeCategory === "Vše" ? "is-bento" : ""}`}>
        {filteredData.map((e) => (
          <div
            key={e.path}
            onClick={() => Select(e.index)}
            className="gallery-item"
          >
            <Image
              className="building-image"
              src={e.path}
              width={500}
              height={400}
              alt={e.title}
            />

            <div className="gallery-item-overlay">
              <span className="gallery-badge">{e.category}</span>
              <div className="gallery-item-footer">
                <span className="gallery-item-title">{e.title}</span>
                <div className="gallery-zoom-icon">🔍</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
