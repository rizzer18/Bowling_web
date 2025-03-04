"use client";
import { Background } from "@/components/background/background";
import "./main.css";
import { Menu } from "@/components/menu/menu";
import Image from "next/image";
import img from "../../public/golden-logo-template-free-png.webp";
import img3 from "../../public/IMG-20250111-WA0032.jpeg";
import img4 from "../../public/calendar.png";
import img5 from "../../public/handshake.png";
import img6 from "../../public/booking.png";
import { ReserveButton } from "@/components/reserve/reserveButton";
import { Cards } from "@/components/cards/cards";
import { ReserveItem } from "@/components/reserve/reservationItem";
import { DrowImages } from "@/components/drawImages/images";
import { Suspense, useEffect, useState } from "react";
import { Forma } from "@/components/form/form";
import { useSearchParams } from "next/navigation";

function SearchHandler({ setFormVisible }: { setFormVisible: (val: boolean) => void }) {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (searchParams.get("info") === "true") {
      setFormVisible(true);
      document.getElementsByClassName("AAAAAA")[0]?.classList.add("hideee");
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [formVisible, setFormVisible] = useState<boolean>(false);

  useEffect(() => {
    const g = () => setWidth(window.innerWidth);
    window.addEventListener("resize", g);
    return () => window.removeEventListener("resize", g);
  }, []);

  return (
    <div>
      <Background />
      <Suspense>
        <SearchHandler setFormVisible={setFormVisible} />
      </Suspense>
      {formVisible && (
        <div style={{ position: "relative" }}>
          <Forma width={width} />
          <button
            className="form-close"
            onClick={() => {
              setFormVisible(!formVisible);
              document.getElementsByClassName("AAAAAA")[0]?.classList.remove("hideee");
            }}
          >
            <Image src="/close.png" alt="close" width={20} height={20} />
          </button>
        </div>
      )}
      <main className="main-container">
        {/* Інший код */}
      </main>
    </div>
  );
}

