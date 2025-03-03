"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./slider.css";
let move: boolean = true;
const data: string[] = [
  "left-image-slider",
  "main-image-slider",
  "right-image-slider",
];
export function Slider(props: {
  data: { path: string, index: number}[];
  visible: boolean;
  index: number;
  slider: () => void;
}) {
  const [index, setIndex] = useState<number>(props.index);
  const [indexOfClas, setIndexOfClass] = useState<number>(1);
  const [index1, setIndex1] = useState<number>(2);
  const [index2, setIndex2] = useState<number>(1);
  const [index3, setIndex3] = useState<number>(0);
  const [indexPictupe1, setIndexPictupe1] = useState<number>(0);
  const [indexPictupe2, setIndexPictupe2] = useState<number>(0);
  const [indexPictupe3, setIndexPictupe3] = useState<number>(0);
  useEffect(()=>{
      setIndexPictupe1( props.index - 1 < 0 ? props.data.length - 1 : props.index - 1);
      setIndexPictupe2(props.index);
      setIndexPictupe3( props.index + 1 >= props.data.length ? 0 : props.index + 1);
  }, [props.index])
  function MoveLeft() {
    if (move) {
        let int1 = index1;
        let int2 = index2;
        let int3 = index3;
          if(index1 === 3){
              let index = indexPictupe1;
              for(let i = 0; i < 3; i++){
                index = index === props.data.length-1 ? 0 : index+1;
              }
              setIndexPictupe1(index);
              int1 = 0;
              setIndex1(int1);
          }
          if(index2 === 3){
              let index = indexPictupe2;
              for(let i = 0; i < 3; i++){
                index = index === props.data.length-1 ? 0 : index+1;
              }
              setIndexPictupe2(index);
              int2 = 0;
              setIndex2(int2);
          }
          if(index3 === 3){
              let index = indexPictupe3;
              for(let i = 0; i < 3; i++){
                index = index === props.data.length-1 ? 0 : index+1;
              }
              setIndexPictupe3(index);
              int3 = 0;
              setIndex3(int3);
          }
          setIndex1(int1+1);
          setIndex2(int2+1);
          setIndex3(int3+1);
          if(index + 1 === props.data.length){
            setIndex(0);
          }
          else{
            setIndex(index + 1);
          }
      if (indexOfClas - 1 === -1) {
        setIndexOfClass(data.length - 1);
      } else {
        setIndexOfClass(indexOfClas - 1);
      }
      move = false;
      setTimeout(() => {
        move = true;
      }, 500);
    }
  }
  function MoveRight() {
    if (move) {
        let int1 = index1;
        let int2 = index2;
        let int3 = index3;
          if(index1 === 0){
              let index = indexPictupe1;
              for(let i = 0; i < 3; i++){
                index = index === 0 ? props.data.length-1 : index-1;
              }
              setIndexPictupe1(index);
              int1 = 3;
              setIndex1(int1);
          }
          if(index2 === 0){
              let index = indexPictupe2;
              for(let i = 0; i < 3; i++){
                index = index === 0 ? props.data.length-1 : index-1;

              }
              setIndexPictupe2(index);
              int2 = 3;
              setIndex2(int2);
          }
          if(index3 === 0){
              let index = indexPictupe3;
              for(let i = 0; i < 3; i++){
                index = index === 0 ? props.data.length-1 : index-1;
              }
              setIndexPictupe3(index);
              int3 = 3;
              setIndex3(int3);
          }
          setIndex1(int1-1);
          setIndex2(int2-1);
          setIndex3(int3-1);
          if(index -1 === -1){
            setIndex(props.data.length-1);
          }
          else{
            setIndex(index -1);
          }
      if (indexOfClas + 1 == data.length) {
        setIndexOfClass(0);
      } else {
        setIndexOfClass(indexOfClas + 1);
      }
      move = false;
      setTimeout(() => {
        move = true;
      }, 500);
    }
  }
  return (
    <div>
      <div className={`slider-form-div ${props.visible ? "slider-visible" : ""}`}>
        <button className="close" onClick={() => props.slider()}><Image src="/close.png" alt="close" width={40} height={40}/></button>
        <button className="left-button" onClick={() =>  MoveRight()}>
          <Image src="/left-arrow.png" alt="right-arrow" width={60} height={60}/>
        </button>
        <Image
          className={
            data[indexOfClas - 1 < 0 ? data.length - 1 : indexOfClas - 1]
          }
          src={props.data[indexPictupe1].path ?? ""}
          alt="first-picture"
          width={696}
          height={555}
        />
        <Image
          className={data[indexOfClas]}
          src={props.data[indexPictupe2].path ?? ""}
          alt="second-picture"
          width={696}
          height={555}
        />
        <Image
          className={data[indexOfClas + 1 >= data.length ? 0 : indexOfClas + 1]}
          src={props.data[indexPictupe3].path ?? ""}
          alt="third-picture"
          width={696}
          height={555}
        />
        <button onClick={() => MoveLeft()} className="right-button">
        <Image src="/right-arrow.png" alt="right-arrow" width={60} height={60}/>
        </button>
         <div className="under-slider-container">{props.data.map((e, i) => <Image key={i} className={e.index === index ? "selected-image-of-slider" : ""} src={e.path} alt="picture-of-slider" width={80} height={50}/>)}</div>
      </div>
    </div>
  );
}
