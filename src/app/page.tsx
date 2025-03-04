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
import { useEffect, useState } from "react";
import { Forma } from "@/components/form/form";

export default function Home() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  
  const [formVisible, setFormVisible] = useState<boolean>(false);
  useEffect(() => {
    const g = () => {
      setWidth(window.innerWidth);
    };
   
    
    window.addEventListener("resize", g);
    return () => {
      window.removeEventListener("resize", g);
    };
  }, []);

  return (
    <div>
      <Background />
        {formVisible && <div style={{position: "relative"}}><Forma width={width}></Forma>  <button className="form-close" onClick={() => {setFormVisible(!formVisible); document.getElementsByClassName("AAAAAA")[0].classList.remove("hideee");}}><Image src="/close.png" alt="close" width={20} height={20}/></button></div>}
      <main className="main-container" >
        <div>
          <section className="menu-section">
            <Image
              className="logo"
              src={img}
              alt="Logo"
              width={120}
              height={120}
            ></Image>
            {width >= 1024 && <Menu width={width} />}
            <div className="reservation-info-container">
              {width > 1164 && (
                <div className="info-container">
                  <p>Rezervační telefon:</p>
                  <a>+420 607 496 833</a>
                </div>
              )}

              <div onClick={() => {setFormVisible(!formVisible);  document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveButton /></div>
              {width < 1024 && <Menu width={width} />}
            </div>
          </section>
          <div className="main-text-section">
            <h1 className="prostor-pro-akce">
              {width > 1160 && (
                <div>
                  Prostor pro vaše <span className="action">AKCE</span>
                </div>
              )}
              {width < 500 && (
                <div>
                  Prostor pro vaše <span className="action">AKCE</span>
                </div>
              )}
              {width < 1024 ||
                (1160 >= width && (
                  <div style={{ color: "transparent" }}>
                    Prostor pro vaše AKCE
                  </div>
                ))}
              <span className="action-bpf">
                Bowling&nbsp;&nbsp;&nbsp;Pin-pong&nbsp;&nbsp;&nbsp;Firemní akce
              </span>
            </h1>
            <div className="text-bowling-container">
              <h2 className="bowling-text">Bowlingový Club SV</h2>{" "}
            </div>
          </div>
        </div>
        <section className="second-main-container">
          <div className="white-circle"></div>
          <div className="viwe">
            <Image src={img3} alt="show"></Image>
          </div>
          <div className="container-proch-my">
            <h2 className="proch-my">Proč jsme</h2>
            <ul className="proch-items">
              <li>
                <Image src={img4} alt="calender" width={60} height={60}></Image>{" "}
                <p>Jsme nový klub Bolling, který pro vás pracuje již rok.</p>
              </li>
              <li>
                <Image src={img5} alt="calender" width={60} height={60}></Image>{" "}
                <p>Máme také více než tisíc spokojených zákazníků.</p>
              </li>
              <li>
                <Image src={img6} alt="calender" width={60} height={60}></Image>{" "}
                <p>A máme něco pro vás, tak neváhejte a rezervujte u nas.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="third-main-container">
          <h2 className="co-vshehno">Co všechno u nás najdete</h2>
          <Cards />
        </section>
        <section className="fourth-main-container">
          <h2 className="cennik" id="cenni">Ceník bowlingu</h2>
          <div className="price-of-hour">
            <h3>234 Kč</h3>
            <p>
              1 hodina{" "}
              <span className="minimum-plat">minimální platba 1 hodina</span>
            </p>{" "}
            <div className="line"></div>
          </div>
          <div onClick={() => {setFormVisible(!formVisible);document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveItem txt="Chceš Rezervovat drahu?" /></div> 
        </section>
        <section className="fiveth-main-container">
          <div className="images-container">
            <h2 id="jakto">Jak to u nás vypadá?</h2>
            <DrowImages />
          </div>
        </section>
        <section className="sixth-main-container">
          <h2>Různé další aktivity</h2>
          <div className="information-container">
            <div className="container-of-horizontals">
              <div className="information-container-horizontal">
                <Image
                  src={img3}
                  alt="picture"
                  width={360}
                  height={300}
                ></Image>{" "}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
              <div className="information-container-horizontal">
                <Image
                  src={img3}
                  alt="picture"
                  width={360}
                  height={300}
                ></Image>{" "}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
              {width <= 1300 && (
                <div className="information-container-horizontal">
                  <Image
                    src={img3}
                    alt="picture"
                    width={300}
                    height={300}
                  ></Image>{" "}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              )}
            </div>
            {width > 1300 && (
              <div className="information-container-vertical">
                <Image
                  src={img3}
                  alt="picture"
                  width={390}
                  height={300}
                ></Image>{" "}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, Lorem Ipsum has been
                  the industry`s standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            )}
          </div>
        </section>
        <section className="seventh-main-container">
          <h2 id="oter">Otevírací doba</h2>
          <div className="pracovni-doba">
            <h3 id="left">Po-Pa - 12:00 - 23:00</h3>
            <h3 id="right">Sb-Ne - 9:00 - 4:00</h3>
          </div>
          <div onClick={() => {setFormVisible(!formVisible); document.getElementsByClassName("AAAAAA")[0].classList.add("hideee");}}><ReserveItem txt="Chceš užit čas u nas?" /></div> 
        </section>
        <footer className="eighth-main-container">
          <div className="kontakt-adresa-container">
            <div className="kontakty-container">
              <h3>Kontakty:</h3>
              <ul>
                <li>+420 607 496 833</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="adresa-container" id="AAA">
              <h3>Adresa:</h3>
              <p>Nádražní 486,517 21 Týniště nad Orlicí</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps?q=Nádražní+486,517+21+Tyniste+nad+Orlici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2763584839366!2d16.0724973!3d50.1545601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e9f845d787b9b%3A0x6f78967c2521c37!2sN%C3%A1dra%C5%BEn%C3%AD%20486%2C%20517%2021%20T%C3%BDni%C5%A1t%C4%9B%20nad%20Orlic%C3%AD!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </a>
        </footer>
      </main>
    </div>
  );
}
