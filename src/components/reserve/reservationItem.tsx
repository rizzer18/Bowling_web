import { ReserveButton } from "./reserveButton";
import "./reservationItem.css"

export function ReserveItem(props: { txt: string }){

    return(
        <div className="reservation-item"><h3>{props.txt}</h3> <div className="telefon-or-reserve"><p id="tel">tel:  +420-607-496-833</p> <p id="or">nebo</p> <ReserveButton/></div></div>
    );
}