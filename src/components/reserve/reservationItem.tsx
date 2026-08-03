import { ReserveButton } from "./reserveButton";
import "./reservationItem.css";

export function ReserveItem(props: { txt: string }) {
  return (
    <div className="reservation-item glass-card">
      <div className="reservation-item-left">
        <div className="reservation-icon-badge">⚡</div>
        <h3 className="reservation-item-title">{props.txt}</h3>
      </div>

      <div className="telefon-or-reserve">
        <a
          href="tel:+420607496833"
          className="tel-pill"
          onClick={(e) => e.stopPropagation()}
        >
          📞 +420 607 496 833
        </a>
        <span className="or-tag">nebo</span>
        <ReserveButton />
      </div>
    </div>
  );
}