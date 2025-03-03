
import img from "../../../public/reserve.png";
import Image from "next/image";
import "./reserveButton.css";
export function ReserveButton(){
  return (
    <button  className="reserve-button">
      <p className="button-text">Rezervovat</p>
      <Image
        className="button-image"
        src={img}
        alt="buttomImage"
        width={25}
        height={25}
      ></Image>
    </button>
  );
}