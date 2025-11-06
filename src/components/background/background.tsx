import Image from "next/image";
import img from "../../../src/background.png"
import "./background.css"
export function Background(){
    return (
      <div className="background-container">
        <Image src={img} alt="backgroung" className="background"></Image>
        <Image src="/peple-bowling.png" width={234} height={234} alt="backgroung-2" className="background-2"></Image>
        <div className="bowling-image-container">
        <Image src="/BOW 2.png" width={294} height={329} alt="backgroung-2" ></Image>
        <Image src="/BOW 2.png" width={294} height={329} alt="backgroung-2" ></Image>
        </div>
        <div className="container-images-background">

        
        <Image src="/peple-bowling.png" width={234} height={234} alt="backgroung-2" className="background-2"></Image>
        <Image src="/peple-bowling.png" width={234} height={234} alt="backgroung-2" className="background-2"></Image>
        <div className="bowling-image-container">
        <Image src="/BOW 2.png" width={294} height={329} alt="backgroung-2" ></Image>
        <Image src="/BOW 2.png" width={294} height={329} alt="backgroung-2" ></Image>
        </div>
        
        </div>
      </div>
    );
}