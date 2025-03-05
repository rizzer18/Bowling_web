"use client"
import Image from "next/image";
import "./images.css";
import { useState } from "react";
import { Slider } from "../slider/slider";
import { Selection } from "../phone_selector/selector";
const data: { path: string, index: number }[] = [
  {
    path: "/IMG-20250111-WA0017.jpeg",
    index: 0
  },
  {
    path: "/IMG-20250111-WA0018.jpeg",
    index: 1
  },
  {
    path: "/IMG-20250111-WA0019.jpeg",
    index: 2
  },
  {
    path: "/IMG-20250111-WA0020.jpeg",
    index: 3
  },
  {
    path: "/IMG-20250111-WA0022.jpeg",
    index: 4
  },
  {
    path: "/IMG-20250111-WA0024.jpeg",
    index: 5
  },
  {
    path: "/IMG-20250111-WA0026.jpeg",
    index: 6
  },
  {
    path: "/IMG-20250111-WA0027.jpeg",
    index: 7
  },
  {
    path: "/IMG-20250111-WA0028.jpeg",
    index: 8
  },
  {
    path: "/IMG-20250111-WA0030.jpeg",
    index: 9
  },
  {
    path: "/IMG-20250111-WA0032.jpeg",
    index: 10
  },
];
export function DrowImages(){
    const [visible, setVisible] = useState<boolean>(false);
    const [visiblePhone, setVisiblePhone] = useState<boolean>(false);
    const [valueIndex, setValueIndex] = useState<number>(0);
    function Select(index: number){
     setVisible(!visible);
     setValueIndex(index);
    }
    function SelectClose(){
      setVisible(!visible);
     }
    return(
        <>
          {visible && window.innerWidth >= 1024 ? <Slider data={data} index={valueIndex} visible={visible} slider={SelectClose}/> :  <div></div>}
         
           {data.map((e, i) => <div key={e.path} onClick={() => {if(window.innerWidth >= 1024)Select(i); if(window.innerWidth <= 1024) Select(i);}} className="fornt"><Image className="zoom-picture" src="/picture.png" alt="zoom-picture" width={60} height={60}/><Image className="building-image"  src={e.path} width={392} height={325} alt="building-image"/></div>)}
        </>
    );
}