"use client";
import Image from "next/image";
import { useEffect, useState, TouchEvent } from "react";
import "./slider.css";

interface SliderPhoto {
  path: string;
  index: number;
  title?: string;
}

interface SliderProps {
  data: SliderPhoto[];
  visible: boolean;
  index: number;
  slider: () => void;
}

export function Slider({ data, visible, index, slider }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") slider();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, currentIndex, data.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) handleNext(); // Swiped left -> next
    if (diff < -50) handlePrev(); // Swiped right -> prev

    setTouchStart(null);
  };

  if (!visible || !data.length) return null;

  const currentPhoto = data[currentIndex] || data[0];

  return (
    <div className="slider-backdrop" onClick={slider}>
      <div
        className="slider-modal"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header */}
        <div className="slider-top-bar">
          <div className="slider-info">
            <span className="slider-counter">
              Foto {currentIndex + 1} / {data.length}
            </span>
            {currentPhoto.title && (
              <span className="slider-photo-title">{currentPhoto.title}</span>
            )}
          </div>
          <button className="slider-close-btn" onClick={slider} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="slider-stage">
          <button
            className="slider-nav-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="slider-image-wrapper">
            <Image
              src={currentPhoto.path}
              alt={currentPhoto.title || `Foto ${currentIndex + 1}`}
              width={900}
              height={650}
              className="slider-main-image"
              priority
            />
          </div>

          <button
            className="slider-nav-btn next-btn"
            onClick={handleNext}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>

        {/* Bottom Thumbnails Bar */}
        <div className="slider-thumbnails-strip">
          {data.map((item, i) => (
            <div
              key={item.path}
              className={`slider-thumb-box ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            >
              <Image
                src={item.path}
                alt={`Thumbnail ${i + 1}`}
                width={70}
                height={50}
                className="slider-thumb-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
